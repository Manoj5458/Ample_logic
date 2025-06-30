import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { PrimeModule } from '../prime/prime.module';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-side-drawer',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './side-drawer.component.html',
  styleUrl: './side-drawer.component.scss'
})
export class SideDrawerComponent {
  visible: boolean = false;
  @ViewChild('drawerRef') drawerRef!: Drawer;
  @Output() visibleChange = new EventEmitter<boolean>();

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

  onMenuClick(): void {
    this.visible = !this.visible;
    this.visibleChange.emit(this.visible);
  }

  logout(): void {
    // Implement logout logic here
    console.log('User logged out');
  }
}
