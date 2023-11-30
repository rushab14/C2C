import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent {
  constructor(private fb:FormBuilder){}
  rForm: FormGroup = this.fb.group({
    'name' : [null, Validators.required],
    'description' : [null, [Validators.required, 
    Validators.minLength(30), 
    Validators.maxLength(500)]],
    'validate' : ''
    });
    post:any; // A property for our submitted form
    description:string = '';
    name:string = '';
    titleAlert:string = 'This field is required';
    addPost(post:any) {
    this.description = post.description;
    this.name = post.name;
    
    }

}
