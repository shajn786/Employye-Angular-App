import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  name=""
  designation=""
  Salary=""
  companyname=""

  readValues= ()=>
  {
    let data : any = {
      "name" :this.name,
      "designation":this.designation,
      "Salary":this.Salary,
      "companyname":this.companyname

     }

     console.log(data)
  }



}
