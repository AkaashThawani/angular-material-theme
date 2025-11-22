import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-utility-explorer',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './utility-explorer.html',
  styleUrls: ['./utility-explorer.scss']
})
export class UtilityExplorerComponent {
  // Lists for Showcase & Playground
  backgrounds = [
    'mat-bg-primary', 'mat-bg-on-primary', 'mat-bg-primary-container', 'mat-bg-on-primary-container',
    'mat-bg-secondary', 'mat-bg-on-secondary', 'mat-bg-secondary-container', 'mat-bg-on-secondary-container',
    'mat-bg-tertiary', 'mat-bg-on-tertiary', 'mat-bg-tertiary-container', 'mat-bg-on-tertiary-container',
    'mat-bg-error', 'mat-bg-on-error', 'mat-bg-error-container', 'mat-bg-on-error-container',
    'mat-bg-surface', 'mat-bg-on-surface', 'mat-bg-surface-variant', 'mat-bg-on-surface-variant',
    'mat-bg-inverse-surface', 'mat-bg-inverse-on-surface',
    'mat-bg-background', 'mat-bg-on-background'
  ];

  textColors = [
    'mat-text-primary', 'mat-text-on-primary', 'mat-text-primary-container', 'mat-text-on-primary-container',
    'mat-text-secondary', 'mat-text-on-secondary', 'mat-text-secondary-container', 'mat-text-on-secondary-container',
    'mat-text-tertiary', 'mat-text-on-tertiary', 'mat-text-tertiary-container', 'mat-text-on-tertiary-container',
    'mat-text-error', 'mat-text-on-error', 'mat-text-error-container', 'mat-text-on-error-container',
    'mat-text-surface', 'mat-text-on-surface', 'mat-text-surface-variant', 'mat-text-on-surface-variant',
    'mat-text-inverse-surface', 'mat-text-inverse-on-surface'
  ];

  shapes = [
    'mat-corner-extra-small', 'mat-corner-small', 'mat-corner-medium',
    'mat-corner-large', 'mat-corner-extra-large', 'mat-corner-full'
  ];

  shadows = [
    'mat-shadow-0', 'mat-shadow-1', 'mat-shadow-2', 'mat-shadow-3', 'mat-shadow-4', 'mat-shadow-5'
  ];

  typography = [
    'mat-display-large', 'mat-display-medium', 'mat-display-small',
    'mat-headline-large', 'mat-headline-medium', 'mat-headline-small',
    'mat-title-large', 'mat-title-medium', 'mat-title-small',
    'mat-body-large', 'mat-body-medium', 'mat-body-small',
    'mat-label-large', 'mat-label-medium', 'mat-label-small'
  ];

  // Playground State
  selectedBg = 'mat-bg-surface-container';
  selectedText = 'mat-text-on-surface';
  selectedShape = 'mat-corner-medium';
  selectedShadow = 'mat-shadow-1';

  get generatedHtml(): string {
    return `<div class="${this.selectedBg} ${this.selectedText} ${this.selectedShape} ${this.selectedShadow} p-4">
  Content
</div>`;
  }
}
