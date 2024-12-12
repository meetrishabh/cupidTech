import { Component, OnInit } from '@angular/core';
// Import Modal
declare const bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employeeStats = {
    totalEmployees: 120,
    activeEmployees: 110,
    newHires: 5,
    avgPerformanceRating: 4.2,
  };

  departmentStats = [
    { name: 'HR', count: 15 },
    { name: 'IT', count: 40 },
    { name: 'Sales', count: 30 },
    { name: 'Marketing', count: 25 },
    { name: 'Finance', count: 10 },
  ];

  kpiStats = [
    { title: 'Total Employees', value: this.employeeStats.totalEmployees },
    { title: 'Active Employees', value: this.employeeStats.activeEmployees },
    { title: 'New Hires (This Month)', value: this.employeeStats.newHires },
    { title: 'Avg. Performance Rating', value: this.employeeStats.avgPerformanceRating },
  ];

  constructor() {}

  ngOnInit(): void {}

  openAddEmployeeModal(): void {
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }
  closeModal(): void {
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      bootstrapModal?.hide();
    }
  }
  
}
