import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-components-showcase',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatTabsModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatDividerModule,
    ],
    templateUrl: './components-showcase.html',
    styleUrls: ['./components-showcase.scss']
})
export class ComponentsShowcaseComponent {
    // Form controls state
    checkboxChecked = true;
    radioValue = '1';
    sliderValue = 50;
    slideToggleChecked = true;
    selectedOption = 'option1';

    // Progress state
    progressValue = 60;

    // Chips
    chips = ['Angular', 'Material', 'Theming', 'Components'];

    // Utility Explorer arrays – copied from UtilityExplorerComponent
    backgrounds: string[] = [
        'mat-bg-primary', 'mat-bg-on-primary', 'mat-bg-primary-container', 'mat-bg-on-primary-container',
        'mat-bg-secondary', 'mat-bg-on-secondary', 'mat-bg-secondary-container', 'mat-bg-on-secondary-container',
        'mat-bg-tertiary', 'mat-bg-on-tertiary', 'mat-bg-tertiary-container', 'mat-bg-on-tertiary-container',
        'mat-bg-error', 'mat-bg-on-error', 'mat-bg-error-container', 'mat-bg-on-error-container',
        'mat-bg-surface', 'mat-bg-on-surface', 'mat-bg-surface-variant', 'mat-bg-on-surface-variant',
        'mat-bg-inverse-surface', 'mat-bg-inverse-on-surface',
        'mat-bg-background', 'mat-bg-on-background'
    ];

    textColors: string[] = [
        'mat-text-primary', 'mat-text-on-primary', 'mat-text-primary-container', 'mat-text-on-primary-container',
        'mat-text-secondary', 'mat-text-on-secondary', 'mat-text-secondary-container', 'mat-text-on-secondary-container',
        'mat-text-tertiary', 'mat-text-on-tertiary', 'mat-text-tertiary-container', 'mat-text-on-tertiary-container',
        'mat-text-error', 'mat-text-on-error', 'mat-text-error-container', 'mat-text-on-error-container',
        'mat-text-surface', 'mat-text-on-surface', 'mat-text-surface-variant', 'mat-text-on-surface-variant',
        'mat-text-inverse-surface', 'mat-text-inverse-on-surface'
    ];

    shapes: string[] = [
        'mat-corner-extra-small', 'mat-corner-small', 'mat-corner-medium',
        'mat-corner-large', 'mat-corner-extra-large', 'mat-corner-full'
    ];

    shadows: string[] = [
        'mat-shadow-0', 'mat-shadow-1', 'mat-shadow-2', 'mat-shadow-3', 'mat-shadow-4', 'mat-shadow-5'
    ];

    typography: string[] = [
        'mat-display-large', 'mat-display-medium', 'mat-display-small',
        'mat-headline-large', 'mat-headline-medium', 'mat-headline-small',
        'mat-title-large', 'mat-title-medium', 'mat-title-small',
        'mat-body-large', 'mat-body-medium', 'mat-body-small',
        'mat-label-large', 'mat-label-medium', 'mat-label-small'
    ];
}
