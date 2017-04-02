import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BalancesService} from "../../services/balances.service";
import {Balance} from "../../objects/balance";

@Component({
    selector: 'app-portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.css'],
    providers: [BalancesService]
})

export class PortfolioComponent implements OnInit{

    private name:string;
    private balances:Balance[] = [];

    constructor(
        private router: Router,
        private balancesService: BalancesService
    ){
        this.name = "Portfolio"
    }

    ngOnInit(): void {
        this.loadBalances();
    }

    goToMarket() {
        this.router.navigate(['/market']);
    }

    loadBalances() {
        this.balancesService.getBalances().subscribe(data => this.balances = data,
            err => console.error(err));
    }
}
