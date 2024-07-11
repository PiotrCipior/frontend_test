import { Component } from '@angular/core';

@Component({
  selector: 'app-second-block',
  standalone: true,
  imports: [],
  template: `
    <h3>
      Blok Drugi
    </h3>
    <button type="button" (click)="Change()">
      Zastąp
    </button>
    <button type="button" (click)="Add()">
      Doklej
    </button>
  `,
  styles: ``
})
export class SecondBlockComponent {
    Change()
    {

    }
    Add()
    {
      
    }
}
