import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { LogInComponent } from './log-in.component';

import { BrowserModule, By } from '../../../node_modules/@angular/platform-browser';

import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '../../../node_modules/@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { HttpModule } from '../../../node_modules/@angular/http';
import { StorageService } from '../services/storage.service';



fdescribe('LogInComponent', () => {
  let fixture: ComponentFixture<LogInComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LogInComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule
      ],
      providers: [
        AuthenticationService,
        StorageService,
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(LogInComponent);


      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));
  it('should have as page LogInComponent', async(() => {
    fixture = TestBed.createComponent(LogInComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as page 'Email address' `, async(() => {
    fixture = TestBed.createComponent(LogInComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.email).toEqual('Email address');
  }));
  it('should set submited to true', async(() => {
    fixture = TestBed.createComponent(LogInComponent);
    const app = fixture.debugElement.componentInstance;
    app.logInClientUser();
    expect(app.submitted).toBeTruthy();
  }));
  it('should call the logInClientUser method', async(() => {
    fixture = TestBed.createComponent(LogInComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    spyOn(app, 'logInClientUser');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(app.logInClientUser).toHaveBeenCalledTimes(0);
  }));
});
