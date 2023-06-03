import { Component, Input } from '@angular/core';
import { menuSelections } from '../menu-selections';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent {
  @Input()
  menuSelection: menuSelections = "byEvent";
}
