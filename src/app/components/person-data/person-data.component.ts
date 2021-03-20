import { Component, OnInit } from '@angular/core';
import { PersonData } from './personsdata_property';
import { AgeService } from '../../services/age.service';

@Component({
    selector: 'app-person-data',
    templateUrl: './person-data.component.html',
    styleUrls: ['./person-data.component.css']
})
export class PersonDataComponent implements OnInit {
    private personDataGroup:PersonData[];
    private personData:PersonData[] = [
        { title: "Name/ Vorname", subtitle: "Meier Phillipe", date: null, type:"default" },
        { title: "Geschlecht", subtitle: "Männlich", date: null, type:"default" },
        { title: "Geburtsdatum", subtitle: "1982-10-16", date: null, type:"birthday"},
        { title: "Sozialversicherung", subtitle: "768.233.654.233", date: null, type:"default"},
        { title: "Zivilstand", subtitle: "Verheiratet", date: "2012-01-16", type:"date"},
        { title: "Pflichtig mit", subtitle: "Meier Sonia", date: null, type:"default" },
        { title: "Konfession", subtitle: "Reformiert", date: null, type:"default" },
        { title: "Kinder", subtitle: "2 Kinder", date: null, type:"default" },
        { title: "Nationalität", subtitle: "Schweizer", date: null, type:"default"},
        { title: "Arbeitgeber", subtitle: "Informatix AG", date: null, type:"default"},
        { title: "Steuerart", subtitle: "KGST", date: null, type:"default" },
        { title: "Bewilligung", subtitle: "Ortsbürger in politischer Gemeinde", date: null, type:"default" },
        { title: "Telefonummer", subtitle: "+41 768 12 982", date: null, type:"default" },
        { title: "E-Mail Adresse", subtitle: "meier@email.ch", date: null, type:"default" },
        { title: "", subtitle: "", date: null, type:"default" },
        { title: "Zuzug von", subtitle: "Deutschland", date: null, type:"default"},
        { title: "Zuzugsdatum", subtitle: "2018-03-01", date: null, type:"format" },
        { title: "Steuerpflichtig seit", subtitle: "2018-03-01", date: null, type:"format"}

    ];

    constructor( private ageService: AgeService ) { } //wird im person-data.component.html verwendet line:9

    ngOnInit() {
        this.personDataGroup = this.groupPersonData(this.personData, 3);

    }

    private groupPersonData(pData: any, n: number):PersonData[] {
        let group = [];
        let j = 0;

        pData.forEach((p:PersonData[], index: number) => {
            index >= n && index % n === 0 ? j++ : null;
            group[j] = group[j] || [];
            group[j].push(pData[index]);
            
        });
        return group;

    }

}
