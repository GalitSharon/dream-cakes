import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WindowRefService } from 'src/services/window-ref.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfettiComponent } from './confetti/confetti.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent, 
    ConfettiComponent, 
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule, 
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
