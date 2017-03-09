"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"left-menu\">\n      <div class=\"menu\">\n        <a routerLink=\"/\">\n          <h1>\uBAA8\uB4C8</h1>\n        </a>\n        <ol class=\"tree-list\">        \n          <li><a routerLink=\"/parent\" routerLinkActive=\"active\">/parent \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB8E8\uD2B8\uBAA8\uB4C8 \uB77C\uC6B0\uD305 \uD14C\uC2A4\uD2B8</a></li>\n          <li><a routerLink=\"/parent/input\" routerLinkActive=\"active\">/parent/input \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB8E8\uD2B8\uBAA8\uB4C8 \uB77C\uC6B0\uD305 \uD14C\uC2A4\uD2B8</a></li>\n          <li><a routerLink=\"/parent/inputs\" routerLinkActive=\"active\">/parent/inputs \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB8E8\uD2B8\uBAA8\uB4C8 \uB77C\uC6B0\uD305 \uD14C\uC2A4\uD2B8</a></li>\n          <li><a routerLink=\"/child\" routerLinkActive=\"active\">/child \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB8E8\uD2B8\uBAA8\uB4C8 \uB77C\uC6B0\uD305 \uD14C\uC2A4\uD2B8</a></li>\n        </ol>\n    </div>     \n  </div>\n  <div class=\"play-box\">\n    <router-outlet></router-outlet>\n  </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map