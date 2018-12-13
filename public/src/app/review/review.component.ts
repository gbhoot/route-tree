import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
    randID: number;
    constructor() { }

    ngOnInit() {
        this.randomizeID();
    }

    randomizeID() {
        this.randID = Math.floor(Math.random() * 99) + 1;
    }
}
