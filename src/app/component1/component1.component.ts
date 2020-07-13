import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray } from '@angular/forms'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: this.fb.array([])
    })
    // this.loginForm.valueChanges.subscribe(console.log)
    this.addExperience();
  }
  ///////////////////////getters for experience
  get addressGetter() {
    return this.loginForm.get('address') as FormArray
  }
  addExperience() {
    const obj = this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
    })
    this.addressGetter.push(obj)
  }
  /////////////////////////////removing from experience array 
  deleteExperience(i) {
    this.addressGetter.removeAt(i)
  }


  get name() {
    return this.loginForm.get('name')
  }
  get phone() {
    return this.loginForm.get('phone')
  }

  get email() {
    return this.loginForm.get('email')
  }

  async handleSubmit() {
    console.log(this.loginForm.value);
    // console.log(this.loginForm.value)
    const res:any=await this.user.addData(this.loginForm.value);
    console.log(res)
    if(res.success){
      alert(res.message)
    }
    else{
      
    }
  }

  

}
