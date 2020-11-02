import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  headerActive = 'about';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.headerActive = ev.url;
      }
    });
  }
}
