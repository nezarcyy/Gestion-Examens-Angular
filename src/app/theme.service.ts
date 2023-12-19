import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  toggleTheme(): void {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Check if elements are not null
    if (themeToggleDarkIcon && themeToggleLightIcon && themeToggleBtn) {
      // Change the icons inside the button based on previous settings
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.renderer.removeClass(themeToggleLightIcon, 'hidden');
      } else {
        this.renderer.removeClass(themeToggleDarkIcon, 'hidden');
      }

      // Add click event listener
      this.renderer.listen(themeToggleBtn, 'click', () => {
        // toggle icons inside button
        if (themeToggleDarkIcon.classList.contains('hidden')) {
          this.renderer.removeClass(themeToggleDarkIcon, 'hidden');
          this.renderer.addClass(themeToggleLightIcon, 'hidden');
        } else {
          this.renderer.addClass(themeToggleDarkIcon, 'hidden');
          this.renderer.removeClass(themeToggleLightIcon, 'hidden');
        }

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
            this.renderer.addClass(document.documentElement, 'dark');
            localStorage.setItem('color-theme', 'dark');
          } else {
            this.renderer.removeClass(document.documentElement, 'dark');
            localStorage.setItem('color-theme', 'light');
          }
        // if NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains('dark')) {
            this.renderer.removeClass(document.documentElement, 'dark');
            localStorage.setItem('color-theme', 'light');
          } else {
            this.renderer.addClass(document.documentElement, 'dark');
            localStorage.setItem('color-theme', 'dark');
          }
        }
      });
    }
  }
}
