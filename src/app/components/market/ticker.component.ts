import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-ticker',
    templateUrl: 'ticker.component.html',
    styleUrls: ['ticker.component.css']
})

export class TickerComponent implements AfterViewInit {

    private name:string;
    private currency:string;

    constructor(private route: ActivatedRoute){
        this.name = "Ticker"
        this.route.params.subscribe((params: {id: string}) => {
            this.currency=params.id;
        });
    }

    ngAfterViewInit(): void {

    }

}
