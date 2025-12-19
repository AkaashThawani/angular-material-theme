import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmMenuImports } from '@spartan-ng/helm/menu';
import { BrnMenuImports } from '@spartan-ng/brain/menu';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmTableImports } from '@spartan-ng/helm/table';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
    lucideDollarSign,
    lucideUsers,
    lucideCreditCard,
    lucideActivity,
    lucideDownload,
    lucideMoreHorizontal,
    lucideArrowUpRight,
    lucideTrendingUp
} from '@ng-icons/lucide';

interface Sale {
    name: string;
    email: string;
    amount: string;
    status: 'Completed' | 'Processing' | 'Failed';
    initials: string;
    color: string;
}

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        HlmCardImports,
        HlmButtonImports,
        HlmMenuImports,
        BrnMenuImports,
        HlmAvatarImports,
        HlmTableImports,
        HlmTabsImports,
        HlmBadgeImports,
        NgIconComponent
    ],
    viewProviders: [provideIcons({
        lucideDollarSign,
        lucideUsers,
        lucideCreditCard,
        lucideActivity,
        lucideDownload,
        lucideMoreHorizontal,
        lucideArrowUpRight,
        lucideTrendingUp
    })],
    template: `
    <div class="h-[800px] w-full max-w-7xl mx-auto rounded-xl border border-border bg-background flex flex-col overflow-hidden shadow-sm" [style.box-shadow]="'var(--shadow)'">
        <!-- App Header with Menu -->
        <div class="h-16 border-b border-border bg-card/50 px-6 flex items-center justify-between shrink-0 backdrop-blur-sm">
            <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <ng-icon name="lucideActivity" class="h-5 w-5"></ng-icon>
                </div>
                <div>
                    <h3 class="font-semibold text-sm leading-none">Analytics Dashboard</h3>
                    <p class="text-xs text-muted-foreground mt-1">Overview of your performance</p>
                </div>
            </div>
            
            <div class="flex items-center gap-2">
                <button hlmBtn size="sm" variant="outline" class="gap-2" [brnMenuTriggerFor]="exportMenu">
                    <ng-icon name="lucideDownload" class="h-4 w-4"></ng-icon>
                    Export
                </button>
                <ng-template #exportMenu>
                    <hlm-menu>
                        <button hlmMenuItem>Export as PDF</button>
                        <button hlmMenuItem>Export as CSV</button>
                        <button hlmMenuItem>Share Link</button>
                    </hlm-menu>
                </ng-template>
                
                <div class="h-8 w-px bg-border mx-2"></div>
                
                <div class="flex items-center gap-2">
                    <hlm-avatar variant="small" class="bg-primary/10 text-primary font-medium">
                        <span class="text-xs font-medium">JD</span>
                    </hlm-avatar>
                </div>
            </div>
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-muted/5">
            
            <!-- Tabs Navigation -->
            <hlm-tabs tab="overview" class="w-full">
                <div class="flex items-center justify-between mb-4">
                    <hlm-tabs-list>
                        <button hlmTabsTrigger="overview">Overview</button>
                        <button hlmTabsTrigger="analytics">Analytics</button>
                        <button hlmTabsTrigger="reports" disabled>Reports</button>
                    </hlm-tabs-list>
                    
                    <div class="flex items-center gap-2 text-sm text-muted-foreground">
                        <ng-icon name="lucideTrendingUp" class="h-4 w-4 text-green-500"></ng-icon>
                        <span class="font-medium text-foreground">+12.5%</span>
                        <span>from last month</span>
                    </div>
                </div>

                <div hlmTabsContent="overview" class="space-y-8">
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div hlmCard class="hover:shadow-md transition-all duration-200">
                            <div hlmCardHeader class="pb-2 flex flex-row items-center justify-between">
                                <p class="text-sm font-medium text-muted-foreground">Total Revenue</p>
                                <ng-icon name="lucideDollarSign" class="h-4 w-4 text-muted-foreground"></ng-icon>
                            </div>
                            <div hlmCardContent>
                                <div class="flex flex-col gap-1">
                                    <span class="text-3xl font-bold tracking-tight">$45,231</span>
                                    <span class="text-xs text-muted-foreground">+20.1% from last month</span>
                                </div>
                            </div>
                        </div>
                        
                        <div hlmCard class="hover:shadow-md transition-all duration-200">
                            <div hlmCardHeader class="pb-2 flex flex-row items-center justify-between">
                                <p class="text-sm font-medium text-muted-foreground">Active Users</p>
                                <ng-icon name="lucideUsers" class="h-4 w-4 text-muted-foreground"></ng-icon>
                            </div>
                            <div hlmCardContent>
                                <div class="flex flex-col gap-1">
                                    <span class="text-3xl font-bold tracking-tight">+2350</span>
                                    <span class="text-xs text-muted-foreground">+180.1% from last month</span>
                                </div>
                            </div>
                        </div>

                        <div hlmCard class="hover:shadow-md transition-all duration-200">
                            <div hlmCardHeader class="pb-2 flex flex-row items-center justify-between">
                                <p class="text-sm font-medium text-muted-foreground">Sales</p>
                                <ng-icon name="lucideCreditCard" class="h-4 w-4 text-muted-foreground"></ng-icon>
                            </div>
                            <div hlmCardContent>
                                <div class="flex flex-col gap-1">
                                    <span class="text-3xl font-bold tracking-tight">+12,234</span>
                                    <span class="text-xs text-muted-foreground">+19% from last month</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-7 gap-6">
                        <!-- Chart Area -->
                        <div hlmCard class="col-span-1 lg:col-span-4 flex flex-col">
                            <div hlmCardHeader>
                                <h4 hlmCardTitle>Revenue Overview</h4>
                                <p hlmCardDescription>Monthly revenue breakdown for the current year.</p>
                            </div>
                            <div hlmCardContent class="flex-1 min-h-[300px] flex items-end justify-between gap-2 pt-8">
                                <!-- Simulated Bar Chart -->
                                <div *ngFor="let h of [40, 70, 50, 90, 60, 80, 45, 75, 55, 85, 65, 95]" 
                                     class="w-full bg-primary/10 rounded-t-sm hover:bg-primary/20 transition-all cursor-pointer relative group"
                                     [style.height.%]="h">
                                     <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                        Revenue: \${{h}}k
                                     </div>
                                </div>
                            </div>
                        </div>

                        <!-- Recent Sales Table -->
                        <div hlmCard class="col-span-1 lg:col-span-3">
                            <div hlmCardHeader>
                                <h4 hlmCardTitle>Recent Sales</h4>
                                <p hlmCardDescription>You made 265 sales this month.</p>
                            </div>
                            <div hlmCardContent class="p-0">
                                <table hlmTable class="w-full">
                                    <tr hlmTr *ngFor="let sale of sales" class="hover:bg-muted/50 transition-colors">
                                        <td hlmTd class="w-[80px]">
                                            <hlm-avatar variant="medium" class="font-medium" [class]="sale.color">
                                                <span class="text-xs font-semibold">{{sale.initials}}</span>
                                            </hlm-avatar>
                                        </td>
                                        <td hlmTd class="font-medium">
                                            <div class="flex flex-col">
                                                <span>{{sale.name}}</span>
                                                <span class="text-xs text-muted-foreground font-normal">{{sale.email}}</span>
                                            </div>
                                        </td>
                                        <td hlmTd class="text-right">
                                            <div class="flex flex-col items-end gap-1">
                                                <span class="font-bold">{{sale.amount}}</span>
                                                <div hlmBadge variant="outline" 
                                                    [class.bg-green-500-10]="sale.status === 'Completed'" 
                                                    [class.text-green-600]="sale.status === 'Completed'"
                                                    class="text-[10px] px-1.5 py-0 h-auto">
                                                    {{sale.status}}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div hlmTabsContent="analytics">
                    <div class="flex items-center justify-center h-[400px] border-2 border-dashed border-border rounded-xl">
                        <div class="text-center text-muted-foreground">
                            <ng-icon name="lucideActivity" class="h-12 w-12 mx-auto mb-2 opacity-50"></ng-icon>
                            <p>Analytics content placeholder</p>
                        </div>
                    </div>
                </div>
            </hlm-tabs>
        </div>
    </div>
  `
})
export class DashboardComponent {
    sales: Sale[] = [
        { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00', status: 'Completed', initials: 'OM', color: 'bg-primary/10 text-primary' },
        { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00', status: 'Processing', initials: 'JL', color: 'bg-secondary/10 text-secondary' },
        { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00', status: 'Completed', initials: 'IN', color: 'bg-accent/10 text-accent' },
        { name: 'William Kim', email: 'will@email.com', amount: '+$99.00', status: 'Completed', initials: 'WK', color: 'bg-blue-500/10 text-blue-600' },
        { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00', status: 'Failed', initials: 'SD', color: 'bg-red-500/10 text-red-600' },
    ];
}
