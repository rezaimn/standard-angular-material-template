import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {SessionStorage} from 'ngx-webstorage';
import {AuthenticationService} from '../../../shared/services/authentication.service';

/**
 * @ignore
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pushRightClass: string;
  @SessionStorage('isLoggedIn') isLoggedIn;

  @SessionStorage('accountData') accountData;


  constructor(private translate: TranslateService,
              public router: Router,
              private authService: AuthenticationService) {


    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.pushRightClass = 'push-right';
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  onLoggedout() {
    this.authService.logout('/aaa/oauth-extends/token').subscribe(
      (res: any) => {
        this.isLoggedIn = false;

        this.router.navigateByUrl('/auth/login');
      }
    );

  }

  changeLang(language: string) {
    const dom: any = document.querySelector('body');
    this.translate.setDefaultLang(language);
    this.translate.get('shared.direction', language).subscribe(
      (res: any) => {
        // if(res=='rtl' &&  !dom.classList.contains('rtl')){
        //   dom.classList.toggle('rtl');
        //   this.localData.currentLanguage= language;
        // }
        // if(res=='ltr' && dom.classList.contains('rtl')){
        //   dom.classList.toggle('rtl');
        //   this.localData.currentLanguage=language;
        // }
        // this.localData.languageChanged.emit(language);
      }
    );
  }


}
