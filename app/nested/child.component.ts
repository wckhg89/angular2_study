/**
 * Created by kanghonggu on 2017. 3. 9..
 */
import { Component } from '@angular/core';

@Component({
    selector: 'nested-child',
    template: `<div>자식
    
  </div>`,
    styles: [`div{border: 2px dotted #666;padding:10px;margin-top:5px;width:75%;height:75%;}`]
})
export class ChildComponent{}