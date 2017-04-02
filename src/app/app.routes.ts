import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ModuleWithProviders} from "@angular/core";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {HistoryComponent} from "./components/history/history.component";
import {MarketComponent} from "./components/market/market.component";
import {TickerComponent} from "./components/market/ticker.component";
import {CycleComponent} from "./components/cycle/cycle.component";
import {SocialComponent} from "./components/social/social.component";

export const routes: Routes = [
    { path: '.', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'market', component: MarketComponent, children: [
        { path: ':id', component: TickerComponent, outlet: 'ticker' }
    ] },
    { path: 'cycle', component: CycleComponent },
    { path: 'social', component: SocialComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
