import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavItem } from 'src/app/core/models/NavItem';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }
  NavList: NavItem[] = [
    { class: "bx-grid-alt ", title: "Dashboard", active: true, route: "Users/list" },
    { class: "bx-user", title: "Users", active: false, route: "" },
    { class: " bx-message-square-detail", title: "Messages", active: false, route: "" },
    { class: "bx-bookmark", title: "Favorites", active: false, route: "" },
    { class: "bx-folder", title: "Data", active: false, route: "" },
    { class: "bx-bar-chart-alt-2", title: "Analytics", active: false, route: "" }
  ];

  ngOnInit(): void {
    this.showNavbar();
  }
  onnavClick(item: any) {
    this.NavList.forEach(l => l.active = false);
    item.active = true;
  }

  showNavbar(): void {
    const toggle = document.getElementById("headertoggle"),
      nav = document.getElementById("nav-bar"),
      bodypd = document.getElementById("body-pd"),
      headerpd = document.getElementById("header");
    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {

        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  }

}
