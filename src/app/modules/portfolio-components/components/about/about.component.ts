import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadCV() {
    window.open('https://drive.google.com/file/d/1vZ5lKucfaUZjFs1xN0iuA8I81q2grGXa/view?usp=sharing', '_blank');
  }

}
