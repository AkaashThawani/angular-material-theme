import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppLayoutComponent } from './app-layout/app-layout';
import { ComponentsShowcaseComponent } from './components-showcase/components-showcase';
import { MailComponent } from './mail/mail.component';
import { DashboardComponent } from './dashboard/dashboard';
import { PricingComponent } from './pricing/pricing';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: 'showcase', component: ComponentsShowcaseComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'pricing', component: PricingComponent },
            { path: 'mail', component: MailComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];
