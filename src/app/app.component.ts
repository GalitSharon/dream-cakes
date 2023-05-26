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
      // this.renderer.setStyle(this.menuRef.nativeElement, 'background-image', 'linear-gradient(to right, white 0%, white 5%, rgb(56, 55, 55) 5%, rgb(56, 55, 55) 45%, white 45%, white 55%, rgb(56, 55, 55) 55%, rgb(56, 55, 55) 95%, white 95%, white 100%)');

    } else {
      this.isMenuUp = false;
      this.renderer.addClass(this.menuRef.nativeElement, 'menu-down');
      // this.renderer.setStyle(this.menuRef.nativeElement, 'trasition', 'background-image 20s');
      // this.renderer.setStyle(this.menuRef.nativeElement, 'background-image', 'linear-gradient(to right, rgb(241, 240, 240) 0%, rgb(241, 240, 240) 100%)');
      // this.renderer.setStyle(this.menuRef.nativeElement, 'trasition', 'background-image 20s');
    }
    
  }

  isLoadingPage: boolean = true;
  isAboutPage: boolean = false;
  isMenuUp: boolean = true;

  constructor(public winRef: WindowRefService, private renderer: Renderer2) {

  }

  ngOnInit() {
   
    setTimeout(
      () => { this.isLoadingPage = false; this.isAboutPage = true }, 1);
      
  }

  ngAfterViewInit() {
    // ElementRef: { nativeElement: <input> }
    // console.log(this.menuRef);

    // Access the input object or DOM node
    // console.dir(this.menuRef.nativeElement);

    // Manipulate via Renderer2
    
  }



}
