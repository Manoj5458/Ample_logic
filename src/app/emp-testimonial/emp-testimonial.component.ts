import { Component } from '@angular/core';
import { dashboard_summary } from '../../models/dashboad';
import { CommonModule } from '@angular/common';
import { recentActivity } from '../../models/recent_activity';
import { EmpTableComponent } from '../emp-table/emp-table.component';
import { ChartModule } from 'primeng/chart';


@Component({
  selector: 'app-emp-testimonial',
  standalone: true,
  imports: [CommonModule, EmpTableComponent, ChartModule],
  templateUrl: './emp-testimonial.component.html',
  styleUrl: './emp-testimonial.component.scss'
})
export class EmpTestimonialComponent {
  stats = dashboard_summary;
  recentActivities = recentActivity

  constructor() {
    // You can initialize or manipulate the dashboard summary here if needed
  }



  // pie chart data
  pieChartData: any;
  pieChartOptions: any;
  chartData: any;
  chartOptions: any;

  ngOnInit() {
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Performance Score',
          data: [78, 80, 76, 82, 85, 88],
          fill: false,
          borderColor: '#4f46e5',
          tension: 0.3
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Monthly Performance Scores'
        }
      }
    };
    this.pieChartData = {
      labels: ['Active', 'Inactive', 'New Hires'],
      datasets: [
        {
          data: [100, 10, 10], // example values
          backgroundColor: [
            '#2563eb', // blue-600 for Active
            '#9ca3af', // gray-400 for Inactive
            '#16a34a'  // green-600 for New Hires
          ],
          hoverBackgroundColor: [
            '#1d4ed8', // darker blue
            '#6b7280', // darker gray
            '#15803d'  // darker green
          ]
        }
      ]
    };

    this.pieChartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#4b5563', // gray-600
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem: any) => {
              return `${tooltipItem.label}: ${tooltipItem.raw}`;
            }
          }
        }
      }
    };
  }

}
