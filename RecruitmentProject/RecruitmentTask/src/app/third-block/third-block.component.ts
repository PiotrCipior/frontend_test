import { Component, inject, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { GettingDataService } from '../getting-data.service';
import { SecondBlockComponent } from '../second-block/second-block.component';

@Component({
  selector: 'app-third-block',
  standalone: true,
  imports: [NgIf,SecondBlockComponent],
  template: `
    <h3>
      Blok Z długą nazwą która sama się przytnie tego już nie widać
    </h3>
    <div >{{ text }}</div>
  `,
  styles: ``
})
export class ThirdBlockComponent {
  content = inject(GettingDataService);
  @Input() text: string = "";

}
