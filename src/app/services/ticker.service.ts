import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TickerService {
    constructor (
        private http: Http
    ) {}

    getBalances(currency:string){
        return this.http.get('https://cryptodeskbackend.herokuapp.com/tick/BTC_'+currency)
            .map((res:Response) => res.json());
    }

    createMovement(from:string, to:string, amount_from:string, amount_to:string){
        alert(JSON.stringify({from:from, to:to, amount_from:amount_from, amount_to:amount_to}));
        let body = new URLSearchParams();
        body.set('from', from);
        body.set('to', to);
        body.set('amount_from', amount_from);
        body.set('amount_to', amount_to);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('https://cryptodeskbackend.herokuapp.com/user/58e08359cf47080008daca34/movement/create',
            body, options).map((res:Response) => res.json());
    }

}