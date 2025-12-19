import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeEditorComponent } from '../theme-editor/theme-editor.component';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideLayers,
  lucideZap,
  lucidePalette,
  lucideMail
} from '@ng-icons/lucide';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ThemeEditorComponent,
    ...HlmButtonImports
  ],
  viewProviders: [provideIcons({
    lucideLayers,
    lucideZap,
    lucidePalette,
    lucideMail
  })],
  templateUrl: './app-layout.html',
})
export class AppLayoutComponent implements OnInit {
  sidebarWidth = 400; // Default fallback
  isResizing = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.sidebarWidth = window.innerWidth * 0.3;
    }
  }

  startResize(event: MouseEvent) {
    this.isResizing = true;
    event.preventDefault();
  }

  onMouseMove(event: MouseEvent) {
    if (this.isResizing) {
      // Limit sidebar between 200px and 50% of screen
      this.sidebarWidth = Math.max(200, Math.min(window.innerWidth * 0.5, event.clientX));
    }
  }

  stopResize() {
    this.isResizing = false;
  }
}
