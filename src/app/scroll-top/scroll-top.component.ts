import { Component, OnInit } from '@angular/core';
import { ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {

  constructor(@Inject(ElementRef) private elementRef: ElementRef) {}
  
  

  ngOnInit(): void {
   
    
  }
  scrollToTop() {
    const window = this.elementRef.nativeElement.ownerDocument.defaultView;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
