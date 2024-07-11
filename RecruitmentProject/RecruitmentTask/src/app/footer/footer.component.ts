import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <a class="css_logo">
      <em class="icons">Css is Awesome</em>
    </a>
    <a  class="nabthat_logo">
      <em class="icons">nabthat</em>
    </a>
    <button type="button" (click)="Show()">
      Pokaż
    </button>
  `,
  styles: ``
})
export class FooterComponent {
  Show()
  {

  }
}
