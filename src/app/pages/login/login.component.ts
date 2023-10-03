import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    "userName": "",
    "password": ""
  }

  constructor(private master: MasterService, private router :Router){}

  onLogin() {
    this.master.login(this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        localStorage.setItem('zomatoUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/foodCategory');
      } else {
        alert(res.message);
      }
    })
  }
}
