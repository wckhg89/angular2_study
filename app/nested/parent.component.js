"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ParentComponent = (function () {
    function ParentComponent() {
    }
    return ParentComponent;
}());
ParentComponent = __decorate([
    core_1.Component({
        selector: 'parent-app',
        template: "\n  <h1>\uB098\uB294 \uBD80\uBAA8\uC774\uB2E4 \uACE0\uB85C \uBD80\uBAA8\uC774\uB2E4.</h1>\n  <parent-input></parent-input>\n  <parent-to-child-inputs-app></parent-to-child-inputs-app>\n  <nested-child></nested-child>\n  "
    })
], ParentComponent);
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map