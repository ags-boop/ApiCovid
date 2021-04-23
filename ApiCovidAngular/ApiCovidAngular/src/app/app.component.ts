import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  readonly ROOTURL = `https://api.covid19api.com/dayone/country/Argentina/status/confirmed`
  GetJson() {
    fetch(this.ROOTURL)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  getInput() {
    let foodName = (document.getElementById("countryname") as HTMLInputElement).value;   
    console.log(foodName)
    fetch(`https://api.covid19api.com/dayone/country/${foodName}/status/confirmed`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  title = 'ApiCovidAngular';
}
