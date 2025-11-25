import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import { lucideInfo } from '@ng-icons/lucide';

import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmProgressImports } from '@spartan-ng/helm/progress';
import { HlmSkeletonImports } from '@spartan-ng/helm/skeleton';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmSwitchImports } from '@spartan-ng/helm/switch';

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
        ...HlmIconImports,
        ...HlmSeparatorImports,
        ...HlmProgressImports,
        ...HlmSkeletonImports,
        ...HlmCheckboxImports,
        ...HlmSwitchImports,
    ],
    providers: [provideIcons({ lucideInfo })],
    templateUrl: './components-showcase.html',
    styleUrls: ['./components-showcase.scss']
})
export class ComponentsShowcaseComponent {
    // Form controls state
    inputValue = '';
    textareaValue = 'This is a textarea example...';
    searchValue = '';

    // Progress values
    progress1 = 45;
    progress2 = 75;
    progress3 = 30;

    // Control states
    isChecked = false;
    isSwitchOn = false;
}
