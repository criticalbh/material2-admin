import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {DummyModel} from "../models/dummy.model";

@Injectable()
export class DummyService {
  constructor(private http: Http) {
  }

  public fetch(): Observable<DummyModel[]> {
    return this.http.get('https://reqres.in/api/products').map(resp => resp.json().data);
  }
}
