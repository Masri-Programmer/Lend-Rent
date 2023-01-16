import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  scrollTo(y: number) {
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
