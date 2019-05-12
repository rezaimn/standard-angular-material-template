import { Component, OnInit } from '@angular/core';
import {SessionStorage} from 'ngx-webstorage';

/**
 * @ignore
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @SessionStorage('accountData')
  accountData;
  constructor() { }

  ngOnInit() {
  }

}
