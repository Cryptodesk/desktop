import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {MenuComponent} from "./components/menu.component";
import {Routing} from "./app.routes";
import {AppComponent} from "./app.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {MarketComponent} from "./components/market/market.component";
import {HistoryComponent} from "./components/history/history.component";
import {CycleComponent} from "./components/cycle/cycle.component";
import {SocialComponent} from "./components/social/social.component";
import {TickerComponent} from "./components/market/ticker.component";
import {BalancesService} from "./services/balances.service";
import {Http, HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {TickerService} from "./services/ticker.service";

@NgModule({
    imports: [
        BrowserModule,
        Routing,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        MenuComponent,
        PortfolioComponent,
        MarketComponent,
        HistoryComponent,
        CycleComponent,
        SocialComponent,
        TickerComponent
    ],
    providers: [BalancesService, TickerService],
    bootstrap: [ AppComponent, MenuComponent ]
})

export class AppModule { }
