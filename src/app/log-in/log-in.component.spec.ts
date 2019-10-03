import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { LogInComponent } from './log-in.component';

import { BrowserModule, By } from '../../../node_modules/@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { DebugElement } from '../../../node_modules/@angular/core';
import { AuthenticationService } from '../services/authentication.service';

fdescribe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LogInComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect , useValue: true },
        { provide: AuthenticationService , useValue: true }
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LogInComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

 beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(LogInComponent);
  });
  
  it(`should have as text 'login page' `, () => {
    expect(component.text).toEqual('login page');
  });

 

});
