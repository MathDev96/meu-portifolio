import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private menuService: MenuService) { }

  menuStatus = 'closed';

  menuItems?: Array<Menu>;

  menuClick() {

    this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open')
  }



  ngOnInit() {
    const menu = this.menuService.getItems();

    this.menuItems = menu;

  }
}
