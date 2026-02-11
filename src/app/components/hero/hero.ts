import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RevealDirective } from '../../directives/reveal.directive';
import { SITE_CONTENT } from '../../data/site-content';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, MatIconModule, MatChipsModule, RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly content = SITE_CONTENT.hero;
}
