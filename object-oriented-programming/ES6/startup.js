// JS OOP with ES6

class Person {

    constructor(name, age, salary, skills, languages) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.skills = skills;
        this.languages = languages;
    }

    printing() {
        console.log(
            "================================================\n" + 
            "Name: " + this.name + "\n" +
            "Age: " + this.age + "\n" +
            "Salary: $ " + this.salary + "\n" +
            "Skills: " + this.skills + "\n" +
            "Languages: " + this.languages 
        );
    }
}


class Developer extends Person {
    constructor(name, age, salary, skills, languages, specialitation) {
        super(name, age, salary, skills, languages);

        this.specialitation = specialitation;
    }

    programming() {

    }

    printing() {
        let s = super.printing();
        console.log(s + "\nSpecialitation: ", this.specialitation);
    }
}


class Recruiter {

}

class Secretary extends Person {
    
    constructor(name, age, salary, skills, languages) {
        super(name, age, salary, skills, languages);

    }

    printing() {

        let s = super.printing();
        console.log(s);
    }

    async calling() {
        console.log("Calling...");
         setTimeout(() => console.log("Call finished"), 60000);
        
    }
}
    

class Lead extends Person {

    constructor(name, age, salary, skills, languages) {
        super(name, age, salary, skills, languages);
    }

    makeMeeting() {

    }
    
    printing() {

        let s = super.printing();
        console.log(s);
    }


}

let carl = new Person("Karl Stein", 29, 42000, "Stack MERN", "ES/EN/DE");
carl.printing();

let lara = new Person("Lara Johnson", 25, 35000, "React", "ES/EN");
lara.printing();

let george = new Developer("George May", 34, 64000, "Stack MERN, machine laerning", "ES/EN", "DevOp");
george.printing();

let stella = new Secretary("Stella Brown", 45, 50000, "MS office", "ES/EN/FR"); 
stella.printing();
stella.calling();

let louis = new Lead("Luis Herz", 38, 80000, "PHP,React", "ES/EN");
louis.printing();