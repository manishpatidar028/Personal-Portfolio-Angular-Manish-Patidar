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
    window.open('https://drive.google.com/file/d/1i5JQ9rB8jMwp2gikAbp9C-b4yZGbIeyO/view?usp=sharing', '_blank');
  }

}
