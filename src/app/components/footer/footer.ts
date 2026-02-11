import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../data/site-content';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <div class="footer__inner">
        <p class="footer__copy">{{ content.copy }}</p>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: 1px solid var(--border-color);
      padding: 2rem 1.5rem;
      text-align: center;

      &__inner {
        max-width: 1200px;
        margin: 0 auto;
      }

      &__copy {
        font-size: 0.825rem;
        color: var(--text-muted);
        margin: 0;
      }
    }
  `,
})
export class Footer {
  protected readonly content = SITE_CONTENT.footer;
}
