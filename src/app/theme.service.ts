import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ThemeVariable {
    name: string;
    value: string;
    type: 'color' | 'text' | 'number' | 'typography' | 'shadow';
    label: string;
    group: string;
    description?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    // Tailwind/Spartan Theme Variables
    // Values based on the user's guide (OKLCH)
    private variables: ThemeVariable[] = [
        // Colors
        { name: '--primary', value: '0.205 0 0', label: 'Primary', type: 'color', group: 'Colors', description: 'Main brand color.' },
        { name: '--primary-foreground', value: '0.985 0 0', label: 'On Primary', type: 'color', group: 'Colors', description: 'Text color on primary.' },
        { name: '--secondary', value: '0.97 0 0', label: 'Secondary', type: 'color', group: 'Colors', description: 'Secondary brand color.' },
        { name: '--secondary-foreground', value: '0.205 0 0', label: 'On Secondary', type: 'color', group: 'Colors', description: 'Text color on secondary.' },
        { name: '--destructive', value: '0.577 0.245 27.325', label: 'Destructive', type: 'color', group: 'Colors', description: 'Destructive/Error color.' },
        { name: '--destructive-foreground', value: '0.985 0 0', label: 'On Destructive', type: 'color', group: 'Colors', description: 'Text color on destructive.' },
        { name: '--background', value: '1 0 0', label: 'Background', type: 'color', group: 'Colors', description: 'Page background color.' },
        { name: '--foreground', value: '0.145 0 0', label: 'Foreground', type: 'color', group: 'Colors', description: 'Default text color.' },
        { name: '--card', value: '1 0 0', label: 'Card', type: 'color', group: 'Colors', description: 'Card background color.' },
        { name: '--card-foreground', value: '0.145 0 0', label: 'Card Foreground', type: 'color', group: 'Colors', description: 'Text color on card.' },
        { name: '--muted', value: '0.97 0 0', label: 'Muted', type: 'color', group: 'Colors', description: 'Muted background color.' },
        { name: '--muted-foreground', value: '0.556 0 0', label: 'Muted Foreground', type: 'color', group: 'Colors', description: 'Muted text color.' },
        { name: '--accent', value: '0.97 0 0', label: 'Accent', type: 'color', group: 'Colors', description: 'Accent background color.' },
        { name: '--accent-foreground', value: '0.205 0 0', label: 'Accent Foreground', type: 'color', group: 'Colors', description: 'Text color on accent.' },
        { name: '--border', value: '0.922 0 0', label: 'Border', type: 'color', group: 'Colors', description: 'Default border color.' },
        { name: '--input', value: '0.922 0 0', label: 'Input', type: 'color', group: 'Colors', description: 'Input border color.' },
        { name: '--ring', value: '0.708 0 0', label: 'Ring', type: 'color', group: 'Colors', description: 'Focus ring color.' },

        // Shape
        { name: '--radius', value: '0.625rem', label: 'Corner Radius', type: 'text', group: 'Shape', description: 'Global corner radius.' }
    ];

    private variablesSubject = new BehaviorSubject<ThemeVariable[]>(this.variables);
    variables$ = this.variablesSubject.asObservable();

    constructor() {
        // Initialize variables on DOM
        this.variables.forEach(v => {
            this.updateCSSVariable(v.name, v.value);
        });
    }

    getGroups(): string[] {
        return [...new Set(this.variables.map(v => v.group))];
    }

    updateVariable(name: string, value: string) {
        const variable = this.variables.find(v => v.name === name);
        if (variable) {
            variable.value = value;
            this.updateCSSVariable(name, value);
            this.variablesSubject.next([...this.variables]);
        }
    }

    private updateCSSVariable(name: string, value: string) {
        // If it's a color and not using oklch() wrapper in the value itself (which our data doesn't),
        // we assume the value is just the numbers "0.205 0 0".
        // However, Tailwind v4 / Spartan might expect the variable to hold just the channels or the full color.
        // The user's guide says: "--primary: oklch(0.205 0 0);"
        // So we should probably prepend 'oklch(' and append ')' if it's a color type and doesn't have it?
        // OR, the user's guide says: "Define variables as oklch(0.5 0.2 180)".
        // So the value stored in our service should probably be the full string "oklch(0.205 0 0)" OR we wrap it here.
        // Let's assume the input value from the editor will be just the numbers or we handle it.
        // For now, let's assume the value in the array IS the value to set.
        // Wait, the user's guide example: "--primary: oklch(0.205 0 0);"
        // My default values in the array above are "0.205 0 0".
        // So I should wrap them in `oklch()` when setting the property IF they are colors?
        // BUT, the user's guide also says: "Use OKLCH without the color space function... See the Tailwind documentation".
        // Actually, Tailwind v4 uses `oklch(var(--primary))` in the config usually?
        // The user's guide says: "The variable --primary maps to the class bg-primary".
        // And: ":root { --primary: oklch(0.205 0 0); }"
        // So the variable itself contains `oklch(...)`.

        let finalValue = value;
        const variable = this.variables.find(v => v.name === name);

        if (variable?.type === 'color' && !value.startsWith('oklch(') && !value.startsWith('#')) {
            // It's likely just the channels "0.205 0 0"
            finalValue = `oklch(${value})`;
        }

        document.documentElement.style.setProperty(name, finalValue);
    }
}
