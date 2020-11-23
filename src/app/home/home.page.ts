import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  totalAngularPackages: number;
  easyDem: number;

  constructor(private http: HTTP) { }

  getUrl() {
    console.log("Start");
    var url ='https://appeltaxi.fr/'
      this.http.get(url, {}, {}).then(response=> {
        console.log(response.status);
        console.log(JSON.parse(response.data)); // JSON data returned by server
        console.log(response.headers);
  });

}
}