export class PersonShortInfo {
    married: boolean;
    person: Person;
    marriedTo: MarriedTo;
    address: Address;
}
export class Person {
    firstname: string; 
    lastname: string; 
    gender: string; 
    birthday: string; 
};
export class MarriedTo {
    firstname: string; 
    lastname: string; 
    gender: string; 
    birthday: string; 
};
export class Address {
    zip: number; 
    city: string; 
    state: string; 
    street: string; 
    streetnumber: number; 
};
