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
    window.open('https://docs.google.com/document/d/18wtWpzwCfdf3C-hn3Rn_FeWJnGcx-ev0064RvsMl3T0/edit?usp=drivesdk', '_blank');
  }

}
