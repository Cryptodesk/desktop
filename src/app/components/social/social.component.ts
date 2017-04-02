import { Component } from '@angular/core';

@Component({
    selector: 'app-social',
    templateUrl: 'social.component.html',
    styleUrls: ['social.component.css']
})

export class SocialComponent {
    private name:string;

    constructor(){
        this.name = "Social"
    }
}
