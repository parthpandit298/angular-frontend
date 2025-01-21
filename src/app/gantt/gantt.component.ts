import { Component,OnInit } from '@angular/core';
import { registerLicense } from '@syncfusion/ej2-base';

// 2. Call registerLicense with your license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWX5ccXRURGlcUEN/XUU=');

@Component({
  selector: 'app-gantt',
  standalone: false,
  
  templateUrl: './gantt.component.html',
  styleUrl: './gantt.component.css'
})
export class GanttComponent implements OnInit{
  title = 'my-angular-project';
  
  public data: object[] = [];
  public toolbarOptions: string[] = ['Add'];
  
  public resourceFields: object = {
    id: "resourceId",
    name: "resourceName"
  }

  public timelineSettings: object = {
    topTier: {
      unit: 'Year',      // Show "2020", "2021", etc. in the top tier
      format: 'yyyy'
    },
    bottomTier: {
      unit: 'Month',     // Show months (Jan, Feb, Mar...) in the bottom tier
      format: 'MMM'
    },
    timelineViewMode: 'Month' // Ensures the tasks are displayed by month intervals
  };

  public labelOptions: object = {
    rightLabel: "resources",
    taskLabel: "TaskName"
  }
  public columnSettings: object[] = [
    {field: "EmployeeID", headerText: "EmployeeID"},
    {field: "EmployeeName", headerText: "EmployeeName"},
    {field: "StartDate", headerText: "Start Date"},
    { field: 'EndDate', headerText: "End Date"},
  ]
  public taskSettings: object = {
    id: "EmployeeID",
    name: "EmployeeName",
    startDate: "StartDate", 
    endDate: "EndDate",
   
  }


  ngOnInit(): void {
    // 1) Populate the data with four tasks
    this.data = [
      {
        EmployeeID: 1,
        EmployeeName: 'John Smith',
        StartDate: new Date('2020-03-10'),
        EndDate: new Date('2022-10-01')
      },
      {
        EmployeeID: 2,
        EmployeeName: 'Mary Brown',
        StartDate: new Date('2019-07-15'),
        EndDate: new Date('2023-04-30')
      },
      {
        EmployeeID: 3,
        EmployeeName: 'Bob Johnson',
        StartDate: new Date('2021-02-01'),
        EndDate: new Date('2023-06-01')
      },
      {
        EmployeeID: 4,
        EmployeeName: 'Alice Williams',
        StartDate: new Date('2018-01-05'),
        EndDate: new Date('2020-12-31')
      }
    ];
  
  }

  
};
