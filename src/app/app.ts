import { Component,HostListener,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BestDeals } from './best-deals/best-deals';
import { Contact } from './contact/contact';
import { Donate } from './donate/donate';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Testimonial } from './testimonial/testimonial';
import { Wish } from './wish/wish';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BestDeals,Contact,Donate,Home,Navbar,Testimonial,Wish],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chirstmas');

   snowflakes: { x: number; y: number; id: number }[] = [];

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    this.snowflakes.push({
      x: event.clientX,
      y: event.clientY,
      id: Date.now() + Math.random()
    });

    if (this.snowflakes.length > 40) {
      this.snowflakes.shift();
    }

    setTimeout(() => {
      this.snowflakes.shift();
    }, 1500);
}
}
