export class Person {

    constructor(paadhar:string='',pname:string='',page:number=18)
    {}
    public aadhar:string = '';
    public name :string = '';
    public age : number = 0;
    private secrets : string[] = [];
    public isAlive : boolean = true;
    public hobbies:any = {};
    protected awardsRecieved:any[]= [];

    public static People:Person[]= [];

    public GetPeople(): Person[]{
        if(Person.People.length==0){
        Person.People.push(new Person('1234','Ankit boii',24));
        Person.People.push(new Person('1234','Shivam boii',25));
        Person.People.push(new Person('1235','Kanishq boii',26));
    }
        return Person.People;

    }
    public AddPerson(person:Person):boolean{
        if(person==undefined)
            return false;
        Person.People.push(person);
        return true;

    }
}

