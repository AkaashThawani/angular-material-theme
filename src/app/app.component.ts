import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ThemeEditorComponent } from './theme-editor/theme-editor.component';
import { ComponentsShowcaseComponent } from './components-showcase/components-showcase';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSidenavModule,
        MatIconModule,
        ThemeEditorComponent,
        ComponentsShowcaseComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.scss']
})
export class AppComponent {
    title = 'material-theme-app';
    currentSection = 0;

    onScroll(event: any) {
        const container = event.target;
        const scrollPosition = container.scrollTop;
        const sectionHeight = container.clientHeight;

        // Determine which section is currently visible
        // Use floor + 0.9 offset so tab switches when 90% into next section
        const sectionIndex = scrollPosition / sectionHeight;
        const newSection = Math.floor(sectionIndex + 0.1);

        // Update currentSection if it changed
        if (newSection !== this.currentSection && newSection >= 0 && newSection <= 3) {
            this.currentSection = newSection;
        }
    }

    scrollToSection(index: number) {
        const sections = ['components-section'];
        const element = document.getElementById(sections[index]);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
