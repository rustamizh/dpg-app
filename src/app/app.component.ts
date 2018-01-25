import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('breedChoiser') breedChoiser;

  public choosenBreed;
  public allBreeds;
  public breeds: string[];

  constructor(private _http: HttpClient) {

  }

  foo() {
    this.breedChoiser.nativeElement.value = 'husky';
  }

  onChoise() {
    this.choosenBreed = this.breedChoiser.nativeElement.value;
    console.log(this.breedChoiser.nativeElement.value);
  }


  ngOnInit() {
    this._http.get('https://dog.ceo/api/breeds/list').subscribe((data) => {
      this.allBreeds = data['message'];
    });
  }



}