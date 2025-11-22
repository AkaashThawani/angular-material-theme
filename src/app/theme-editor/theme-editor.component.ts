import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService, ThemeVariable } from '../theme.service';

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
        MatIconModule
    ],
    templateUrl: './theme-editor.component.html',
    styleUrls: ['./theme-editor.component.scss']
})
export class ThemeEditorComponent implements OnInit, OnChanges {
    @Input() activeSection: number = 0;
    @Output() tabChange = new EventEmitter<number>();

    groups: string[] = [];
    variables: ThemeVariable[] = [];
    selectedTabIndex: number = 0;

    constructor(private themeService: ThemeService) { }

    ngOnInit() {
        this.groups = this.themeService.getGroups();
        this.themeService.variables$.subscribe(vars => {
            this.variables = vars;
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['activeSection'] && !changes['activeSection'].firstChange) {
            this.selectedTabIndex = this.activeSection;
        }
    }

    getVariablesByGroup(group: string) {
        return this.variables.filter(v => v.group === group);
    }

    updateValue(variable: ThemeVariable, event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.themeService.updateVariable(variable.name, value);
    }
}
