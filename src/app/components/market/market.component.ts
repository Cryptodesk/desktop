import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import {Router} from "@angular/router";

@Component({
    selector: 'app-market',
    templateUrl: 'market.component.html',
    styleUrls: ['market.component.css']
})

export class MarketComponent implements AfterViewInit {

    private name:string;

    constructor(private router: Router){
        this.name = "Market"
    }

    ngAfterViewInit(): void {
        console.log("Test!")
        console.log($("body"));
    }

    showTicker(id:string) {
        this.router.navigate(['/market', {outlets: {'ticker': [id]}}]);
    }

}
