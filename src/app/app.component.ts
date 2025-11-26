import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeEditorComponent } from './theme-editor/theme-editor.component';
import { ComponentsShowcaseComponent } from './components-showcase/components-showcase';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
    lucideDollarSign,
    lucideUsers,
    lucideCreditCard,
    lucideActivity,
    lucideCheck,
    lucideX,
    lucidePenSquare,
    lucideInbox,
    lucideFile,
    lucideSend,
    lucideTrash2,
    lucideSearch,
    lucideArchive,
    lucideReply,
    lucideForward,
    lucideMoreVertical,
    lucideFileBarChart,
    lucideDownload,
    lucidePaperclip,
    lucideImage
} from '@ng-icons/lucide';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        ThemeEditorComponent,
        ComponentsShowcaseComponent,
        LandingPageComponent,
        ...HlmCardImports,
        ...HlmButtonImports,
        ...HlmInputImports,
        NgIconComponent
    ],
    viewProviders: [provideIcons({
        lucideDollarSign,
        lucideUsers,
        lucideCreditCard,
        lucideActivity,
        lucideCheck,
        lucideX,
        lucidePenSquare,
        lucideInbox,
        lucideFile,
        lucideSend,
        lucideTrash2,
        lucideSearch,
        lucideArchive,
        lucideReply,
        lucideForward,
        lucideMoreVertical,
        lucideFileBarChart,
        lucideDownload,
        lucidePaperclip,
        lucideImage
    })],
    templateUrl: './app.component.html',
    styleUrls: ['./app.scss']
})
export class AppComponent {
    title = 'material-theme-app';

    // Resizable sidebar
    sidebarWidth = 400;
    isResizing = false;

    // Active tab
    activeTab: 'showcase' | 'dashboard' | 'pricing' | 'mail' | 'landing' = 'landing';

    startResize(event: MouseEvent) {
        this.isResizing = true;
        event.preventDefault();
    }

    onMouseMove(event: MouseEvent) {
        if (this.isResizing) {
            this.sidebarWidth = Math.max(300, Math.min(800, event.clientX));
        }
    }

    stopResize() {
        this.isResizing = false;
    }
}
