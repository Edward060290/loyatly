import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private logInForm: FormGroup;

  constructor(
   /*  private fb: FormBuilder */
  ) { 
  /*   this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.PATTERN_EMAIL)]],
      password: ['', Validators.required, Validators.pattern(this.PATTERN_PASSWORD)[]]
    }) */
  }

  ngOnInit() {
  }

}
