import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { ProgrammeComponent } from './programme/programme.component';
import { LogInComponent } from './log-in/log-in.component';
import { CardBoardComponent } from './home/card-board/card-board.component';
import { SlideCardComponent } from './home/slide-card/slide-card.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpModule } from '../../node_modules/@angular/http';
import { AuthenticationService } from './services/authentication.service';
import { StorageService } from './services/storage.service';


describe('AppComponent', () => {
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
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        HttpModule,
        RouterModule.forRoot(routes)
      ],
      providers: [
        AuthenticationService,
        StorageService,
        {provide: APP_BASE_HREF, useValue: '/'},
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'nav'`, async(() => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('nav');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CardBoardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  it('should create the LogInComponent', async(() => {
    const fixture = TestBed.createComponent(LogInComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
