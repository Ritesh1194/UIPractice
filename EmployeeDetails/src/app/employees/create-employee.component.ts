import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
// gender='male';
// isActive=true;
employee_department='3';
  constructor() { }

  ngOnInit() {
  }
  saveEmployee(empForm:NgForm):void{
console.log(empForm.value);
  }

}
