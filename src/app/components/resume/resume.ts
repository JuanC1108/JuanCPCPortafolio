import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RevealDirective } from '../../directives/reveal.directive';
import { SITE_CONTENT } from '../../data/site-content';

@Component({
  selector: 'app-resume',
  imports: [MatIconModule, MatButtonModule, RevealDirective],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  protected readonly content = SITE_CONTENT.experience;
  protected readonly resumeUrl = SITE_CONTENT.hero.resumeUrl;
}
