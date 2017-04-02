import { Component } from '@angular/core';

@Component({
    selector: 'app-cycle',
    templateUrl: 'cycle.component.html',
    styleUrls: ['cycle.component.css']
})

export class CycleComponent {
    private name:string;

    constructor(){
        this.name = "Cycle"
    }
}
