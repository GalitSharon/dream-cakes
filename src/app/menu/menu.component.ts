
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import * as Aos from 'aos';
import { AppService } from 'src/services/app.service';
import { WindowRefService } from 'src/services/window-ref.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  isSpacialsOpen: boolean = false;
  isMenuUp: boolean;
  @ViewChild('menuRef') menuRef!:
    ElementRef<HTMLInputElement>;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.appService.onWindowScroll();
    this.isMenuUp = this.appService.isMenuUp;
    if (this.isMenuUp) {
      this.renderer.removeClass(this.menuRef.nativeElement, 'menu-down');
    } else {
      this.renderer.addClass(this.menuRef.nativeElement, 'menu-down');
    }
    Aos.init();
  }
  
  constructor(public winRef: WindowRefService,
    private renderer: Renderer2,
    private appService: AppService) {
    this.isMenuUp = appService.isMenuUp;

  }

  onSpacialsSelect() {

  }
}
