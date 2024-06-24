import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  constructor(private userService:UserService,private router:Router){

  }
  ngOnInit() {
  }

  userName:string;
  password:string;


  async login(){
    debugger;
   const result = await this.userService.login(this.userName,this.password);
   if (result) {
    localStorage.setItem("token","A654e6rwqfhsdBfkhjk/*");
    this.router.navigate(["admin"]);
    alert("Giriş başarılı");
   }
   else{
    alert("Kullanıcı adı veya şifre yanlış");
   }
   
  }

  

}
