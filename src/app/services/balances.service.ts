import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BalancesService {
    constructor (
        private http: Http
    ) {}

    getBalances(){
        return this.http.get('https://cryptodeskbackend.herokuapp.com/user/58e08359cf47080008daca34/balance')
            .map((res:Response) => res.json());
    }

}