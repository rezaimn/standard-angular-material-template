import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {SessionStorage} from 'ngx-webstorage';


/**
 * @ignore
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;
  @SessionStorage('isLoggedIn')
  isLoggedIn;
  @SessionStorage('userPermissions')
  public userPermissions;
  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private translate: TranslateService, public router: Router) {
    // this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
    // this.translate.setDefaultLang('fa');
    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

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
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }


  userHasAccessToModule(moduleId) {
    for (let module of this.userPermissions.modules) {
      if (module.module.id == moduleId) {
        for (let screen of module.module.screens) {
          if (screen.permission.access != 2) {
            return true;
          }
        }

      }
    }
    return false;
  }
  userHasAccessToScreen(moduleId,screenId) {
    for (let module of this.userPermissions.modules) {
      if (module.module.id == moduleId) {
        for (let screen of module.module.screens) {
          if(screenId==screen.screen.id){
            if (screen.permission.access != 2) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
