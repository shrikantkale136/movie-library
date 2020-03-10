import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MovieService } from "../movie.service";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.scss']
})
export class MovieslistComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private service:MovieService,private modalService: BsModalService,private httpService: HttpClient) { }


  public imovies:string [];
  public emovies:string [];
  ngOnInit() {
    this.getEngMovies();
    this.getProducts();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public getProducts():any{
      this.httpService.get('.././assets/json/top-rated-indian-movies-01.json').subscribe(
          data => {
              this.imovies = data as string [];	 // FILL THE ARRAY WITH DATA.
              console.log("Service Ind ",this.imovies);
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
