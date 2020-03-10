import { Component, HostListener, OnInit } from '@angular/core';

import { MovieService } from "./movies/movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'library';
  isListView:boolean=true;

  constructor(private service:MovieService) {   }

  ngOnInit() {
  }
  showList(){
    this.isListView=false;
    // console.log('listview :',  this.isListView);
  }
  showGrid(){
    this.isListView=true;
    // console.log('listview :',  this.isListView);
  }
  
}
