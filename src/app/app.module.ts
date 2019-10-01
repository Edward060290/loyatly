import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanComponent } from './plan/plan.component';
import { ProgrammeComponent } from './programme/programme.component';
import { MediaComponent } from './media/media.component';
import { LogInComponent } from './log-in/log-in.component';
import { CardBoardComponent } from './home/card-board/card-board.component';
import { SlideCardComponent } from './home/slide-card/slide-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PlanComponent,
    ProgrammeComponent,
    MediaComponent,
    LogInComponent,
    CardBoardComponent,
    SlideCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
