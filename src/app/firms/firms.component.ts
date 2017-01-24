import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import  {Firm} from "./firm";

@Component({
    selector: 'app-firms',
    templateUrl: './firms.component.html',
    styleUrls: ['./firms.component.css']
})
export class FirmsComponent implements OnInit {
    firms: Firm[];
    @Input() filter: string = "";

    constructor(private _router : Router) {
        this.firms = [];
        this.firms.push(new Firm('00000000001', 'the name of the firm 1'));
        this.firms.push(new Firm('00000000002', 'the name of the firm 2'));
    }

    resetFilter() {
        this.filter = null;
    }

    openDetail() {
        this._router.navigate(['firm-details']);
    }

    ngOnInit() {
    }
}
