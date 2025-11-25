import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService, ThemeVariable } from '../theme.service';

@Component({
    selector: 'app-theme-editor',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
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
    openAccordions: Set<string> = new Set();

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

    getSubgroups(group: string): string[] {
        return this.themeService.getSubgroups(group);
    }

    getVariablesBySubgroup(group: string, subgroup: string): ThemeVariable[] {
        return this.themeService.getVariablesBySubgroup(group, subgroup);
    }

    getVariablesWithoutSubgroup(group: string): ThemeVariable[] {
        return this.themeService.getVariablesWithoutSubgroup(group);
    }

    toggleAccordion(subgroup: string) {
        if (this.openAccordions.has(subgroup)) {
            this.openAccordions.delete(subgroup);
        } else {
            this.openAccordions.add(subgroup);
        }
    }

    isAccordionOpen(subgroup: string): boolean {
        return this.openAccordions.has(subgroup);
    }

    getVariablesByGroup(group: string) {
        return this.variables.filter(v => v.group === group);
    }

    updateValue(variable: ThemeVariable, event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.themeService.updateVariable(variable.name, value);
    }

    getHexValue(variableName: string): string {
        return this.themeService.getHexValue(variableName);
    }
}
