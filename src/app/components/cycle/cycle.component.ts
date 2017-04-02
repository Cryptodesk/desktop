import { Component } from '@angular/core';
import {Change} from "../../objects/change";

let io = require('socket.io-client');

@Component({
    selector: 'app-cycle',
    templateUrl: 'cycle.component.html',
    styleUrls: ['cycle.component.css']
})

export class CycleComponent {
    private name:string;
    private socket:any


    constructor(){
        this.name = "Cycle"
        this.socket = io('https://cryptodeskbackend.herokuapp.com/');
        this.start();
        this.socket.on('info', function(data:any){
            console.log(data);
            if(data.finished){
                alert("Your revenue has been: "+(this.changes[this.changes.length-1]-0.4)*100/0.4 + "%");
            }
        });
        this.socket.on('movement', function(data:any){
            //this.changes.push(new Change(data.to, data.new_amount));
            console.log(data);
        });
    }

    start(){
        //this.changes.push(new Change("BTC", 0.4));
        this.socket.emit('start', {});
        alert("start");
    }


}
