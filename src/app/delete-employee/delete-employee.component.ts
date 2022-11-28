import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  empcode=""

  delete = ()=>
  {
    let data:any = {"empcode":this.empcode}
  
    console.log(data)
  }



}
