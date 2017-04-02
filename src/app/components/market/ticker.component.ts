import {Component, OnInit, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import * as $ from 'jquery';
import {ActivatedRoute} from "@angular/router";
import {TickerService} from "../../services/ticker.service";
import {Ticker} from "../../objects/ticker";

@Component({
    selector: 'app-ticker',
    templateUrl: 'ticker.component.html',
    styleUrls: ['ticker.component.css']
})

export class TickerComponent {

    private name:string;
    private currency:string;
    private ticker:Ticker = new Ticker();

    constructor(private route: ActivatedRoute,
                private tickerService:TickerService){
        this.name = "Ticker"
        this.route.params.subscribe((params: {id: string}) => {
            this.currency=params.id;
            this.loadTickers();
        });

    }


    loadTickers() {
        this.tickerService.getBalances(this.currency).subscribe(data => this.ticker = data,
            err => console.error(err));
    }

    buy(event:any){
        let amount_to:string=$('#buy-amount').val();
        let amount_from:string=(parseFloat(amount_to)*this.ticker.last).toString();
        this.tickerService.createMovement('BTC', this.currency, amount_from, amount_to).subscribe(data =>console.log(data),
            err => console.error(err));
    }

    sell(event:any){
        let amount_from:string=$('#sell-amount').val();
        let amount_to:string=(parseFloat(amount_from)*this.ticker.last).toString();
        this.tickerService.createMovement(this.currency, 'BTC', amount_from, amount_to).subscribe(data => console.log(data),
            err => console.error(err));
    }

}
