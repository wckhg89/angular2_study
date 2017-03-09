"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kanghonggu on 2017. 3. 9..
 */
var core_1 = require("@angular/core");
var ChildInputsComponent = (function () {
    function ChildInputsComponent() {
    }
    return ChildInputsComponent;
}());
ChildInputsComponent = __decorate([
    core_1.Component({
        selector: 'child-inputs',
        template: "\n        <div>\uC790\uC2DDinputs<br>\n            inputs \uD504\uB85C\uD37C\uD2F0\uB85C \uBC1B\uC740 \uAC12 : {{name1}}, {{name2}}\n        </div>\n    ",
        styles: ["div{border: 2px dotted #666;padding:10px;margin-top:5px;width:90%;height:75%;}"],
        inputs: ['name1', 'name2']
    })
], ChildInputsComponent);
exports.ChildInputsComponent = ChildInputsComponent;
//# sourceMappingURL=child-inputs.component.js.map