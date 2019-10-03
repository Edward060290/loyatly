import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProgrammeComponent } from './programme/programme.component';
import { PlanComponent } from './plan/plan.component';
import { RegisterComponent } from './register/register.component';

/**
* el modelo que asigna rutas en los componentes
*/
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'programme', component: ProgrammeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
