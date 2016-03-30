import {Component} from 'angular2/core';


@Component({
  selector: 'contact-form',
  templateUrl: 'app///contact-form/contact-form.html',
  styleUrls: ['app///contact-form/contact-form.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class ContactForm {
    onSubmit(form){
        console.log(form)
    }

  constructor() {}

}
