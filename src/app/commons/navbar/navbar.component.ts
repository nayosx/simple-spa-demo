import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links = [
    { title: 'Inicio', fragment: 'products' },
    { title: 'favoritos', fragment: 'favorites' }
  ];

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
