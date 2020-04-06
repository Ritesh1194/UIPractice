import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
employees:Employee[]=[
  {
    employee_id:1,
    employee_name:'Ritesh',
    employee_gender:'male',
    employee_email:'yadavritesh1194@gmail.com',
    employee_phone:7829328684,
    employee_dateOfBirth:new Date('01/01/1994'),
    employee_department:'IT',
    isActive:true,
    photoPath:'assets\images\Ritesh.jpg'
  },
 
    {
      employee_id:2,
      employee_name:'Ravi',
      employee_gender:'male',
      employee_email:'yadavritesh1194@gmail.com',
      employee_phone:8109520212,
      employee_dateOfBirth:new Date('04/11/1990'),
      employee_department:'IT',
      isActive:true,
      photoPath:'assets\images\Ravi.jpg'
    },
    {
      employee_id:3,
      employee_name:'Raj',
      employee_gender:'male',
      employee_email:'yadavritesh1194@gmail.com',
      employee_phone:8109520212,
      employee_dateOfBirth:new Date('01/09/1994'),
      employee_department:'IT',
      isActive:true,
      photoPath:'assets\images\Raj.png'
    }
]
}