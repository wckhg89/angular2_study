"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by kanghonggu on 2017. 3. 10..
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hello_component_1 = require("./hello/hello.component");
var parent_component_1 = require("./nested/parent.component");
var parent_to_child_input_component_1 = require("./parent-to-child/parent-to-child-input.component");
var parent_to_child_inputs_component_1 = require("./parnet-to-child-inputs/parent-to-child-inputs.component");
var child_to_parent_component_1 = require("./child-to-parent/child-to-parent.component");
var appRoutes = [
    { path: '', component: hello_component_1.HelloComponent },
    { path: 'parent', component: parent_component_1.ParentComponent },
    { path: 'parent/input', component: parent_to_child_input_component_1.ParentToChildInputComponent },
    { path: 'parent/inputs', component: parent_to_child_inputs_component_1.ParentToChildInputsComponent },
    { path: 'child', component: child_to_parent_component_1.ChildToParentComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map