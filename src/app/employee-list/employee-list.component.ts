import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailsDialogComponent } from '../employee-details-dialog/employee-details-dialog.component';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog-component/delete-confirmation-dialog-component.component';
@Component({
  selector: 'app-employee-list',
  standalone: false, // Retained as per your requirement
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  successMessage: string = '';
  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'actions'];


  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Load the employee list initially
    this.getEmployees();

  }

  private getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      panelClass: 'centered-dialog'
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // If confirmed, proceed with deletion
        this.employeeService.deleteEmployee(id).subscribe(() => {
          this.successMessage = 'Employee was successfully deleted';
          this.getEmployees(); // Refresh the list
  
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        });
      } else {
        console.log('Delete action canceled');
      }
    });
  }


  openDialog(id:number): void{
    const selectedEmployee = this.employees.find(emp => emp.id === id);
  if (selectedEmployee) {
    this.dialog.open(EmployeeDetailsDialogComponent, {
      data: selectedEmployee, // Pass the selected employee as data
      width :'400px',
      panelClass:'centered-dialog'
    });
  } else {
    console.error('Employee not found for ID:', id);
  }

    }
  

  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]);
  }

}
