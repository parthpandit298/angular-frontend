import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee:Employee = new Employee();
  passwordError: string | null = null;
  emailError: string| null = null;


  constructor(private employeeService:EmployeeService,
    private route : ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
  }

  validatePassword(): boolean {
    const password = this.employee.password;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regex.test(password)) {
      this.passwordError = "Password must be at least 8 characters long, contain at least one digit, one uppercase letter, and one lowercase letter.";
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


  onSubmit(){
   if(this.validatePassword() && this.validateEmail()){
      this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
        this.goToEmployeeList();
      }, error => console.log(error));
    }
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
