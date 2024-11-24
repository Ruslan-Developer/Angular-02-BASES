

//Molde para crear objetos de tipo persona

export class Person {

    //Prpiedades de la clase

    //public name?: string;
    //public address?: string;

    //Esto nos acerca a la inyeccion de dependencias en Angular
    constructor(
        public firsName: string, 
        private lastName: string,
        public address: string
    ){ }
}

/* export class Hero extends Person {
    constructor( 
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) 
    {
        super(realName, 'New York');
    }

} */

    export class Hero{
        
        //public person: Person;

        constructor( 
            public alterEgo: string,
            public age: number,
            public realName: string,
            public person: Person,
        ) {

            //this.person = new Person(realName);

        }
    }

const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony Stark', tony);

console.log(ironman);