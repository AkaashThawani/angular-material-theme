import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeEditorComponent } from './theme-editor/theme-editor.component';
import { ComponentsShowcaseComponent } from './components-showcase/components-showcase';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        ThemeEditorComponent,
        ComponentsShowcaseComponent

    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.scss']
})
export class AppComponent {
    title = 'material-theme-app';

}
