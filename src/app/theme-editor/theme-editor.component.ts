import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService, ThemeVariable, ShadowComponents } from '../theme.service';

import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-theme-editor',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule
    ],
    templateUrl: './theme-editor.component.html',
    styleUrls: ['./theme-editor.component.scss']
})
export class ThemeEditorComponent implements OnInit, OnChanges {
    @Input() activeSection: number = 0;

    groups: string[] = [];
    variables: ThemeVariable[] = [];
    selectedTabIndex: number = 0;

    typographyGroups: { name: string; variables: ThemeVariable[] }[] = [];

    constructor(private themeService: ThemeService) { }

    ngOnInit() {
        this.groups = this.themeService.getGroups();
        this.themeService.variables$.subscribe(vars => {
            this.variables = vars;
            this.organizeTypographyVariables();
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['activeSection'] && !changes['activeSection'].firstChange) {
            // Auto-switch tab based on active section
            // 0: Colors, 1: Typography, 2: Shape, 3: Effects
            this.selectedTabIndex = this.activeSection;
        }
    }

    getVariablesByGroup(group: string) {
        if (group === 'Typography') {
            return []; // Handled separately
        }
        return this.variables.filter(v => v.group === group);
    }

    organizeTypographyVariables() {
        const typographyVars = this.variables.filter(v => v.group === 'Typography');
        const categories = ['Display', 'Headline', 'Title', 'Body', 'Label'];
        const sizes = ['Large', 'Medium', 'Small'];

        this.typographyGroups = categories.map(category => {
            const categoryVars = typographyVars.filter(v => v.label.startsWith(category));

            // Sort by size: Large, Medium, Small
            categoryVars.sort((a, b) => {
                const sizeA = sizes.findIndex(s => a.label.includes(s));
                const sizeB = sizes.findIndex(s => b.label.includes(s));
                return sizeA - sizeB;
            });

            return {
                name: category,
                variables: categoryVars
            };
        });
    }

    updateValue(variable: ThemeVariable, event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.themeService.updateVariable(variable.name, value);
    }

    updateTypography(variable: ThemeVariable, part: 'weight' | 'size' | 'lineHeight' | 'family', event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.themeService.updateTypography(variable.name, part, value);
    }

    updateShadow(variable: ThemeVariable, part: keyof ShadowComponents, event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.themeService.updateShadow(variable.name, part, value);
    }
}
