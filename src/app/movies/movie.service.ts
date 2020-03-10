import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    constructor(private httpService: HttpClient) { }
    // public imovies:string [];
    // public emovies:string [];

    // public getProducts():any{
    //     this.httpService.get('.././assets/json/top-rated-indian-movies-01.json').subscribe(
    //         data => {
    //             this.imovies = data as string [];	 // FILL THE ARRAY WITH DATA.
    //             console.log("Service Ind ",this.imovies);
    //         },
    //         (err: HttpErrorResponse) => {
    //             console.log (err.message);
    //         }
    //     )}

    // public getEngMovies():any{
    //     this.httpService.get('.././assets/json/movies-coming-soon.json').subscribe(
    //         data => {
    //             this.emovies = data as string [];	 // FILL THE ARRAY WITH DATA.
    //             console.log("Service Eng ",this.emovies);
    //         },
    //         (err: HttpErrorResponse) => {
    //             console.log (err.message);
    //         }
    //     )}

}
