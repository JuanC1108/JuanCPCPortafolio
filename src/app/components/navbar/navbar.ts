import { Component, inject, signal, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';
import { SITE_CONTENT } from '../../data/site-content';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly themeService = inject(ThemeService);
  private readonly scrollService = inject(ScrollService);
  protected readonly content = SITE_CONTENT.nav;
  protected readonly scrolled = signal(false);
  protected readonly mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  navigateTo(fragment: string): void {
    this.mobileMenuOpen.set(false);
    this.scrollService.scrollTo(fragment);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }
}
