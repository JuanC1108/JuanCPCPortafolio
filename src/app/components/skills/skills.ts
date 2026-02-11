import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RevealDirective } from '../../directives/reveal.directive';
import { SITE_CONTENT } from '../../data/site-content';

@Component({
  selector: 'app-skills',
  imports: [MatIconModule, RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly categories = SITE_CONTENT.skills;
}
