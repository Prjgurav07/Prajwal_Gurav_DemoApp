import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'clients',component:ClientsComponent},
    {path:'contact',component:ContactComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'jobs',component:JobsComponent},
    {path:'register',component:RegisterComponent},
    {path:'user',component:UserComponent},
    {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
