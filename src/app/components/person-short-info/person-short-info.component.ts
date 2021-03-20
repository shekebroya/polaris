import { Component, OnInit } from '@angular/core';
import { PersonShortInfo } from './personshortinfo_property';
import { AgeService } from '../../services/age.service';

@Component({
    selector: 'app-person-short-info',
    templateUrl: './person-short-info.component.html',
    styleUrls: ['./person-short-info.component.css']
})

export class PersonShortInfoComponent implements OnInit {
    private personAge: number;
    private marriedToAge: number;
    private personShortInfo: PersonShortInfo[] = [
        {
            person: {
                firstname: "Phillipe", lastname: "Meier", gender: "male", birthday: "1982-10-16",
            },
            married: true,
            marriedTo: {
                lastname: "Meier", firstname: "Sonja", gender: "female", birthday: "1984-12-21",
            },
            address: {
                zip: 9132, city: "Au", state: "SG", street: "Hauptstrasse", streetnumber: 22
            }
        }
    ];

    constructor( private ageService: AgeService ) { }

    ngOnInit() {
        this.personShortInfo.map((bday) => {
            bday.person.birthday!! ? this.personAge = this.ageService.getAge(bday.person.birthday) : null;
            bday.marriedTo.birthday!! ? this.marriedToAge = this.ageService.getAge(bday.marriedTo.birthday) : null;

        })

    }

}
