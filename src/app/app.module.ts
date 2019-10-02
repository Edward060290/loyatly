import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanComponent } from './plan/plan.component';
import { ProgrammeComponent } from './programme/programme.component';
import { LogInComponent } from './log-in/log-in.component';
import { CardBoardComponent } from './home/card-board/card-board.component';
import { SlideCardComponent } from './home/slide-card/slide-card.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PlanComponent,
    ProgrammeComponent,
    LogInComponent,
    CardBoardComponent,
    SlideCardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
