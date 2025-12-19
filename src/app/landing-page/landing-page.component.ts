import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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
import { DashboardComponent } from '../dashboard/dashboard';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        CommonModule,
        HlmButtonImports,
        HlmCardImports,
        NgIconComponent,
        DashboardComponent
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
    constructor(private themeService: ThemeService, private router: Router) { }

    activeDemoTab: 'dashboard' | 'analytics' | 'settings' | 'user' = 'dashboard';

    navigateTo(path: string) {
        this.router.navigate([path]);
    }

    presets = [
        {
            name: 'Minimal (2-Tone)',
            colors: {
                '--background': '0.98 0.01 240',
                '--foreground': '0.2 0.02 240',
                '--card': '1 0 0',
                '--card-foreground': '0.2 0.02 240',
                '--popover': '1 0 0',
                '--popover-foreground': '0.2 0.02 240',
                '--primary': '0.2 0.02 240',
                '--primary-foreground': '0.98 0.01 240',
                '--secondary': '0.96 0.01 240',
                '--secondary-foreground': '0.2 0.02 240',
                '--muted': '0.96 0.01 240',
                '--muted-foreground': '0.5 0.02 240',
                '--accent': '0.96 0.01 240',
                '--accent-foreground': '0.2 0.02 240',
                '--destructive': '0.6 0.2 25',
                '--destructive-foreground': '0.98 0.01 25',
                '--border': '0.92 0.01 240',
                '--input': '0.92 0.01 240',
                '--ring': '0.2 0.02 240',
                '--radius': '0.5rem',
                '--sidebar': '0.98 0.01 240',
                '--sidebar-foreground': '0.2 0.02 240',
                '--sidebar-primary': '0.2 0.02 240',
                '--sidebar-primary-foreground': '0.98 0.01 240',
                '--sidebar-accent': '0.96 0.01 240',
                '--sidebar-accent-foreground': '0.2 0.02 240',
                '--sidebar-border': '0.92 0.01 240',
                '--sidebar-ring': '0.2 0.02 240'
            }
        },
        {
            name: 'Standard (3-Tone)',
            colors: {
                '--background': '0.98 0.02 160',
                '--foreground': '0.2 0.05 160',
                '--card': '1 0.01 160',
                '--card-foreground': '0.2 0.05 160',
                '--popover': '1 0.01 160',
                '--popover-foreground': '0.2 0.05 160',
                '--primary': '0.55 0.2 160',
                '--primary-foreground': '0.98 0.01 160',
                '--secondary': '0.7 0.15 140',
                '--secondary-foreground': '0.1 0.05 140',
                '--muted': '0.94 0.03 160',
                '--muted-foreground': '0.45 0.04 160',
                '--accent': '0.94 0.03 160',
                '--accent-foreground': '0.2 0.05 160',
                '--destructive': '0.6 0.2 25',
                '--destructive-foreground': '0.98 0.01 25',
                '--border': '0.9 0.02 160',
                '--input': '0.9 0.02 160',
                '--ring': '0.55 0.2 160',
                '--radius': '0.75rem',
                '--sidebar': '0.96 0.02 160',
                '--sidebar-foreground': '0.2 0.05 160',
                '--sidebar-primary': '0.55 0.2 160',
                '--sidebar-primary-foreground': '0.98 0.01 160',
                '--sidebar-accent': '0.94 0.03 160',
                '--sidebar-accent-foreground': '0.2 0.05 160',
                '--sidebar-border': '0.9 0.02 160',
                '--sidebar-ring': '0.55 0.2 160'
            }
        },
        {
            name: 'Vibrant (4-Tone)',
            colors: {
                '--background': '0.1 0.05 260',
                '--foreground': '0.98 0.02 260',
                '--card': '0.15 0.05 260',
                '--card-foreground': '0.98 0.02 260',
                '--popover': '0.15 0.05 260',
                '--popover-foreground': '0.98 0.02 260',
                '--primary': '0.6 0.25 260',
                '--primary-foreground': '0.1 0.05 260',
                '--secondary': '0.6 0.2 320',
                '--secondary-foreground': '0.1 0.05 320',
                '--muted': '0.2 0.05 260',
                '--muted-foreground': '0.7 0.05 260',
                '--accent': '0.7 0.2 40',
                '--accent-foreground': '0.1 0.05 40',
                '--destructive': '0.6 0.25 25',
                '--destructive-foreground': '0.98 0.02 25',
                '--border': '0.2 0.05 260',
                '--input': '0.2 0.05 260',
                '--ring': '0.6 0.25 260',
                '--radius': '1rem',
                '--sidebar': '0.12 0.05 260',
                '--sidebar-foreground': '0.98 0.02 260',
                '--sidebar-primary': '0.6 0.25 260',
                '--sidebar-primary-foreground': '0.1 0.05 260',
                '--sidebar-accent': '0.2 0.05 260',
                '--sidebar-accent-foreground': '0.98 0.02 260',
                '--sidebar-border': '0.2 0.05 260',
                '--sidebar-ring': '0.6 0.25 260'
            }
        }
    ];

    applyPreset(preset: any) {
        Object.entries(preset.colors).forEach(([key, value]) => {
            this.themeService.updateVariable(key, value as string);
        });
    }

    scrollTo(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
