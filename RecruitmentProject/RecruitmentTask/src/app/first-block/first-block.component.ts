import { Component } from '@angular/core';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [],
  template: `
    <h3>
      Blok Pierwszy
    </h3>
    <form action="/action_page.php">
      <input type="radio" id="optionOne" name="option" value="First">
      <label for="optionOne">Opcja pierwsza</label><br>
      <input type="radio" id="optionTwo" name="option" value="Second">
      <label for="optionTwo">Opcja druga</label><br>  
      <input type="radio" id="optionThree" name="option" value="Third">
      <label for="optionThree">Opcja trzecia</label><br>
    </form>
  `,
  styles: ``
})
export class FirstBlockComponent {

}
