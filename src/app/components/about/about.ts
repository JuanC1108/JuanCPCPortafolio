import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RevealDirective } from '../../directives/reveal.directive';
import { SITE_CONTENT } from '../../data/site-content';

@Component({
  selector: 'app-about',
  imports: [MatIconModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly content = SITE_CONTENT.about;
}
