import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const myRoutes : Routes= [
  {path:"",component:AdminLoginComponent},
  {path:"add",component:AddEmployeeComponent},
  {path:"edit",component:EditEmployeeComponent},
  {path:"search",component:SearchEmployeeComponent},
  {path:"delete",component:DeleteEmployeeComponent},
  {path:"viewall",component:ViewEmployeeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
