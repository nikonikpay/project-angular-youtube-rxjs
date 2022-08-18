import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchResult} from "../youtube-search-http/search-result.model";
import {YouTubeSearchService} from "../youtube-search-http/youtube-search.service";
import {debounceTime, filter, fromEvent, switchMap, tap} from "rxjs";
import {map} from "rxjs/operators";




@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService,
              private el: ElementRef) {
  }

// .map((e: any) => e.target.value) // extract the value of the input
// .filter((text: string) => text.length > 1) // filter out if empty
// .debounceTime(250)                         // only once every 250ms
// .do(() => this.loading.emit(true))         // enable loading
//   // search, discarding old events if new input comes in
// .map((query: string) => this.youtube.search(query))
// .switch()
//   // act on the return of the search

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((value:any) => value.target.value),
      filter((text:string)=> text.length>1),
      debounceTime(250),
      tap(()=>this.loading.emit(true)),
      switchMap((query:string)=> this.youtube.search(query)),


    ).subscribe({
        next: (results: SearchResult[]) => { // on sucesss
          this.loading.emit(false);
          this.results.emit(results);
        },
        error: (err: any) => { // on error
          console.log(err);
          this.loading.emit(false);
        },
        complete: () => { // on completion
          this.loading.emit(false);
        }
      });

  }

}
