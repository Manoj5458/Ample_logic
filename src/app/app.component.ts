import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
// import { EmpTableComponent } from './emp-table/emp-table.component';
import { Table, TableModule } from 'primeng/table';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpTestimonialComponent } from './emp-testimonial/emp-testimonial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule,
    MessageModule, FormsModule, SideDrawerComponent, TableModule, NavbarComponent,
    EmpTestimonialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = '';

  msg = '';

  drawerVisible = false;

  onDrawerVisibleChange(val: boolean) {
    this.drawerVisible = val;
    // Now you can use drawerVisible as needed
  }

  onClick() {
    this.msg = 'Welcome ' + this.text;
  }
}
