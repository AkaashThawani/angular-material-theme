import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, ...HlmCardImports, ...HlmButtonImports, NgIconComponent],
  viewProviders: [provideIcons({ lucideCheck, lucideX })],
  template: `
    <div class="py-8">
        <div class="text-center mb-10">
            <h2 class="text-3xl font-bold tracking-tight mb-2">Simple, transparent pricing</h2>
            <p class="text-muted-foreground text-lg">Choose the plan that's right for you</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            <!-- Basic Plan -->
            <div hlmCard class="flex flex-col" [style.box-shadow]="'var(--shadow)'">
                <div hlmCardHeader>
                    <h3 class="text-xl font-semibold">Basic</h3>
                    <p class="text-sm text-muted-foreground mt-1">Essential features for
                        individuals.</p>
                </div>
                <div hlmCardContent class="flex-1">
                    <div class="mb-6">
                        <span class="text-4xl font-bold">$0</span>
                        <span class="text-muted-foreground">/month</span>
                    </div>
                    <ul class="space-y-3 text-sm">
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-primary"></ng-icon>
                            <span>1 User</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-primary"></ng-icon>
                            <span>5 Projects</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-primary"></ng-icon>
                            <span>Community Support</span>
                        </li>
                        <li class="flex items-center gap-2 text-muted-foreground">
                            <ng-icon name="lucideX" class="h-4 w-4"></ng-icon>
                            <span>Advanced Analytics</span>
                        </li>
                    </ul>
                </div>
                <div hlmCardFooter>
                    <button hlmBtn variant="outline" class="w-full">Get Started</button>
                </div>
            </div>

            <!-- Pro Plan -->
            <div hlmCard class="flex flex-col relative border-secondary shadow-lg scale-105 z-10"
                [style.box-shadow]="'var(--shadow)'">
                <div
                    class="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    MOST POPULAR
                </div>
                <div hlmCardHeader>
                    <h3 class="text-xl font-semibold text-secondary">Pro</h3>
                    <p class="text-sm text-muted-foreground mt-1">Perfect for growing teams.</p>
                </div>
                <div hlmCardContent class="flex-1">
                    <div class="mb-6">
                        <span class="text-4xl font-bold">$29</span>
                        <span class="text-muted-foreground">/month</span>
                    </div>
                    <ul class="space-y-3 text-sm">
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-secondary"></ng-icon>
                            <span>5 Users</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-secondary"></ng-icon>
                            <span>Unlimited Projects</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-secondary"></ng-icon>
                            <span>Priority Support</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-secondary"></ng-icon>
                            <span>Advanced Analytics</span>
                        </li>
                    </ul>
                </div>
                <div hlmCardFooter>
                    <button hlmBtn variant="default" class="w-full">Get Started</button>
                </div>
            </div>

            <!-- Enterprise Plan -->
            <div hlmCard class="flex flex-col" [style.box-shadow]="'var(--shadow)'">
                <div hlmCardHeader>
                    <h3 class="text-xl font-semibold text-accent">Enterprise</h3>
                    <p class="text-sm text-muted-foreground mt-1">For large scale organizations.
                    </p>
                </div>
                <div hlmCardContent class="flex-1">
                    <div class="mb-6">
                        <span class="text-4xl font-bold">Custom</span>
                    </div>
                    <ul class="space-y-3 text-sm">
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-accent"></ng-icon>
                            <span>Unlimited Users</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-accent"></ng-icon>
                            <span>SSO & Advanced Security</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-accent"></ng-icon>
                            <span>Dedicated Success Manager</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <ng-icon name="lucideCheck" class="h-4 w-4 text-accent"></ng-icon>
                            <span>Custom SLA</span>
                        </li>
                    </ul>
                </div>
                <div hlmCardFooter>
                    <button hlmBtn variant="outline" class="w-full">Contact Sales</button>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: ``
})
export class PricingComponent { }
