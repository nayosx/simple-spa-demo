import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  public options: any;
  private path:string = 'products';

  constructor(private http: HttpClient) {
    this.options = { observe: 'response' };
  }

  public retrieve(): Observable<any> {
    return this.http.get<any>(environment.BASE_URL.concat(this.path), this.options );
  }
  
  public getById(id:number): Observable<any> {
    return this.http.get<any>(environment.BASE_URL.concat(this.path, '/', id.toString()), this.options );
  }
}
