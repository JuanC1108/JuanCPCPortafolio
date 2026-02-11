import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../data/site-content';

@Component({
  selector: 'app-project-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="project-dialog">
      <div class="project-dialog__header">
        <h2 mat-dialog-title>{{ data.title }}</h2>
        <button mat-icon-button mat-dialog-close aria-label="Close">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <mat-dialog-content>
        <p class="project-dialog__problem">{{ data.problem }}</p>
        <p class="project-dialog__details">{{ data.details }}</p>
        <div class="project-dialog__tech">
          @for (tech of data.tech; track tech) {
            <span class="project-dialog__chip">{{ tech }}</span>
          }
        </div>
        <p class="project-dialog__outcome">{{ data.outcome }}</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        @if (data.githubUrl) {
          <a mat-button [href]="data.githubUrl" target="_blank" rel="noopener">
            <mat-icon>code</mat-icon> GitHub
          </a>
        }
        @if (data.caseStudyUrl) {
          <a mat-button [href]="data.caseStudyUrl" target="_blank" rel="noopener">
            <mat-icon>article</mat-icon> Case Study
          </a>
        }
        <button mat-button mat-dialog-close>Close</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: `
    .project-dialog {
      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 0;
      }

      &__problem {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      &__details {
        color: var(--text-primary);
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }

      &__tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-bottom: 1.25rem;
      }

      &__chip {
        font-size: 0.75rem;
        font-weight: 500;
        padding: 0.25rem 0.65rem;
        border-radius: 4px;
        background: var(--chip-bg);
        color: var(--text-muted);
        border: 1px solid var(--border-color);
        font-family: monospace;
      }

      &__outcome {
        color: var(--accent);
        font-weight: 500;
        font-size: 0.9rem;
      }
    }
  `,
})
export class ProjectDialog {
  protected readonly data = inject<Project>(MAT_DIALOG_DATA);
}
