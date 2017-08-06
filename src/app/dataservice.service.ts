import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataserviceService {

   constructor(public http:Http) {}

    getData() {
    return this.http.get("YOUR_PATH_TO_THE_JSON_FILE")
        .map((res:Response) => res.json().YOUR_JSON_HEADER); //records in this case
  }
    

}
