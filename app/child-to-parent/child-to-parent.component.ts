/**
 * Created by kanghonggu on 2017. 3. 9..
 */
import {Component} from "@angular/core";


@Component({
    selector: 'app-root',
    template:
    `
        <div>부모<br>
            클릭수 : {{cntClick}} <br>
            자식상태 : {{active}}
            <child-value (outputProperty)="outputEvent($event)"></child-value>
        </div>
    `
})

export class ChildToParentComponent {
    cntClick = 0;
    active = false;

    outputEvent(active:boolean) {
        this.cntClick++;
        this.active = active;
    }
}