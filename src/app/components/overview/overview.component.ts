import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
    private overview = [
        { title: "Personendaten", text: "", icon: ">", lists: [{list: "List one", icon: "dot"}, {list: "List two",icon: "dot"}] },
        { title: "Steuerpflicht", text: "2020 Provisorisch 2019 Definitiv Einkommen: 130000 Vermögen:80000", icon: ">", lists: [{list: "List one", icon: "dot"}]},
        { title: "Historie", text: "", icon: ">", lists: [{list: "List one", icon: "dot"}, {list: "List two", icon: "triangle"},{list: "List three", icon: "dot"}] },
        { title: "Veranlagung", text: "", icon: ">", lists: []},
        { title: "Konto", text: "", icon: ">", date: "2000-01-16", lists: []},
        { title: "Inkasso & Verlustscheine", text: "", icon: "^", lists: [{list: "List one", icon: "triangle"}] }

    ];

    ngOnInit() {}

}
