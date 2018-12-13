import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-all-reviews',
	templateUrl: './all-reviews.component.html',
	styleUrls: ['./all-reviews.component.css']
})

export class AllReviewsComponent implements OnInit {
	reviewsID: number;

	constructor(
        private _route: ActivatedRoute
    ) { }

	ngOnInit() {
		this._route.params.subscribe((params: Params) => {
            this.reviewsID = params['id'];
        });
  	}
}
