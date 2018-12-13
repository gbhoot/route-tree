import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
    productD: any;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this.resetProduct();
        this._route.params.subscribe((params: Params) => {
            this.getSingleProductData(params['id']);
        });
    };

    resetProduct() {
        this.productD = {
            title: "",
            price: 0,
            imgURL: ""
        };
    };

    getSingleProductData(id: string) {
        let observable = this._httpService.getOne(id);
        observable.subscribe(data => {
            this.productD = data['product'];
        });
    };

    updateProduct(event: any): void {
        let pid = this.productD._id;
        let observable = this._httpService.update(pid, this.productD);
        observable.subscribe(data => {
            this.getSingleProductData(pid);
            this._router.navigate(['/products']);
        })
    }
}
