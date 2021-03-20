export class AgeService {
    getAge(bday: string): number {
        const today = new Date();
        const birthday = new Date(bday);
        const month = today.getMonth() - birthday.getMonth();
        let age = today.getFullYear() - birthday.getFullYear();

        month < 0 || ( month === 0 && today.getDate() < birthday.getDate() ) ? age-- : null;
        return age;

    }
    
}