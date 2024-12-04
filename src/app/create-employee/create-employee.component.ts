import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  passwordError: string| null = null;
  emailError: string| null = null;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    if(this.validatePassword() && this.validateEmail()){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error)
    );
  }
}

  validatePassword(): boolean{
    const password = this.employee.password;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!regex.test(password)){
      this.passwordError = "Password must be at least 8 characters long, contain at least one digit, one uppercase letter, and one lowercase letter. "
      return false;
    }

    this.passwordError = null;
    return true;
  }

  validateEmail(): boolean{
    const email = this.employee.emailId;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      this.emailError = "Please enter a valid email address."
      return false;
    }

    this.emailError = null;
    return true;
  }


  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
