import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }
    getBrands() {
        return new Promise((resolve, reject) => {
            this.http.get('https://praxesdemo-default-rtdb.firebaseio.com/brands.json').pipe(
                map(res => res))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
    getCars() {
        return new Promise((resolve, reject) => {
            this.http.get('https://praxesdemo-default-rtdb.firebaseio.com/cars.json').pipe(
                map(res => res))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}