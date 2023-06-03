
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import * as Aos from 'aos';
import { AppService } from 'src/services/app.service';
import { WindowRefService } from 'src/services/window-ref.service';
import { menuSelections } from './menu-selections';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isSpacialsOpen: boolean = false;
  isMenuUp: boolean;
  isMenuOpen = false;
  menuSelection: menuSelections = 'byEvent';

  @ViewChild('menuRef') menuRef!:
    ElementRef<HTMLInputElement>;
  @ViewChild('specialsCaret') specialsCaret!:
    ElementRef<HTMLInputElement>;
  @ViewChild('eventsCaret') eventsCaret!:
    ElementRef<HTMLInputElement>;
  @ViewChild('styleCaret') styleCaret!:
    ElementRef<HTMLInputElement>;
  @ViewChild('themeCaret') themeCaret!:
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

  onMenuItemSelect(selection: menuSelections) {
    this.isMenuOpen = true;
    if (this.isMenuOpen) {
      this.menuSelection = selection;
    }
    this.menuRef.nativeElement.classList.add('menu-open');
    switch (selection) {
      case 'specials':
        this.specialsCaret.nativeElement.classList.add('material-symbols-outlined-hovered');
        break;
      case 'byEvent':
        this.eventsCaret.nativeElement.classList.add('material-symbols-outlined-hovered');
        break;
      case 'byStyle':
        this.styleCaret.nativeElement.classList.add('material-symbols-outlined-hovered');
        break;
      case 'byTheme':
        this.themeCaret.nativeElement.classList.add('material-symbols-outlined-hovered');
        break;

    }
  }

  onMenuItemLeave(selection: menuSelections) {
    switch (selection) {
      case 'specials':
        this.specialsCaret.nativeElement.classList.remove('material-symbols-outlined-hovered');
        break;
      case 'byEvent':
        this.eventsCaret.nativeElement.classList.remove('material-symbols-outlined-hovered');
        break;
      case 'byStyle':
        this.styleCaret.nativeElement.classList.remove('material-symbols-outlined-hovered');
        break;
      case 'byTheme':
        this.themeCaret.nativeElement.classList.remove('material-symbols-outlined-hovered');
        break;
    }
  }

  onMenuLeave() {
    this.isMenuOpen = false;
    this.menuRef.nativeElement.classList.remove('menu-open');
  }

  onMenuHover() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
