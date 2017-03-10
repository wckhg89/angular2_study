import { Component } from '@angular/core';


@Component({
  selector : 'my-app',
    template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>모듈</h1>
        </a>
        <ol class="tree-list">        
          <li><a routerLink="/parent" routerLinkActive="active">/parent 어플리케이션 루트모듈 라우팅 테스트</a></li>
          <li><a routerLink="/parent/input" routerLinkActive="active">/parent/input 어플리케이션 루트모듈 라우팅 테스트</a></li>
          <li><a routerLink="/parent/inputs" routerLinkActive="active">/parent/inputs 어플리케이션 루트모듈 라우팅 테스트</a></li>
          <li><a routerLink="/child" routerLinkActive="active">/child 어플리케이션 루트모듈 라우팅 테스트</a></li>
          <li><a routerLink="/oop/service" routerLinkActive="active">/oop-service 어플리케이션 루트모듈 라우팅 테스트</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})

export class AppComponent {}
