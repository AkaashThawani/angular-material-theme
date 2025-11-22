import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { provideIcons } from '@ng-icons/core';
import { lucideInfo } from '@ng-icons/lucide';

@Component({
    selector: 'app-components-showcase',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ...HlmButtonImports,
        ...HlmCardImports,
        ...HlmInputImports,
        ...HlmBadgeImports,
        ...HlmAlertImports,
        ...HlmIconImports
    ],
    providers: [provideIcons({ lucideInfo })],
    templateUrl: './components-showcase.html',
    styleUrls: ['./components-showcase.scss']
})
export class ComponentsShowcaseComponent {
    // Form controls state
    inputValue = '';

    // Utility Explorer arrays
    backgrounds: string[] = [
        'bg-primary', 'bg-primary-foreground',
        'bg-secondary', 'bg-secondary-foreground',
        'bg-destructive', 'bg-destructive-foreground',
        'bg-muted', 'bg-muted-foreground',
        'bg-accent', 'bg-accent-foreground',
        'bg-card', 'bg-card-foreground',
        'bg-popover', 'bg-popover-foreground'
    ];

    shapes: string[] = [
        'rounded-none', 'rounded-sm', 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full'
    ];
}
