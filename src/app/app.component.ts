import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dream-cakes';
  isLoadingPage: boolean = true;
  isAboutPage: boolean = false;

  constructor() {}

  ngOnInit() {
    setTimeout(
      () => { this.isLoadingPage = false; this.isAboutPage = true }, 3000);
  }

}
