import { Component } from '@angular/core';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})

export class IndexPageComponent {
  login:boolean = false;

  constructor() { }
  handleConnected() {
    this.login = true;
  }
}
