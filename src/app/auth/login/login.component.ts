import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form!: FormGroup;

  constructor(private fb: FormBuilder,private _auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loadLoginForm()
  }

  loadLoginForm(): void {
    this.form = this.fb.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      remember: new FormControl(false,[Validators.required])
    })
  }

  login():void{
    if(this.form.valid){
      this._auth.loginUser(this.form.value)
      .then((res)=>{
        if(res){
          this.router.navigateByUrl('/home')
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }

    this.form.markAsDirty()
  }
}
