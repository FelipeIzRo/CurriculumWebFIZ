import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  onMouseEnter(event:Event){
    const nav = event.target as HTMLElement;
    nav.classList.remove('gray');
    nav.classList.add('blue')
  }
  onMouseLeave(event:Event){
    const nav = event.target as HTMLElement;
    nav.classList.add('gray')
  }
}
