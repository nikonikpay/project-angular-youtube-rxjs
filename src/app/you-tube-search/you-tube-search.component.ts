import {Component, OnInit} from '@angular/core';
import {SearchResult} from "../youtube-search-http/search-result.model";

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {

  results!: SearchResult[];
  loading!: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }

}
