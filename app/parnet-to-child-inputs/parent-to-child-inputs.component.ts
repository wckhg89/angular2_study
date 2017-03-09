/**
 * Created by kanghonggu on 2017. 3. 9..
 */
import {Component} from '@angular/core';


@Component({
    selector:'app-parent-to-child-inputs',
    template:
    `
        <div>부모 inputs
            <child-inputs [name1]="name1" [name2]="name2">
            </child-inputs>
        </div>
    `,
    styles: [`div{border: 2px solid #666;padding:10px;width:400px;height:200px;}`]
})

export class ParentToChildInputsComponent {
    name1 = 'Apple';
    name2 = 'Banana';
}