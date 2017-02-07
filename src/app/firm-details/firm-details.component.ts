import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-firm-details',
  templateUrl: './firm-details.component.html',
  styleUrls: ['./firm-details.component.css']
})
export class FirmDetailsComponent implements OnInit {
  id : string;
  constructor(private _route : ActivatedRoute) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
  }

}
