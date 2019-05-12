import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/authentication.service';

import {SessionStorage} from 'ngx-webstorage';
import {HttpService} from '../../shared/services/http.service';

/**
 * this component is for handling login related tasks
 */
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * @ignore
   */
    loginform: FormGroup;
  /**
   * @ignore
   */
    username: FormControl;
  /**
   * @ignore
   */
    password: FormControl;

  /**
   * the stored isLoggedIn variable in sessionStorage as an boolean
   */
  @SessionStorage('isLoggedIn') isLoggedIn;
  /**
   * the stored token in sessionStorage
   */
  @SessionStorage('token') token ;
  /**
   * the stored refreshToken in sessionStorage
   */
  @SessionStorage('refreshToken') refreshToken ;
  /**
   *  the stored userPermissions in sessionStorage
   */
  @SessionStorage('userPermissions')
  public userPermissions;
  /**
   * accountData stored in sessionStorage
   */
  @SessionStorage('accountData')
  accountData;
  /**
   * @ignore
   */
    constructor(
        private translate: TranslateService,
        public router: Router,
        private authService: AuthenticationService,
        private httpService:HttpService) {
        this.createFormControls();
        this.createForm();


    }

  /**
   * @ignore
   */
    ngOnInit() {

    }


  /**
   * This Method is for creating the formControls of our Reactive(model driven) form.
   */

    createFormControls()  {
      this.username = new FormControl('', Validators.required);
      this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    }

  /**
   * This Method is for creating our Reactive(model driven) form.
   */

    createForm() {
      this.loginform = new FormGroup({
        username: this.username,
        password: this.password
      });
    }

  /**
   * This Method is for having access to form Validators within the html.
   */

    get f() { return this.loginform.controls; }


  /**
   * This Method is for calling login API and Saving the result (Token and refreshToken) in session storage.
   */


  onLogin() {
    const username = this.loginform.value.username;
    const password = this.loginform.value.password;
    let body ='grant_type=password&username='+username+'&password='+password+ '&scope=ui';
    this.authService.login('/aaa/oauth/token', body).subscribe(
      (res:any)=>{
        this.isLoggedIn=true;
        this.token = res.access_token;
        this.refreshToken = res.refresh_token;
        this.getAccount();
        this.router.navigateByUrl('/layout/dashboard');
      },
      (err)=>{
        // if(err.status==401 || err.status==500 || err.status==400){
        //   if(this.localData.currentLanguage=='fa'){
        //     this.notifySrv.sendError("خطا", "نام کاربری یا رمز عبور اشتباه است ",4000);
        //   }
        //   else{
        //     this.notifySrv.sendError("Error", "Username or Password is wrong",4000);
        //   }
        // }

      }

    )
  }


  /**
   * This Method is for calling account API and Saving the result (account data) in session storage.
   */

  getAccount() {
    this.authService.getAccount('/aaa/account/' ).subscribe(
      (account:any)=>{
          this.accountData= account;
        this.httpService.get('/aaa/security/authz/permission/permissionForRole?roleId=' + this.accountData.roles[0].id).subscribe(
          (permissions: any) => {
            this.userPermissions=permissions[0];
          })
      }
    )
  }

}
