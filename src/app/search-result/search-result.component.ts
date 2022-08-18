import {Component, Input, OnInit} from '@angular/core';
import {SearchResult} from "../youtube-search-http/search-result.model";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() result!: SearchResult;

  constructor() { }

  ngOnInit(): void {
  }

}
