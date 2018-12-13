import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private _http: HttpClient) { }

    getAll() {
        return this._http.get('/db/v1/products');
    };

    getOne(id: string) {
        return this._http.get('/db/v1/products/'+ id);
    };

    create(product: any) {
        return this._http.post('/db/v1/products', product);
    };

    update(id: string, product: any) {
        return this._http.put('/db/v1/products/'+id, product);
    };

    destroyAll() {
        return this._http.delete('db/v1/products');
    };

    destroy(id: string) {
        return this._http.delete('/db/v1/products/'+id);
    };
}
