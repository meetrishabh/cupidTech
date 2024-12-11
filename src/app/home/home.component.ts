import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  // Hardcoded analytics data for KPIs and tables
  employeeStats = {
    totalEmployees: 120,
    departments: {
      HR: 15,
      IT: 40,
      Sales: 30,
      Marketing: 25,
      Finance: 10
    },
    activeEmployees: 110,
    newHires: 5,
    avgPerformanceRating: 4.2
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
}
