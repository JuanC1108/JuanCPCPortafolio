import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RevealDirective } from '../../directives/reveal.directive';
import { SITE_CONTENT } from '../../data/site-content';

@Component({
  selector: 'app-hobbies',
  imports: [MatIconModule, RevealDirective],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.scss',
})
export class Hobbies {
  protected readonly content = SITE_CONTENT.hobbies;
}
