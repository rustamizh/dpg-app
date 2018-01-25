import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-breed-viewer',
  templateUrl: './breed-viewer.component.html',
  styleUrls: ['./breed-viewer.component.css']
})
export class BreedViewerComponent implements OnInit, OnChanges {

  @Input() choosenBreed;

  public breedImageUrl;

  constructor(private route: ActivatedRoute,
              private _http: HttpClient) {
    this.route.params.subscribe((params) => console.log(params))
   }




  ngOnInit() {
  }

  ngOnChanges() {
    this._http.get( 'https://dog.ceo/api/breed/' + this.choosenBreed + '/images/random').subscribe((data) => {
      this.breedImageUrl = data['message'];
      console.log(this.breedImageUrl);
    });
  }

}
