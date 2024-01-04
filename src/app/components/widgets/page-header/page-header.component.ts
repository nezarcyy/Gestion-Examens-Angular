import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent implements OnInit {

  name!: string;
  @Input() link!: string;
  @Input() prev!: string;
  @Input() current!: string;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.name = this.cookieService.get('username');
   // Use the stored values as needed
 }

}
