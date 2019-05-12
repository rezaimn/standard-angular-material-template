 import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {SessionStorage} from 'ngx-webstorage';

 /**
  * @ignore
  */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @SessionStorage('token') token;
  /**
   * @ignore
   */
  constructor(private http: HttpClient) { }


  /**
   *  it adds the input url to the base URL
   */
  setUrl(url: string) {
    return environment.baseUrl + url;
  }

  /**
   *  here we specify that login is a post request that accepts 2 arguments (url,body)
   */
  login(url: string, body: string): Observable<any>{
    return this.http.post(this.setUrl(url) , body, this.getOptions('login')).pipe(
      tap(
        (res: any) => {

        },
        (error: any) => {

        }
      )
    )
  }

  /**
   *  here we specify that refreshToken is a post request that accepts 2 arguments (url,body)
   */
  refreshToken(url: string, body: string): Observable<any> {
    return this.http.post(this.setUrl(url), body, this.getOptions('login')).pipe(
      tap(
        (res: any) => {

        },
        (error: any) => {

        }
      )
    )
  }

  /**
   *  here we specify that logout is a delete request that accepts 1 argument (url)
   */
  logout(url: string): Observable<any> {
    return this.http.delete(this.setUrl(url), this.getOptions('logout')).pipe(
      tap(
        (res: any) => {

        },
        (error: any) => {

        }
      )
    )
  }

  /**
   *  here we specify that forgetPassword is a post request that accepts 2 arguments (url,body)
   */
  forgetPassword(url:string, body:string): Observable<any>{
    return this.http.post(this.setUrl(url) , body, this.getOptions('forgetPassword')).pipe(
      tap(
        (res:any)=>{
        },
        (error:any)=>{

        }
      )
    )
  }

  /**
   *  here we specify that changePassword is a post request that accepts 2 arguments (url,body)
   */
  changePassword(url:string, body:string): Observable<any>{
    return this.http.post(this.setUrl(url) , body, this.getOptions('changePassword')).pipe(
      tap(
        (res:any)=>{
        },
        (error:any)=>{

        }
      )
    )
  }

  /**
   *  here we specify that getAccount is a get request that accepts 1 argument (url)
   */
  getAccount(url:string): Observable<any>{
    return this.http.get(this.setUrl(url), this.getOptions('getAccount')).pipe(
      tap(
        (res:any)=>{
        },
        (error:any)=>{

        }
      )
    )
  }


  /**
   * here we set headers for every individual request
   */
  getOptions(APIName:string){
    switch (APIName) {
      case 'login':{
        const loginHeader=new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic YnJvd3Nlcjo=',
          'Accept': 'application/json',
          'Host': environment.baseUrl
        });
        return {headers: loginHeader};
      }

      case 'logout': {
        const logoutHeader = new HttpHeaders({
          'Authorization': 'Bearer ' + this.token,
          'Host': environment.baseUrl
        });
        return {headers: logoutHeader};
      }

      case 'forgetPassword': {
        const forgetPasswordHeader = new HttpHeaders({
          'Content-Type': 'text/plain',
          'Host': environment.baseUrl
        });
        return {headers: forgetPasswordHeader};
      }

      case 'changePassword':{
        const changePasswordHeader=new HttpHeaders({
          'Content-Type': 'text/plain',
          'Authorization': 'Bearer '+this.token ,
          'Host': environment.baseUrl
        });
        return {headers: changePasswordHeader};
      }

      case 'getAccount': {
        const getAccountHeader = new HttpHeaders({
          'Content-Type': '/account/',
          'Authorization': 'Bearer ' + this.token ,
          'Accept': 'application/json',
          'Host': environment.baseUrl
        });
        return {headers: getAccountHeader};
      }

    }
  }
}
