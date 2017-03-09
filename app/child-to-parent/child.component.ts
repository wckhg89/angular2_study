/**
 * Created by kanghonggu on 2017. 3. 9..
 */
import {Component, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'child-value',
    template :
    `
    <div>
        자식<button (click)="updateParent(active)">부모에게 이벤트 보내기</button>
    </div>
    `
})

export class ChildValueComponent {
    active = false;
    @Output() outputProperty = new EventEmitter<boolean>();

    updateParent(active: boolean) {
        this.active = !active;
        this.outputProperty.emit(this.active);
    }
}