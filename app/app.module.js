"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); //ngModel binding
var app_component_1 = require("./app.component");
var hello_component_1 = require("./hello/hello.component");
var parent_to_child_input_component_1 = require("./parent-to-child/parent-to-child-input.component");
var child_input_component_1 = require("./parent-to-child/child-input.component");
var parent_to_child_inputs_component_1 = require("./parnet-to-child-inputs/parent-to-child-inputs.component");
var child_inputs_component_1 = require("./parnet-to-child-inputs/child-inputs.component");
var parent_component_1 = require("./nested/parent.component");
var child_component_1 = require("./nested/child.component");
var child_to_parent_component_1 = require("./child-to-parent/child-to-parent.component");
var child_component_2 = require("./child-to-parent/child.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            hello_component_1.HelloComponent,
            parent_component_1.ParentComponent, child_component_1.ChildComponent,
            parent_to_child_input_component_1.ParentToChildInputComponent, child_input_component_1.ChildInputComponent,
            parent_to_child_inputs_component_1.ParentToChildInputsComponent, child_inputs_component_1.ChildInputsComponent,
            child_to_parent_component_1.ChildToParentComponent, child_component_2.ChildValueComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map