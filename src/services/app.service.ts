import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isMenuUp = true;
  
  constructor(public winRef: WindowRefService) { }

  updateMenuLocation(isUp: boolean) {
    this.isMenuUp = isUp;
  }

  onWindowScroll() {
    this.isMenuUp = this.winRef.nativeWindow.pageYOffset === 0;
  }

}
