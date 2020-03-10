import { AppBannerComponent } from './components/app-banner/app-banner.component';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppModalComponent } from './components/app-modal/app-modal.component';
import { AppScrollTopComponent } from "./components/app-scrollTop/app-scrollTop.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap';
import { MoviesModule } from "./movies/movies.module";
import { NgModule } from '@angular/core';
import { ImagePreloadDirective } from './directive/image-preload.directive';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppBannerComponent,
    AppModalComponent,
    AppScrollTopComponent,
    ImagePreloadDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MoviesModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
