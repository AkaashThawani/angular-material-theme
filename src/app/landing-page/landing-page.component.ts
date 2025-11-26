import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
    lucideGithub,
    lucidePalette,
    lucideLayers,
    lucideZap,
    lucideAccessibility,
    lucideMoon,
    lucideType,
    lucideArrowRight,
    lucideCheck
} from '@ng-icons/lucide';
import { ThemeService } from '../theme.service';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        CommonModule,
        HlmButtonImports,
        HlmCardImports,
        NgIconComponent
    ],
    viewProviders: [provideIcons({
        lucideGithub,
        lucidePalette,
        lucideLayers,
        lucideZap,
        lucideAccessibility,
        lucideMoon,
        lucideType,
        lucideArrowRight,
        lucideCheck
    })],
    templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
    @Output() navigate = new EventEmitter<string>();

    constructor(private themeService: ThemeService) { }

    presets = [
        {
            name: 'Midnight',
            colors: {
                '--background': '0.18 0.03 250',
                '--foreground': '0.97 0.01 250',
                '--primary': '0.68 0.22 250',
                '--primary-foreground': '0.15 0.03 250',
                '--secondary': '0.62 0.2 290',
                '--secondary-foreground': '0.15 0.03 290',
                '--radius': '0.75rem'
            }
        },
        {
            name: 'Forest',
            colors: {
                '--background': '0.98 0.02 140',
                '--foreground': '0.2 0.05 140',
                '--primary': '0.55 0.2 140',
                '--primary-foreground': '0.98 0.01 140',
                '--secondary': '0.6 0.15 110',
                '--secondary-foreground': '0.98 0.01 110',
                '--radius': '0.25rem'
            }
        },
        {
            name: 'Ocean',
            colors: {
                '--background': '0.97 0.02 220',
                '--foreground': '0.2 0.05 220',
                '--primary': '0.55 0.2 220',
                '--primary-foreground': '0.98 0.01 220',
                '--secondary': '0.6 0.15 190',
                '--secondary-foreground': '0.98 0.01 190',
                '--radius': '1rem'
            }
        },
        {
            name: 'Sunset',
            colors: {
                '--background': '0.98 0.02 40',
                '--foreground': '0.2 0.05 40',
                '--primary': '0.6 0.2 30',
                '--primary-foreground': '0.98 0.01 30',
                '--secondary': '0.65 0.2 340',
                '--secondary-foreground': '0.98 0.01 340',
                '--radius': '0.5rem'
            }
        }
    ];

    applyPreset(preset: any) {
        Object.entries(preset.colors).forEach(([key, value]) => {
            this.themeService.updateVariable(key, value as string);
        });
    }

    scrollToShowcase() {
        // This will be handled by the parent component switching tabs, 
        // but for now we can just emit an event or let the user click the tab.
        // In a real app with routing, we'd navigate.
        // For this demo, we'll just log it or maybe we can inject AppComponent to switch tab?
        // Better to keep it simple for now.
    }
}
