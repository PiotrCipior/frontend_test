import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstBlockComponent } from './first-block/first-block.component';
import { HeaderComponent } from './header/header.component';
import { SecondBlockComponent } from './second-block/second-block.component';
import { ThirdBlockComponent } from './third-block/third-block.component';
import { FooterComponent } from './footer/footer.component';
import { Heading1Component } from "./heading1/heading1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FirstBlockComponent, SecondBlockComponent, ThirdBlockComponent, FooterComponent, Heading1Component],
  template: `
    <header>
      <app-header />
    </header>
    <main>
      <app-heading1 />
      <section> 
        <app-first-block />
      </section>
      <section> 
        <app-second-block />
      </section>
      <section> 
        <app-third-block />
      </section>
    </main>
    <footer>
      <app-footer />
    </footer>
    <router-outlet />
  `,
  styles: [''],
})
export class AppComponent {
  title = 'rekrutacyjne';
}
