
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss']
})
export class ConfettiComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) { }


  ngOnInit(): void {
    this.surprise();
  }

  public surprise(): void {
    const canvas = this.renderer2.createElement('canvas');
    canvas.id = "confetti-canvas";
    let myConfetti = confetti.create(canvas, {
      resize: true // will fit all screen sizes,

    });
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
    var defaults = {
      shapes: ['circle', 'square'],
      colors: ['#C5E3F6', '#FCEFEE', '#FCCDE2']
    };
    myConfetti({
      ...defaults,
      particleCount: 40,
      scalar: 0.7,
      shapes: ['circle', 'square'],
      
    });
  }

}