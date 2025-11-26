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
                '--card': '0.22 0.03 250',
                '--card-foreground': '0.97 0.01 250',
                '--popover': '0.22 0.03 250',
                '--popover-foreground': '0.97 0.01 250',
                '--primary': '0.68 0.22 250',
                '--primary-foreground': '0.15 0.03 250',
                '--secondary': '0.62 0.2 290',
                '--secondary-foreground': '0.15 0.03 290',
                '--muted': '0.28 0.03 250',
                '--muted-foreground': '0.7 0.02 250',
                '--accent': '0.68 0.22 340',
                '--accent-foreground': '0.15 0.03 340',
                '--destructive': '0.65 0.22 25',
                '--destructive-foreground': '0.15 0.03 25',
                '--border': '0.97 0.01 250 / 15%',
                '--input': '0.97 0.01 250 / 20%',
                '--ring': '0.68 0.22 250',
                '--radius': '0.75rem',
                '--sidebar': '0.2 0.03 250',
                '--sidebar-foreground': '0.97 0.01 250',
                '--sidebar-primary': '0.68 0.22 250',
                '--sidebar-primary-foreground': '0.15 0.03 250',
                '--sidebar-accent': '0.28 0.03 250',
                '--sidebar-accent-foreground': '0.97 0.01 250',
                '--sidebar-border': '0.97 0.01 250 / 15%',
                '--sidebar-ring': '0.68 0.22 250'
            }
        },
        {
            name: 'Forest',
            colors: {
                '--background': '0.98 0.02 140',
                '--foreground': '0.2 0.05 140',
                '--card': '1 0.01 140',
                '--card-foreground': '0.2 0.05 140',
                '--popover': '1 0.01 140',
                '--popover-foreground': '0.2 0.05 140',
                '--primary': '0.55 0.2 140',
                '--primary-foreground': '0.98 0.01 140',
                '--secondary': '0.6 0.15 110',
                '--secondary-foreground': '0.98 0.01 110',
                '--muted': '0.94 0.03 140',
                '--muted-foreground': '0.45 0.04 140',
                '--accent': '0.6 0.18 160',
                '--accent-foreground': '0.98 0.01 160',
                '--destructive': '0.6 0.2 25',
                '--destructive-foreground': '0.98 0.01 25',
                '--border': '0.9 0.02 140',
                '--input': '0.9 0.02 140',
                '--ring': '0.55 0.2 140',
                '--radius': '0.5rem',
                '--sidebar': '0.96 0.02 140',
                '--sidebar-foreground': '0.2 0.05 140',
                '--sidebar-primary': '0.55 0.2 140',
                '--sidebar-primary-foreground': '0.98 0.01 140',
                '--sidebar-accent': '0.94 0.03 140',
                '--sidebar-accent-foreground': '0.2 0.05 140',
                '--sidebar-border': '0.9 0.02 140',
                '--sidebar-ring': '0.55 0.2 140'
            }
        },
        {
            name: 'Ocean',
            colors: {
                '--background': '0.97 0.02 220',
                '--foreground': '0.2 0.05 220',
                '--card': '0.99 0.01 220',
                '--card-foreground': '0.2 0.05 220',
                '--popover': '0.99 0.01 220',
                '--popover-foreground': '0.2 0.05 220',
                '--primary': '0.55 0.2 220',
                '--primary-foreground': '0.98 0.01 220',
                '--secondary': '0.6 0.15 190',
                '--secondary-foreground': '0.98 0.01 190',
                '--muted': '0.94 0.02 220',
                '--muted-foreground': '0.45 0.04 220',
                '--accent': '0.6 0.18 200',
                '--accent-foreground': '0.98 0.01 200',
                '--destructive': '0.6 0.2 25',
                '--destructive-foreground': '0.98 0.01 25',
                '--border': '0.9 0.02 220',
                '--input': '0.9 0.02 220',
                '--ring': '0.55 0.2 220',
                '--radius': '1rem',
                '--sidebar': '0.95 0.02 220',
                '--sidebar-foreground': '0.2 0.05 220',
                '--sidebar-primary': '0.55 0.2 220',
                '--sidebar-primary-foreground': '0.98 0.01 220',
                '--sidebar-accent': '0.94 0.02 220',
                '--sidebar-accent-foreground': '0.2 0.05 220',
                '--sidebar-border': '0.9 0.02 220',
                '--sidebar-ring': '0.55 0.2 220'
            }
        },
        {
            name: 'Sunset',
            colors: {
                '--background': '0.98 0.02 40',
                '--foreground': '0.2 0.05 40',
                '--card': '1 0.01 40',
                '--card-foreground': '0.2 0.05 40',
                '--popover': '1 0.01 40',
                '--popover-foreground': '0.2 0.05 40',
                '--primary': '0.6 0.2 30',
                '--primary-foreground': '0.98 0.01 30',
                '--secondary': '0.65 0.2 340',
                '--secondary-foreground': '0.98 0.01 340',
                '--muted': '0.94 0.03 40',
                '--muted-foreground': '0.45 0.04 40',
                '--accent': '0.65 0.18 50',
                '--accent-foreground': '0.98 0.01 50',
                '--destructive': '0.6 0.2 25',
                '--destructive-foreground': '0.98 0.01 25',
                '--border': '0.9 0.02 40',
                '--input': '0.9 0.02 40',
                '--ring': '0.6 0.2 30',
                '--radius': '0.5rem',
                '--sidebar': '0.96 0.02 40',
                '--sidebar-foreground': '0.2 0.05 40',
                '--sidebar-primary': '0.6 0.2 30',
                '--sidebar-primary-foreground': '0.98 0.01 30',
                '--sidebar-accent': '0.94 0.03 40',
                '--sidebar-accent-foreground': '0.2 0.05 40',
                '--sidebar-border': '0.9 0.02 40',
                '--sidebar-ring': '0.6 0.2 30'
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
