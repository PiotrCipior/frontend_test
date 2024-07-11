import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <a routerLink="/" class="html_logo">
      <em class="icons">html5</em>
    </a>

    <a routerLink="/">
      <h1>Zadanie <b>rekrutacyjne</b></h1>
    </a>
  `,
  styles: ``
})
export class HeaderComponent {

}
