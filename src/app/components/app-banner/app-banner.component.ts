import { Component, OnInit } from '@angular/core';

import { MovieService } from "../../movies/movie.service";

@Component({
  selector: 'app-banner',
  templateUrl: './app-banner.component.html',
  styleUrls: ['./app-banner.component.scss']
})
export class AppBannerComponent implements OnInit {
  lang=["English","Hindi"];
  imovies=[];
  constructor(private service:MovieService) { }

  ngOnInit() {
  }
}
