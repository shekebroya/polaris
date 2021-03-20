import { Component, OnInit } from '@angular/core';
import { SubNavigation } from './subnavigation_property';

@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.css']
})
export class SubNavigationComponent implements OnInit {

  subNavigation:SubNavigation[] = [ 
    {site: "Faktorenanpassung", icon: ":-)"}, 
    {site: "Zahlungsvereinbarung", icon: ":("}, 
    {site: "Fristverlängerung", icon: ";-)"}, 
    {site: "Einsprache", icon: ":-|"}, 
    {site: "Auskunft", icon: ":-)"}, 
    {site: "Weiteres", icon: ":"}
  ];

  ngOnInit() {
  }

}
