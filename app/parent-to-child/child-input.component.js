"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kanghonggu on 2017. 3. 9..
 */
var core_1 = require("@angular/core");
var ChildInputComponent = (function () {
    function ChildInputComponent() {
    }
    return ChildInputComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildInputComponent.prototype, "name1", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildInputComponent.prototype, "name2", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildInputComponent.prototype, "name3", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildInputComponent.prototype, "name4", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildInputComponent.prototype, "name5", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildInputComponent.prototype, "name6", void 0);
ChildInputComponent = __decorate([
    core_1.Component({
        selector: 'child-input',
        template: "\n            <div>\n                \uC790\uC2DD<br>\n                name1: {{name1}}<br>\n                name2: {{name1}}<br>\n                name3: <span *ngFor=\"let i of name3\">{{i}}</span><br>\n                name4: {{name4}}<br>\n                name5: {{name5}}<br>\n                name6: {{name6}}<br>\n            </div>  \n        ",
        styles: ["div{border: 2px dotted #666;padding:10px;margin-top:5px;width:90%;height:75%;}"]
    })
], ChildInputComponent);
exports.ChildInputComponent = ChildInputComponent;
//# sourceMappingURL=child-input.component.js.map