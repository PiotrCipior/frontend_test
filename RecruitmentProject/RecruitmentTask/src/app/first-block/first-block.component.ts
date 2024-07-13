import { Component, inject, Output, EventEmitter } from '@angular/core';
import { GettingDataService } from '../getting-data.service';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [],
  //templateUrl:"./first-block.component.html",
  template:`
  <h3>
    Blok Pierwszy
</h3>
<form action="">
  <label class="container">
    <input type="radio" name="option" value="First" (change)='changeOption("first")' checked>Opcja pierwsza
    <span class="checkmark"></span>
  </label><br>
  <label class="container">
    <input type="radio" name="option" value="Second" (change)='changeOption("second")'>Opcja druga
    <span class="checkmark"></span>
  </label><br>
  <label class="container">
    <input type="radio" name="option" value="Third" (change)='changeOption("random")'>Opcja trzecia
    <span class="checkmark"></span>
  </label><br>
  </form>
  `,
  styleUrl: `./first-block.component.scss`
})
export class FirstBlockComponent {
  @Output() changeOptionEvent = new EventEmitter<string>();

  changeOption(option: string)
  {
    this.changeOptionEvent.emit(option);
  }

}
