import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{
  
  employee: Employee = new Employee;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit(): void {}

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data: any) => {
        console.log(data);
        this.goToEmployeeList();
      },
      error: (error: any) => {
        console.log(error);
      }
    });    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
