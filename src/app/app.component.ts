import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { WindowRefService } from 'src/services/window-ref.service';

import * as Aos from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dream-cakes';
  @ViewChild('menuRef') menuRef!:
    ElementRef<HTMLInputElement>;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    Aos.init();
    console.log('onscroll')
    if (this.winRef.nativeWindow.pageYOffset === 0) {
      this.isMenuUp = true;
      this.renderer.removeClass(this.menuRef.nativeElement, 'menu-down');
    } else {
      this.isMenuUp = false;
      this.renderer.addClass(this.menuRef.nativeElement, 'menu-down');
    }

  }

  isLoadingPage: boolean = true;
  isAboutPage: boolean = false;
  isMenuUp: boolean = true;

  constructor(public winRef: WindowRefService, private renderer: Renderer2) {

  }

  ngOnInit() {

    setTimeout(
      () => { this.isLoadingPage = false; this.isAboutPage = true }, 3000);

  }

}
