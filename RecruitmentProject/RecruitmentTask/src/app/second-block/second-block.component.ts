import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FirstBlockComponent } from '../first-block/first-block.component';

@Component({
  selector: 'app-second-block',
  standalone: true,
  imports: [FirstBlockComponent],
  template: `
    <h3>
      Blok Drugi
    </h3>
    <button type="button" (click)="change()">
      Zastąp
    </button>
    <button type="button" (click)="add()">
      Doklej
    </button>
  `,
  styles: ``
})
export class SecondBlockComponent {
    @Output() addEvent = new EventEmitter<number>();
    @Output() changeEvent = new EventEmitter<number>();
    change()
    {
      this.changeEvent.emit();
    }
    add()
    {
      this.addEvent.emit();
    }

}
