import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GettingDataService } from '../getting-data.service';

@Component({
  selector: 'app-third-block',
  standalone: true,
  imports: [NgIf],
  template: `
    <h3>
      Blok Z długą nazwą która sama się przytnie tego już nie widać
    </h3>
    <div >{{ content.getText(1) }}</div>
  `,
  styles: ``
})
export class ThirdBlockComponent {
  content = inject(GettingDataService);
  dataBaseOption: number = 0;

}
