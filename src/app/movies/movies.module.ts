import { CommonModule } from '@angular/common';
import { MovieGridComponent } from './moviegrid/moviegrid.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [MovieGridComponent, MovieslistComponent],
  exports:[MovieGridComponent,MovieslistComponent]
})
export class MoviesModule { }
