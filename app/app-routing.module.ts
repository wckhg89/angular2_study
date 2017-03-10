/**
 * Created by kanghonggu on 2017. 3. 10..
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloComponent} from "./hello/hello.component";
import {ParentComponent} from "./nested/parent.component";
import {ParentToChildInputComponent} from "./parent-to-child/parent-to-child-input.component";
import {ParentToChildInputsComponent} from "./parnet-to-child-inputs/parent-to-child-inputs.component";
import {ChildToParentComponent} from "./child-to-parent/child-to-parent.component";
import {OopComponent} from "./oop-service/oop.component";


const appRoutes: Routes = [
    {path : '', component: HelloComponent },
    {path : 'parent', component: ParentComponent },
    {path : 'parent/input', component:  ParentToChildInputComponent},
    {path : 'parent/inputs', component:  ParentToChildInputsComponent},
    {path : 'child', component:  ChildToParentComponent},
    {path : 'oop/service', component:  OopComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}