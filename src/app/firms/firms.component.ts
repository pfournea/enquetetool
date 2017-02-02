import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import  {Firm} from "./firm";
import {FirmService} from "./firms.service";

@Component({
    moduleId: module.id,
    selector: 'app-firms',
    templateUrl: './firms.component.html',
    providers: [FirmService],
    styleUrls: ['./firms.component.css']
})
export class FirmsComponent implements OnInit {
    firms: Firm[];
    @Input() filter: string = "";

    constructor(private _router: Router, private _firmService: FirmService) {
    }

    resetFilter() {
        this.filter = null;
    }

    openDetail(firmNumber: string) {
        this._router.navigate(['firm-details', firmNumber]);
    }

    ngOnInit() {
        this._firmService.getFirms().subscribe(firms => this.firms = firms,
            error => console.log(error));
    }
}
