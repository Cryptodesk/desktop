import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.css']
})

export class PortfolioComponent {
    private name:string;

    constructor(private router: Router){
        this.name = "Portfolio"
    }

    goToMarket() {
        this.router.navigate(['/market']);
    }
}
