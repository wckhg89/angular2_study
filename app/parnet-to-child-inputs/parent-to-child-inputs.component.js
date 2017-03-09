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
var ParentToChildInputsComponent = (function () {
    function ParentToChildInputsComponent() {
        this.name1 = 'Apple';
        this.name2 = 'Banana';
    }
    return ParentToChildInputsComponent;
}());
ParentToChildInputsComponent = __decorate([
    core_1.Component({
        selector: 'parent-to-child-inputs-app',
        template: "\n        <div>\uBD80\uBAA8 inputs\n            <child-inputs [name1]=\"name1\" [name2]=\"name2\">\n            </child-inputs>\n        </div>\n    ",
        styles: ["div{border: 2px solid #666;padding:10px;width:400px;height:200px;}"]
    })
], ParentToChildInputsComponent);
exports.ParentToChildInputsComponent = ParentToChildInputsComponent;
//# sourceMappingURL=parent-to-child-inputs.component.js.map