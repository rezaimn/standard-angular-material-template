import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import {SessionStorage} from 'ngx-webstorage';

/**
 * there are two sections in the template,
 * one is suppose to be displayed for admin and one for users,
 * at first we check if the logged in person is admin or not and the suitable data will be displayed for him.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   constructor(){

   }
   ngOnInit(): void {
   }
}
