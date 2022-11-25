import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

 data: any = [
  {
    "name" :"shajan",
    "designation":"engineer",
    "Salary":25000,
    "companyname":"nest"
   },
   {
    "name" :"anu",
    "designation":"Trainee",
    "Salary":12000,
    "companyname":"nest"
   },
   {
    "name" :"renjith",
    "designation":"Trainee",
    "Salary":15000,
    "companyname":"nest"
   },
   {
    "name" :"renjith",
    "designation":"junior engineer",
    "Salary":24000,
    "companyname":"nest"
   },
   {
    "name" :"Abhi",
    "designation":"Senior engineer",
    "Salary":35000,
    "companyname":"nest"
   },
   {
    "name" :"jinu",
    "designation":"Senior engineer Trainee",
    "Salary":35000,
    "companyname":"infosys"
   },
   {
    "name" :"karunu",
    "designation":"Senior engineer",
    "Salary":15000,
    "companyname":"increso"
   }
 ]

}
