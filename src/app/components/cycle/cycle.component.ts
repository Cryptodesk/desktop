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
    private i:number;
    private last_value:number;


    constructor(){
        this.i=0;
        this.name = "Cycle Trading"
        this.socket = io('https://cryptodeskbackend.herokuapp.com/');
        setTimeout(this.start(), 2000);
        this.socket.on('info', function(data:any){
            console.log(data);
        });
        this.socket.on('movement', function(data:any){
            let jdata=JSON.parse(data);
            //this.changes.push(new Change(data.to, data.new_amount));
            $('#step_container').append('<div style="width: 100px;" class="pearl done col-xs-4"> <span class="pearl-number"></span> <span class="pearl-title">'+jdata.to+'</span> </div>');
            $('#description').append('<h4>Exchanged '+jdata.actual_amount+' '+jdata.from+' for '+jdata.new_amount+' '+jdata.to+'.</h4>');
            this.i=this.i+1;
            this.last_value=jdata.new_amount;
            console.log(data);
            if(jdata.to == "BTC"){
                $('#description').append("<h3>Your revenue has been: "+(this.last_value-0.4)*100/0.4 + "%</h3>");
            }
        });
    }

    start(){
        //this.changes.push(new Change("BTC", 0.4));
        this.socket.emit('start', {});
    }


}
