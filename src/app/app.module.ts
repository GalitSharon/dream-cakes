import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WindowRefService } from 'src/services/window-ref.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfettiComponent } from './confetti/confetti.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuComponent } from './menu/menu.component';
import { AppService } from 'src/services/app.service';
import { SubMenuComponent } from './menu/sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfettiComponent,
    AboutComponent,
    ProductsComponent,
    MenuComponent,
    SubMenuComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [
    WindowRefService,
    AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
