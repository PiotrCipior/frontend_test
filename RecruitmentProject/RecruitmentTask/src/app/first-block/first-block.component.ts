import { Component, inject } from '@angular/core';
import { GettingDataService } from '../getting-data.service';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [],
  templateUrl:"./first-block.component.html",
  styles: ``
})
export class FirstBlockComponent {
  Option: string = "";
}
