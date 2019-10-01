import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MediaComponent } from './media/media.component';
import { ProgrammeComponent } from './programme/programme.component';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'programme', component: ProgrammeComponent},
  {path: 'media', component: MediaComponent},
  {path: 'login', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
