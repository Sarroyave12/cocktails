import { Component } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coctail-info',
  standalone: true,
  imports: [MenuComponent, RouterModule],
  templateUrl: './coctails.component.html',
  styles: ``,
})
export class CoctailComponent {}
