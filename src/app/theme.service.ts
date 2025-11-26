import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ThemeVariable {
    name: string;
    value: string;
    type: 'color' | 'radius' | 'spacing' | 'shadow' | 'typography' | 'number';
    label: string;
    group: string;
    subgroup?: string;
    description?: string;
    unit?: string;
    min?: number;
    max?: number;
    step?: number;
}

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private variables: ThemeVariable[] = [
        // Base Colors
        { name: '--background', value: '0.98 0.01 85', label: 'Background', type: 'color', group: 'Colors', subgroup: 'Base', description: 'Page background' },
        { name: '--foreground', value: '0.25 0.04 250', label: 'Foreground', type: 'color', group: 'Colors', subgroup: 'Base', description: 'Default text' },

        // Primary - Vibrant Blue
        { name: '--primary', value: '0.55 0.25 250', label: 'Primary', type: 'color', group: 'Colors', subgroup: 'Primary', description: 'Main brand color' },
        { name: '--primary-foreground', value: '0.99 0.01 250', label: 'Primary Foreground', type: 'color', group: 'Colors', subgroup: 'Primary', description: 'Text on primary' },

        // Secondary - Rich Purple
        { name: '--secondary', value: '0.5 0.22 290', label: 'Secondary', type: 'color', group: 'Colors', subgroup: 'Secondary', description: 'Secondary brand color' },
        { name: '--secondary-foreground', value: '0.99 0.01 290', label: 'Secondary Foreground', type: 'color', group: 'Colors', subgroup: 'Secondary', description: 'Text on secondary' },

        // Destructive - Warm Orange
        { name: '--destructive', value: '0.58 0.24 25', label: 'Destructive', type: 'color', group: 'Colors', subgroup: 'Destructive', description: 'Error/danger color' },
        { name: '--destructive-foreground', value: '0.99 0.01 25', label: 'Destructive Foreground', type: 'color', group: 'Colors', subgroup: 'Destructive', description: 'Text on destructive' },

        // Muted - Soft gray-blue
        { name: '--muted', value: '0.94 0.015 250', label: 'Muted', type: 'color', group: 'Colors', subgroup: 'Muted', description: 'Muted background' },
        { name: '--muted-foreground', value: '0.5 0.03 250', label: 'Muted Foreground', type: 'color', group: 'Colors', subgroup: 'Muted', description: 'Muted text' },

        // Accent - Vibrant Pink
        { name: '--accent', value: '0.6 0.24 340', label: 'Accent', type: 'color', group: 'Colors', subgroup: 'Accent', description: 'Accent background' },
        { name: '--accent-foreground', value: '0.99 0.01 340', label: 'Accent Foreground', type: 'color', group: 'Colors', subgroup: 'Accent', description: 'Text on accent' },

        // Card
        { name: '--card', value: '1 0.005 85', label: 'Card', type: 'color', group: 'Colors', subgroup: 'Card', description: 'Card background' },
        { name: '--card-foreground', value: '0.25 0.04 250', label: 'Card Foreground', type: 'color', group: 'Colors', subgroup: 'Card', description: 'Text on card' },

        // Popover
        { name: '--popover', value: '1 0.005 85', label: 'Popover', type: 'color', group: 'Colors', subgroup: 'Popover', description: 'Popover background' },
        { name: '--popover-foreground', value: '0.25 0.04 250', label: 'Popover Foreground', type: 'color', group: 'Colors', subgroup: 'Popover', description: 'Text on popover' },

        // Borders
        { name: '--border', value: '0.88 0.02 250', label: 'Border', type: 'color', group: 'Colors', subgroup: 'Borders', description: 'Default border color' },
        { name: '--input', value: '0.88 0.02 250', label: 'Input', type: 'color', group: 'Colors', subgroup: 'Borders', description: 'Input border color' },
        { name: '--ring', value: '0.55 0.25 250', label: 'Ring', type: 'color', group: 'Colors', subgroup: 'Borders', description: 'Focus ring color' },

        // Other - Design Tokens
        { name: '--radius', value: '0.5', label: 'Border Radius', type: 'radius', group: 'Other', subgroup: 'Design Tokens', description: 'Global border radius', unit: 'rem', min: 0, max: 2, step: 0.05 },
        { name: '--spacing', value: '0.25', label: 'Base Spacing', type: 'spacing', group: 'Other', subgroup: 'Design Tokens', description: 'Base spacing unit', unit: 'rem', min: 0.25, max: 4, step: 0.25 },
        { name: '--font-size', value: '1', label: 'Base Font Size', type: 'typography', group: 'Other', subgroup: 'Design Tokens', description: 'Base font size', unit: 'rem', min: 0.75, max: 1.5, step: 0.05 },
        { name: '--line-height', value: '1.5', label: 'Line Height', type: 'number', group: 'Other', subgroup: 'Design Tokens', description: 'Base line height', min: 1, max: 2.5, step: 0.05 },
        { name: '--letter-spacing', value: '0', label: 'Letter Spacing', type: 'typography', group: 'Other', subgroup: 'Design Tokens', description: 'Base letter spacing', unit: 'em', min: -0.1, max: 0.2, step: 0.005 },

        // Shadow Components
        { name: '--shadow-x', value: '0', label: 'Horizontal Offset', type: 'number', group: 'Other', subgroup: 'Box Shadow', description: 'Shadow X offset', unit: 'px', min: -20, max: 20, step: 1 },
        { name: '--shadow-y', value: '2', label: 'Vertical Offset', type: 'number', group: 'Other', subgroup: 'Box Shadow', description: 'Shadow Y offset', unit: 'px', min: -20, max: 20, step: 1 },
        { name: '--shadow-blur', value: '4', label: 'Blur Radius', type: 'number', group: 'Other', subgroup: 'Box Shadow', description: 'Shadow blur', unit: 'px', min: 0, max: 50, step: 1 },
        { name: '--shadow-spread', value: '0', label: 'Spread Radius', type: 'number', group: 'Other', subgroup: 'Box Shadow', description: 'Shadow spread', unit: 'px', min: -20, max: 20, step: 1 },
        { name: '--shadow-color', value: '0 0 0', label: 'Shadow Color', type: 'color', group: 'Other', subgroup: 'Box Shadow', description: 'Shadow color' },
    ];

    private variablesSubject = new BehaviorSubject<ThemeVariable[]>(this.variables);
    variables$ = this.variablesSubject.asObservable();

    constructor() {
        this.variables.forEach(v => {
            this.updateCSSVariable(v.name, v.value);
        });
    }

    getGroups(): string[] {
        return [...new Set(this.variables.map(v => v.group))];
    }

    getSubgroups(group: string): string[] {
        return [...new Set(
            this.variables
                .filter(v => v.group === group && v.subgroup)
                .map(v => v.subgroup!)
        )];
    }

    getVariablesBySubgroup(group: string, subgroup: string): ThemeVariable[] {
        return this.variables.filter(v => v.group === group && v.subgroup === subgroup);
    }

    getVariablesWithoutSubgroup(group: string): ThemeVariable[] {
        return this.variables.filter(v => v.group === group && !v.subgroup);
    }

    updateVariable(name: string, value: string) {
        const variable = this.variables.find(v => v.name === name);
        if (variable) {
            if (variable.type === 'color' && value.startsWith('#')) {
                value = this.hexToOKLCH(value);
            }

            variable.value = value;
            this.updateCSSVariable(name, value);
            this.variablesSubject.next([...this.variables]);
        }
    }

    getHexValue(variableName: string): string {
        const variable = this.variables.find(v => v.name === variableName);
        if (variable && variable.type === 'color') {
            return this.oklchToHex(variable.value);
        }
        return '#000000';
    }

    private updateCSSVariable(name: string, value: string) {
        let finalValue = value;
        const variable = this.variables.find(v => v.name === name);

        if (variable?.type === 'color' && !value.startsWith('oklch(') && !value.startsWith('#')) {
            finalValue = `oklch(${value})`;
        } else if (variable && (variable.type === 'radius' || variable.type === 'spacing' || variable.type === 'typography')) {
            // Append unit if not already present
            if (variable.unit && !value.includes(variable.unit)) {
                finalValue = `${value}${variable.unit}`;
            }
        } else if (variable && variable.type === 'number' && variable.unit === 'px') {
            // Append px unit for number types with px unit
            if (!value.includes('px')) {
                finalValue = `${value}${variable.unit}`;
            }
        }

        document.documentElement.style.setProperty(name, finalValue);

        // If this is a shadow component, recompute the full shadow
        if (name.startsWith('--shadow-')) {
            this.updateComputedShadow();
        }
    }

    private updateComputedShadow() {
        const x = this.variables.find(v => v.name === '--shadow-x')?.value || '0';
        const y = this.variables.find(v => v.name === '--shadow-y')?.value || '2';
        const blur = this.variables.find(v => v.name === '--shadow-blur')?.value || '4';
        const spread = this.variables.find(v => v.name === '--shadow-spread')?.value || '0';
        const colorVar = this.variables.find(v => v.name === '--shadow-color');

        // Convert OKLCH to rgba for shadow
        let colorValue = 'rgba(0, 0, 0, 0.1)';
        if (colorVar) {
            const hex = this.oklchToHex(colorVar.value);
            // Convert hex to rgba with 10% opacity
            const r = parseInt(hex.substring(1, 3), 16);
            const g = parseInt(hex.substring(3, 5), 16);
            const b = parseInt(hex.substring(5, 7), 16);
            colorValue = `rgba(${r}, ${g}, ${b}, 0.1)`;
        }

        const shadowValue = `${x}px ${y}px ${blur}px ${spread}px ${colorValue}`;
        document.documentElement.style.setProperty('--shadow', shadowValue);
    }

    private hexToOKLCH(hex: string): string {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16) / 255;
        const g = parseInt(hex.substring(2, 4), 16) / 255;
        const b = parseInt(hex.substring(4, 6), 16) / 255;

        const toLinear = (c: number) => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        const rLin = toLinear(r);
        const gLin = toLinear(g);
        const bLin = toLinear(b);

        const x = 0.4124564 * rLin + 0.3575761 * gLin + 0.1804375 * bLin;
        const y = 0.2126729 * rLin + 0.7151522 * gLin + 0.0721750 * bLin;
        const z = 0.0193339 * rLin + 0.1191920 * gLin + 0.9503041 * bLin;

        const xn = 0.95047, yn = 1.00000, zn = 1.08883;
        const f = (t: number) => t > 0.008856 ? Math.pow(t, 1 / 3) : (7.787 * t) + (16 / 116);
        const fx = f(x / xn);
        const fy = f(y / yn);
        const fz = f(z / zn);

        const L = (116 * fy) - 16;
        const a = 500 * (fx - fy);
        const bVal = 200 * (fy - fz);

        const C = Math.sqrt(a * a + bVal * bVal);
        let H = Math.atan2(bVal, a) * (180 / Math.PI);
        if (H < 0) H += 360;

        const l = Math.max(0, Math.min(1, L / 100));
        const c = Math.max(0, Math.min(0.4, C / 150));
        const h = H;

        return `${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)}`;
    }

    private oklchToHex(oklch: string): string {
        try {
            const parts = oklch.trim().split(/\s+/);
            if (parts.length !== 3) return '#000000';

            const l = parseFloat(parts[0]) * 100;
            const c = parseFloat(parts[1]) * 150;
            const h = parseFloat(parts[2]);

            const hRad = h * (Math.PI / 180);
            const a = c * Math.cos(hRad);
            const bVal = c * Math.sin(hRad);

            const fy = (l + 16) / 116;
            const fx = a / 500 + fy;
            const fz = fy - bVal / 200;

            const finv = (t: number) => t > 0.206897 ? Math.pow(t, 3) : (t - 16 / 116) / 7.787;
            const xn = 0.95047, yn = 1.00000, zn = 1.08883;
            const x = xn * finv(fx);
            const y = yn * finv(fy);
            const z = zn * finv(fz);

            let rLin = 3.2404542 * x - 1.5371385 * y - 0.4985314 * z;
            let gLin = -0.9692660 * x + 1.8760108 * y + 0.0415560 * z;
            let bLin = 0.0556434 * x - 0.2040259 * y + 1.0572252 * z;

            const fromLinear = (c: number) => {
                c = Math.max(0, Math.min(1, c));
                return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
            };
            const r = Math.round(fromLinear(rLin) * 255);
            const g = Math.round(fromLinear(gLin) * 255);
            const b = Math.round(fromLinear(bLin) * 255);

            return '#' + [r, g, b].map(x => {
                const hex = Math.max(0, Math.min(255, x)).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
        } catch (e) {
            return '#000000';
        }
    }
}
