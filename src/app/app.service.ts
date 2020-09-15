import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(private _http: HttpClient) {
  }

  // Uses http.get() to load data from a single API endpoint
  getFoods() {
    return this._http.get('./assets/products.json');
  }

  getCount(): Observable<any> {
    return this._http.get('http://localhost/wecode/mini-combat/API/count.php');
  }

  createUser(nom: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this._http.post<any>('http://localhost/wecode/mini-combat/API/create.php',
      {
        nom: nom
      }, {headers: headers}
    );
  }
}
