import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   constructor(private http:Http) {
       var data;
        this.http.get('data/data.json')
                .subscribe(res => this.data = res.json());
    }
}
