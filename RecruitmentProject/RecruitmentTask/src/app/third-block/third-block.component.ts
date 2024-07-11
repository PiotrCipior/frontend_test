import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-third-block',
  standalone: true,
  imports: [NgIf],
  template: `
    <h3>
      Blok Z długą nazwą która sama się przytnie tego już nie widać
    </h3>
    <div *ngIf="dataBaseOption">{{ content }}</div>
  `,
  styles: ``
})
export class ThirdBlockComponent {
  content = "";
  dataBaseOption = "";

}
