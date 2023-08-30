import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  data: any[] = [];
  constructor(private _DataService: DataService) { }

  ngOnInit(): void {
    this.data = this._DataService.list;
    console.log(this.data)
  }





}

