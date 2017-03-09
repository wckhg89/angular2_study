/**
 * Created by kanghonggu on 2017. 3. 9..
 */
import { Component } from '@angular/core';

@Component({
    selector: 'parent-input',
    template:
        `
        <div>부모
            <child-input [name1]="fruit1" [name2]="fruit2()"
                        [name3]="fruit3" [name4]="1+1" [name5]="fruit5"
                        [name6]="fruit6">
            </child-input>              
        </div>
        `,
    styles: [`div{border: 2px solid #666;padding:10px;width:400px;height:250px;}`]
})

export class ParentToChildInputComponent {
    private fruit1:string = "Apple";

    fruit2 ():string {
        return "Pear";
    }

    fruit3:string[] = ['Strawberry', 'Podo', 'Sorry'];

    static fruit5:string = 'Watermelon';

    get fruit6 () : string {
        return ParentToChildInputComponent.fruit5;
    }
}