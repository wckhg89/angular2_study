/**
 * Created by kanghonggu on 2017. 3. 10..
 */
import { Injectable } from '@angular/core';
import {Parent} from "../oop-service/parent.service";


export interface Child {
    getData();
}

@Injectable()
export class FirstChild implements Child {
    constructor (public parent: Parent) {

    }

    getData() {
        return [
            { Child : 'First Child Service' },
            { parent : this.parent.getName() }
        ];
    }

}

@Injectable()
export class SecondChild extends Parent implements Child {
    getData() {
        return [
            { child : 'Second Child Service'},
            { parent : super.getName() }
        ];
    }

}