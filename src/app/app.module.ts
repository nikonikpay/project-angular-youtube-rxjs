import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import {YouTubeSearchService} from "./youtube-search-http/youtube-search.service";
import {youTubeSearchInjectables} from "./youtube-search-http/you-tube-search.injectables";
import { SearchBoxComponent } from './search-box/search-box.component';

import { SearchResultComponent } from './search-result/search-result.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
