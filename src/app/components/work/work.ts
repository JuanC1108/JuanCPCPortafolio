import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RevealDirective } from '../../directives/reveal.directive';
import { SITE_CONTENT, Project } from '../../data/site-content';
import { ProjectDialog } from './project-dialog';

@Component({
  selector: 'app-work',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    RevealDirective,
  ],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  private readonly dialog = inject(MatDialog);
  protected readonly projects = SITE_CONTENT.projects;

  openProject(project: Project): void {
    this.dialog.open(ProjectDialog, {
      data: project,
      maxWidth: '600px',
      width: '90vw',
      panelClass: 'project-dialog-panel',
    });
  }
}
