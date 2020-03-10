import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrollTop',
  template: `
  <button href="javascript:void(0);" class="fadeIn" (click)="topFunction()" id="myBtn" title="Go to top">
    <span><i class="top fa fa-arrow-up fa-2x" aria-hidden="true"></i></span>
  </button>
  `,
  styleUrls: ['./app-scrollTop.component.css']
})
export class AppScrollTopComponent {

  @HostListener("window:scroll", []) onWindowScroll() { this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
  }

 // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   
  } 


  

}
