import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service";
import { HttpErrorResponse, HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-moviegrid',
  templateUrl: './moviegrid.component.html',
  styleUrls: ['./moviegrid.component.scss']
})
export class MovieGridComponent implements OnInit {
  imagenotFound="image-not-found";
  constructor(private service: MovieService,private httpService: HttpClient) { }
  indmovies=[];
  emovies=[];
  ngOnInit() {
    this.getProducts();
    this.getEngMovies();
  }

  // getAllProducts():any{
  //    this.indmovies=this.service.getProducts();
  //   console.log('Movies Grid :', this.indmovies);
  // }
  public getProducts():any{
    this.httpService.get('.././assets/json/top-rated-indian-movies-01.json').subscribe(
        data => {
            this.indmovies = data as string [];	 // FILL THE ARRAY WITH DATA.
            console.log("Service Ind ",this.indmovies);
        },
        (err: HttpErrorResponse) => {
            console.log (err.message);
        }
    )}

public getEngMovies():any{
    this.httpService.get('.././assets/json/movies-coming-soon.json').subscribe(
        data => {
            this.emovies = data as string [];	 // FILL THE ARRAY WITH DATA.
            console.log("Service Eng ",this.emovies);
        },
        (err: HttpErrorResponse) => {
            console.log (err.message);
        }
    )}
  
 
}
