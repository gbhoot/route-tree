import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    products: any;

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getProducts();
    };

    getProducts() {
        let observable = this._httpService.getAll();
        observable.subscribe(data => {
            this.products = data['products'];
            console.log(this.products[0]);
        });
    };

    deleteBtnPressed(id: string, idx: number) {
        let thisProduct = this.products[idx];
        console.log(thisProduct['title']);
        let observable = this._httpService.destroy(id);
        observable.subscribe(data => {
            this.getProducts();
            
        });
    };
}
