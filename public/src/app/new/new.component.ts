import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
    productD: any;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this.resetProduct();
    }

    resetProduct() {
        this.productD = {
            title: "",
            price: "",
            imgURL: ""
        };
    };

    createNewProduct(event: any): void {
        this.productD['price'] = Number(this.productD['price']);
        let observable = this._httpService.create(this.productD);
        observable.subscribe(data => {
            this._router.navigate(['/products']);
        });
    };
}
