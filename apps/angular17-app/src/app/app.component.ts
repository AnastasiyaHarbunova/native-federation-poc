import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrr',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular17-app';

  ngOnInit() {
    console.log('INIT')
  }
}
