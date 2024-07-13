import { Component, inject } from '@angular/core';
import { GettingDataService } from '../getting-data.service';

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
