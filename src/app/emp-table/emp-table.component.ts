import { Component, OnInit } from '@angular/core';
import { emp_table } from '../../models/table';
import { PrimeModule } from '../prime/prime.module';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrl: './emp-table.component.scss',
  imports: [PrimeModule],
  standalone: true
})
export class EmpTableComponent implements OnInit {
  employees: any[] = [];
  loading = true;

  ngOnInit() {
    this.employees = emp_table.flat();
    this.loading = false;
  }

  getStatusSeverity(status: string): string {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'danger';
      case 'On Leave':
        return 'warning';
      default:
        return 'info';
    }
  }
}
