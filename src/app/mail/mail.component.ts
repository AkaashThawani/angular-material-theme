import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
    lucidePenSquare,
    lucideInbox,
    lucideFile,
    lucideSend,
    lucideTrash2,
    lucideSearch,
    lucideArchive,
    lucideReply,
    lucideMoreVertical,
    lucideStar,
    lucideClock
} from '@ng-icons/lucide';

interface Mail {
    id: string;
    sender: string;
    email: string;
    subject: string;
    preview: string;
    content: string;
    date: string;
    read: boolean;
    labels: string[];
    avatarColor: string;
    initials: string;
}

@Component({
    selector: 'app-mail',
    standalone: true,
    imports: [
        CommonModule,
        HlmButtonImports,
        HlmInputImports,
        NgIconComponent
    ],
    viewProviders: [provideIcons({
        lucidePenSquare,
        lucideInbox,
        lucideFile,
        lucideSend,
        lucideTrash2,
        lucideSearch,
        lucideArchive,
        lucideReply,
        lucideMoreVertical,
        lucideStar,
        lucideClock
    })],
    templateUrl: './mail.component.html',
})
export class MailComponent {
    selectedMailId: string | null = '1';
    isComposing = false;

    mails: Mail[] = [
        {
            id: '1',
            sender: 'Alice Smith',
            email: 'alice@example.com',
            subject: 'Project Update: Q4 Goals',
            preview: 'Hi team, here are the latest updates on our Q4 goals...',
            content: `
                <p>Hi team,</p>
                <p>Here are the latest updates on our Q4 goals. We are making great progress on the new feature rollout.</p>
                <p>Key highlights:</p>
                <ul class="list-disc pl-5 my-2">
                    <li>User acquisition up by 15%</li>
                    <li>Retention rate stable at 85%</li>
                    <li>New dashboard feature in beta testing</li>
                </ul>
                <p class="mt-4">Best regards,<br>Alice</p>
            `,
            date: '10:30 AM',
            read: true,
            labels: ['Work', 'Important'],
            avatarColor: 'bg-primary/10 text-primary',
            initials: 'AS'
        },
        {
            id: '2',
            sender: 'Bob Johnson',
            email: 'bob@example.com',
            subject: 'Meeting Notes',
            preview: "Attached are the notes from yesterday's meeting...",
            content: `
                <p>Hi everyone,</p>
                <p>Please find attached the notes from our weekly sync.</p>
                <p>Action items:</p>
                <ul class="list-disc pl-5 my-2">
                    <li>Review Q3 reports</li>
                    <li>Update documentation</li>
                </ul>
                <p class="mt-4">Thanks,<br>Bob</p>
            `,
            date: 'Yesterday',
            read: false,
            labels: ['Work'],
            avatarColor: 'bg-secondary/10 text-secondary',
            initials: 'BJ'
        },
        {
            id: '3',
            sender: 'Support Team',
            email: 'support@example.com',
            subject: 'Ticket #1234 Resolved',
            preview: 'Your support ticket has been marked as resolved...',
            content: `
                <p>Hello,</p>
                <p>We are writing to inform you that your support ticket #1234 has been resolved.</p>
                <p>If you have any further questions, please don't hesitate to contact us.</p>
                <p class="mt-4">Best,<br>Support Team</p>
            `,
            date: '2 days ago',
            read: true,
            labels: ['Support', 'Urgent'],
            avatarColor: 'bg-accent/10 text-accent',
            initials: 'ST'
        },
        {
            id: '4',
            sender: 'Marketing Weekly',
            email: 'newsletter@marketing.com',
            subject: 'Top Trends for 2024',
            preview: 'Discover the latest marketing trends that will shape...',
            content: `
                <p>Hi there,</p>
                <p>Get ahead of the curve with our analysis of the top marketing trends for 2024.</p>
                <p><a href="#" class="text-primary underline">Read the full report</a></p>
                <p class="mt-4">Cheers,<br>The Marketing Team</p>
            `,
            date: '3 days ago',
            read: false,
            labels: ['Newsletter'],
            avatarColor: 'bg-muted text-muted-foreground',
            initials: 'MW'
        }
    ];

    get selectedMail(): Mail | undefined {
        return this.mails.find(m => m.id === this.selectedMailId);
    }

    selectMail(id: string) {
        this.selectedMailId = id;
        const mail = this.mails.find(m => m.id === id);
        if (mail) {
            mail.read = true;
        }
    }

    toggleCompose() {
        this.isComposing = !this.isComposing;
    }
}
