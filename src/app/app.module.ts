import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { BreedViewerComponent } from './breed-viewer/breed-viewer.component';


const routes = [
  {path: '', component: BreedViewerComponent},
  {path: ':breedName', component: BreedViewerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BreedViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
