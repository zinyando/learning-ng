import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common'


@Component({
  selector: 'login-form',
  templateUrl: 'app///login-form/login-form.html',
  styleUrls: ['app///login-form/login-form.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class LoginForm {
    
    form: ControlGroup;
    
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });
    
    signup(form){
        console.log(this.form.value)
    }

  constructor(fb: FormBuilder) {
      this.form = fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      })
  }

}
