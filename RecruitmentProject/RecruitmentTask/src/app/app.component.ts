import { Component, Output, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstBlockComponent } from './first-block/first-block.component';
import { HeaderComponent } from './header/header.component';
import { SecondBlockComponent } from './second-block/second-block.component';
import { ThirdBlockComponent } from './third-block/third-block.component';
import { FooterComponent } from './footer/footer.component';
import { Heading1Component } from "./heading1/heading1.component";
import { GettingDataService } from './getting-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FirstBlockComponent, SecondBlockComponent, ThirdBlockComponent, FooterComponent, Heading1Component],
  template: `
  <app-header></app-header>
  <app-heading1></app-heading1>
  <section> 
      <app-first-block (changeOptionEvent)="changeOption($event)"/>
      <app-second-block (changeEvent)="showOption()" (addEvent)="addOption()" />
      <app-third-block text = {{option}}  />
  </section>
  <app-footer />`,
  styles: [''],
  
})
export class AppComponent {
  title = 'rekrutacyjne';
  radioOption: string = "first";
  option: string = "";
  content = inject(GettingDataService);
  changeOption(item: string)
  {
    this.radioOption = item;
  }
  showOption()
  {
    this.option = this.content.GetText(this.radioOption);
  }
  addOption()
  {
    const newText = this.content.GetText(this.radioOption);
    if (!this.option.includes(newText)) {
      this.option += newText;
    } else {
      alert('Content already exists');
    }
  }
}
