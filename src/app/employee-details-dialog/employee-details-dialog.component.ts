import { Component,Inject, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-details-dialog',
  standalone: false,
  
  templateUrl: './employee-details-dialog.component.html',
  styleUrl: './employee-details-dialog.component.css'
})

export class EmployeeDetailsDialogComponent implements OnInit{

  
  employee: Employee;

  constructor(@Inject(MAT_DIALOG_DATA)public data:Employee){}

  ngOnInit(): void {
    this.employee = this.data;
   console.log('Employee Data:', this.employee); // Debug log
  }

}
