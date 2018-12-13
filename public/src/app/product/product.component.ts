import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    randID: number;
    constructor() { }

    ngOnInit() {
        this.randomizeID();
    }

    randomizeID() {
        this.randID = Math.floor(Math.random() * 99) + 1;
    }
}
