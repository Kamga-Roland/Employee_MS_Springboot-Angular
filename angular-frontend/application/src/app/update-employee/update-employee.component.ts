import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;

  employee: Employee = new Employee;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,) {
      this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];

    this.currentEmployeeData();

    // this.employeeService.getEmployeeById(this.id).subscribe({
    //   next: (data) => {
    //     this.employee = data; // Populate the employee object with the data received
    //     console.log(this.employee)
    //   },
    //   error: (error) => {
    //     console.error('Error fetching employee data:', error);
    //   }
    // });
  }

  currentEmployeeData(){
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data; // Populate the employee object with the data received
        console.log(this.employee)
      },
      error: (error) => {
        console.error('Error fetching employee data:', error);
      }
    });
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: () => {
        console.log('Update successful:');
        // Assuming goToEmployeeList is a method to navigate to the employee list
        this.goToEmployeeList();
      },
      error: (error: any) => {
        console.error('There was an error updating the employee:', error);
      }
    });
  }
  
  goToEmployeeList() {
    return this.router.navigate(['/employees']);
  }
}
