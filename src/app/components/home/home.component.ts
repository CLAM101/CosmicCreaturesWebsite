import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  avatars = [
    { image: '../assets/images/Frame 4.png' },
    { image: '../assets/images/Frame 5.png' },
    { image: '../assets/images/Frame 6.png' }
  ];

}
