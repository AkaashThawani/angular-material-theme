import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ShadowComponents {
    offsetX: string;
    offsetY: string;
    blur: string;
    spread: string;
    color: string;
}

export interface ThemeVariable {
    name: string;
    value: string;
    type: 'color' | 'text' | 'number' | 'typography' | 'shadow';
    label: string;
    group: string;
    description?: string;
    typography?: {
        weight: string;
        size: string;
        lineHeight: string;
        family: string;
    };
    shadow?: ShadowComponents;
}

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private variables: ThemeVariable[] = [
        // Colors - Primary
        { name: '--mat-sys-primary', value: '#6750A4', label: 'Primary', type: 'color', group: 'Colors', description: 'High-emphasis fill color for primary actions like buttons.' },
        { name: '--mat-sys-on-primary', value: '#FFFFFF', label: 'On Primary', type: 'color', group: 'Colors', description: 'Text/icon color used on top of Primary.' },
        { name: '--mat-sys-primary-container', value: '#EADDFF', label: 'Primary Container', type: 'color', group: 'Colors', description: 'Lower-emphasis fill color for containers.' },
        { name: '--mat-sys-on-primary-container', value: '#21005D', label: 'On Primary Container', type: 'color', group: 'Colors', description: 'Text/icon color used on top of Primary Container.' },

        // Colors - Secondary
        { name: '--mat-sys-secondary', value: '#625B71', label: 'Secondary', type: 'color', group: 'Colors', description: 'Less prominent color for secondary actions.' },
        { name: '--mat-sys-on-secondary', value: '#FFFFFF', label: 'On Secondary', type: 'color', group: 'Colors', description: 'Text/icon color used on top of Secondary.' },
        { name: '--mat-sys-secondary-container', value: '#E8DEF8', label: 'Secondary Container', type: 'color', group: 'Colors', description: 'Lower-emphasis fill color for secondary containers.' },
        { name: '--mat-sys-on-secondary-container', value: '#1D192B', label: 'On Secondary Container', type: 'color', group: 'Colors', description: 'Text/icon color used on top of Secondary Container.' },

        // Colors - Tertiary
        { name: '--mat-sys-tertiary', value: '#7D5260', label: 'Tertiary', type: 'color', group: 'Colors', description: 'Accent color for balancing primary/secondary.' },
        { name: '--mat-sys-on-tertiary', value: '#FFFFFF', label: 'On Tertiary', type: 'color', group: 'Colors', description: 'Text/icon color used on top of Tertiary.' },
        { name: '--mat-sys-tertiary-container', value: '#FFD8E4', label: 'Tertiary Container', type: 'color', group: 'Colors', description: 'Lower-emphasis fill color for tertiary containers.' },
        { name: '--mat-sys-on-tertiary-container', value: '#31111D', label: 'On Tertiary Container', type: 'color', group: 'Colors', description: 'Text/icon color used on top of Tertiary Container.' },

        // Colors - Error
        { name: '--mat-sys-error', value: '#B3261E', label: 'Error', type: 'color', group: 'Colors', description: 'Indicates errors or emergency states.' },
        { name: '--mat-sys-on-error', value: '#FFFFFF', label: 'On Error', type: 'color', group: 'Colors', description: 'Text/icon color used on top of Error.' },
        { name: '--mat-sys-error-container', value: '#F9DEDC', label: 'Error Container', type: 'color', group: 'Colors', description: 'Lower-emphasis fill color for error containers.' },
        { name: '--mat-sys-on-error-container', value: '#410E0B', label: 'On Error Container', type: 'color', group: 'Colors', description: 'Text/icon color used on top of Error Container.' },

        // Colors - Surface
        { name: '--mat-sys-surface', value: '#FEF7FF', label: 'Surface', type: 'color', group: 'Colors', description: 'Default background color for cards, sheets, menus.' },
        { name: '--mat-sys-on-surface', value: '#1D1B20', label: 'On Surface', type: 'color', group: 'Colors', description: 'Text/icon color used on top of Surface.' },
        { name: '--mat-sys-surface-variant', value: '#E7E0EC', label: 'Surface Variant', type: 'color', group: 'Colors', description: 'Alternative background for differentiating sections.' },
        { name: '--mat-sys-on-surface-variant', value: '#49454F', label: 'On Surface Variant', type: 'color', group: 'Colors', description: 'Lower-emphasis text color on Surface.' },
        { name: '--mat-sys-inverse-surface', value: '#313033', label: 'Inverse Surface', type: 'color', group: 'Colors', description: 'Contrasting background for snackbars, tooltips.' },
        { name: '--mat-sys-inverse-on-surface', value: '#F4EFF4', label: 'Inverse On Surface', type: 'color', group: 'Colors', description: 'Text/icon color on Inverse Surface.' },

        // Colors - Surface Container
        { name: '--mat-sys-surface-container-lowest', value: '#FFFFFF', label: 'Surface Container Lowest', type: 'color', group: 'Colors', description: 'Lowest emphasis surface.' },
        { name: '--mat-sys-surface-container-low', value: '#F7F2FA', label: 'Surface Container Low', type: 'color', group: 'Colors', description: 'Low emphasis surface.' },
        { name: '--mat-sys-surface-container', value: '#F3EDF7', label: 'Surface Container', type: 'color', group: 'Colors', description: 'Standard surface container.' },
        { name: '--mat-sys-surface-container-high', value: '#ECE6F0', label: 'Surface Container High', type: 'color', group: 'Colors', description: 'High emphasis surface.' },
        { name: '--mat-sys-surface-container-highest', value: '#E6E0E9', label: 'Surface Container Highest', type: 'color', group: 'Colors', description: 'Highest emphasis surface.' },

        // Colors - Outline
        { name: '--mat-sys-outline', value: '#79747E', label: 'Outline', type: 'color', group: 'Colors', description: 'Color for borders and dividers.' },
        { name: '--mat-sys-outline-variant', value: '#CAC4D0', label: 'Outline Variant', type: 'color', group: 'Colors', description: 'Lower-emphasis outline color.' },

        // Colors - Background
        { name: '--mat-sys-background', value: '#FEF7FF', label: 'Background', type: 'color', group: 'Colors', description: 'Underlying background color of the app.' },
        { name: '--mat-sys-on-background', value: '#1D1B20', label: 'On Background', type: 'color', group: 'Colors', description: 'Text/icon color on Background.' },

        // Typography - Body
        { name: '--mat-sys-body-small', value: '400 12px/16px Roboto, sans-serif', label: 'Body Small', type: 'typography', group: 'Typography', description: 'Smallest body text.' },
        { name: '--mat-sys-body-medium', value: '400 14px/20px Roboto, sans-serif', label: 'Body Medium', type: 'typography', group: 'Typography', description: 'Default body text.' },
        { name: '--mat-sys-body-large', value: '400 16px/24px Roboto, sans-serif', label: 'Body Large', type: 'typography', group: 'Typography', description: 'Larger body text.' },

        // Typography - Display
        { name: '--mat-sys-display-small', value: '400 36px/44px Roboto, sans-serif', label: 'Display Small', type: 'typography', group: 'Typography', description: 'Small display heading.' },
        { name: '--mat-sys-display-medium', value: '400 45px/52px Roboto, sans-serif', label: 'Display Medium', type: 'typography', group: 'Typography', description: 'Medium display heading.' },
        { name: '--mat-sys-display-large', value: '400 57px/64px Roboto, sans-serif', label: 'Display Large', type: 'typography', group: 'Typography', description: 'Large display heading.' },

        // Typography - Headline
        { name: '--mat-sys-headline-small', value: '400 24px/32px Roboto, sans-serif', label: 'Headline Small', type: 'typography', group: 'Typography', description: 'Small headline.' },
        { name: '--mat-sys-headline-medium', value: '400 28px/36px Roboto, sans-serif', label: 'Headline Medium', type: 'typography', group: 'Typography', description: 'Medium headline.' },
        { name: '--mat-sys-headline-large', value: '400 32px/40px Roboto, sans-serif', label: 'Headline Large', type: 'typography', group: 'Typography', description: 'Large headline.' },

        // Typography - Label
        { name: '--mat-sys-label-small', value: '500 11px/16px Roboto, sans-serif', label: 'Label Small', type: 'typography', group: 'Typography', description: 'Small label text.' },
        { name: '--mat-sys-label-medium', value: '500 12px/16px Roboto, sans-serif', label: 'Label Medium', type: 'typography', group: 'Typography', description: 'Medium label text.' },
        { name: '--mat-sys-label-large', value: '500 14px/20px Roboto, sans-serif', label: 'Label Large', type: 'typography', group: 'Typography', description: 'Large label text (buttons).' },

        // Typography - Title
        { name: '--mat-sys-title-small', value: '500 14px/20px Roboto, sans-serif', label: 'Title Small', type: 'typography', group: 'Typography', description: 'Small title.' },
        { name: '--mat-sys-title-medium', value: '500 16px/24px Roboto, sans-serif', label: 'Title Medium', type: 'typography', group: 'Typography', description: 'Medium title.' },
        { name: '--mat-sys-title-large', value: '400 22px/28px Roboto, sans-serif', label: 'Title Large', type: 'typography', group: 'Typography', description: 'Large title.' },

        // Shape
        { name: '--mat-sys-corner-extra-small', value: '4px', label: 'Corner XS', type: 'text', group: 'Shape', description: 'Extra small corner radius.' },
        { name: '--mat-sys-corner-small', value: '8px', label: 'Corner SM', type: 'text', group: 'Shape', description: 'Small corner radius.' },
        { name: '--mat-sys-corner-medium', value: '12px', label: 'Corner MD', type: 'text', group: 'Shape', description: 'Medium corner radius (cards).' },
        { name: '--mat-sys-corner-large', value: '16px', label: 'Corner LG', type: 'text', group: 'Shape', description: 'Large corner radius.' },
        { name: '--mat-sys-corner-extra-large', value: '28px', label: 'Corner XL', type: 'text', group: 'Shape', description: 'Extra large corner radius.' },
        { name: '--mat-sys-corner-full', value: '9999px', label: 'Corner Full', type: 'text', group: 'Shape', description: 'Full circle radius (buttons).' },

        // Elevation
        { name: '--mat-sys-level1', value: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)', label: 'Level 1', type: 'shadow', group: 'Effects', description: 'Lowest elevation shadow.' },
        { name: '--mat-sys-level2', value: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)', label: 'Level 2', type: 'shadow', group: 'Effects', description: 'Low elevation shadow.' },
        { name: '--mat-sys-level3', value: '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)', label: 'Level 3', type: 'shadow', group: 'Effects', description: 'Medium elevation shadow.' },
        { name: '--mat-sys-level4', value: '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)', label: 'Level 4', type: 'shadow', group: 'Effects', description: 'High elevation shadow.' },
        { name: '--mat-sys-level5', value: '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)', label: 'Level 5', type: 'shadow', group: 'Effects', description: 'Highest elevation shadow.' },
    ];

    private variablesSubject = new BehaviorSubject<ThemeVariable[]>(this.variables);
    variables$ = this.variablesSubject.asObservable();

    constructor() {
        this.variables.forEach(v => {
            if (v.type === 'typography') {
                v.typography = this.parseTypography(v.value);
            }
            if (v.type === 'shadow') {
                v.shadow = this.parseShadow(v.value);
            }
        });
    }

    getGroups(): string[] {
        return [...new Set(this.variables.map(v => v.group))];
    }

    updateVariable(name: string, value: string) {
        const variable = this.variables.find(v => v.name === name);
        if (variable) {
            variable.value = value;
            if (variable.type === 'typography') {
                variable.typography = this.parseTypography(value);
            }
            if (variable.type === 'shadow') {
                variable.shadow = this.parseShadow(value);
            }
            document.documentElement.style.setProperty(name, value);
            this.variablesSubject.next([...this.variables]);
        }
    }

    updateTypography(name: string, part: 'weight' | 'size' | 'lineHeight' | 'family', value: string) {
        const variable = this.variables.find(v => v.name === name);
        if (variable && variable.typography) {
            variable.typography[part] = value;
            const newValue = `${variable.typography.weight} ${variable.typography.size}/${variable.typography.lineHeight} ${variable.typography.family}`;
            this.updateVariable(name, newValue);
        }
    }

    updateShadow(name: string, part: keyof ShadowComponents, value: string) {
        const variable = this.variables.find(v => v.name === name);
        if (variable && variable.shadow) {
            variable.shadow[part] = value;
            // Reconstruct the box-shadow value (first layer only)
            const newValue = `${variable.shadow.offsetX} ${variable.shadow.offsetY} ${variable.shadow.blur} ${variable.shadow.spread} ${variable.shadow.color}`;
            this.updateVariable(name, newValue);
        }
    }

    private parseTypography(value: string) {
        // Expected format: "weight size/line-height family"
        // Example: "400 12px/16px Roboto, sans-serif"
        const regex = /^(\d+)\s+(\d+px)\/(\d+px)\s+(.+)$/;
        const match = value.match(regex);
        if (match) {
            return {
                weight: match[1],
                size: match[2],
                lineHeight: match[3],
                family: match[4]
            };
        }
        // Fallback if format doesn't match exactly
        return { weight: '400', size: '14px', lineHeight: '20px', family: 'Roboto, sans-serif' };
    }

    private parseShadow(value: string): ShadowComponents {
        // Parse box-shadow value (first layer only)
        // Material shadows have two layers: "0px 1px 2px 0px rgba(...), 0px 1px 3px 1px rgba(...)"
        // We'll parse the first layer for editing
        // Also supports hex colors from color picker

        // Extract first shadow layer (before comma if multiple)
        const firstLayer = value.split(',')[0].trim();

        // Try to match with rgba/rgb color first
        let regex = /^([-\d.]+px)\s+([-\d.]+px)\s+([-\d.]+px)\s+([-\d.]+px)\s+(rgba?\([^)]+\))$/;
        let match = firstLayer.match(regex);

        // If that fails, try hex color format
        if (!match) {
            regex = /^([-\d.]+px)\s+([-\d.]+px)\s+([-\d.]+px)\s+([-\d.]+px)\s+(#[0-9a-fA-F]{3,8})$/;
            match = firstLayer.match(regex);
        }

        if (match) {
            return {
                offsetX: match[1],
                offsetY: match[2],
                blur: match[3],
                spread: match[4],
                color: match[5]
            };
        }

        // If parsing fails, use fallback
        return {
            offsetX: '0px',
            offsetY: '1px',
            blur: '2px',
            spread: '0px',
            color: 'rgba(0, 0, 0, 0.3)'
        };
    }
}
