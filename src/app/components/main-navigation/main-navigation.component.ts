import { Component, OnInit } from '@angular/core';
import { MainNavigation } from './mainnavigation_property';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  mainNavigation:MainNavigation[] = [ 
    {site: "Startseite"}, 
    {site: "Steuerpflicht"}, 
    {site: "Historie"}, 
    {site: "Veranlagung"}, 
    {site: "Konto"}, 
    {site: "Documente"}
  ];

  ngOnInit() { }

}
