import { Component } from '@angular/core';
import { PrimeModule } from '../prime/prime.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: 'About',
        icon: 'pi pi-info',
        routerLink: ['/about'],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: ['/contact'],
      },
      {
        label: 'Help',
        icon: 'pi pi-question',
        routerLink: ['/help'],
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: ['/settings'],
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        routerLink: ['/logout'],
      }
    ];
  }
}
