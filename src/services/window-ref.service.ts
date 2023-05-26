import { Injectable } from '@angular/core';

// Referencing global browser objects like document or window directly from 
// within your code is possible, but not encouraged and considered bad practice

function _window() : any {
   return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  get nativeWindow() : any {
    return _window();
 }
}
