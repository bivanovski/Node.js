console.log("Zdravo Svetlana");

const svetlana = 12;

const niza = [1, 2, false, true, "sjjssj", svetlana];

console.log(niza[5]);

const someObject = {

    kakvoSakamIme: svetlana,
};

console.log(someObject.kakvoSakamIme);

const randomStudent = {
    name: "Kojcin",
    hometown: "od Kochista",
    nickname: "so golemite oci"
}

const allStudents = [randomStudent];

function oldFunction(argument1, argument2) {
    return argument1 + argument2;
};

console.log(oldFunction(1, 1))

const newFunction = (argumentone, argumenttwo) => {
    return argumentone + argumenttwo;
};

console.log(newFunction(1, 4));

niza.find((element) => element === false)

const arrayOfObjects = [{
        name: "Petko",
        hasCar: true,
    },
    {
        name: "Martin",
        hasCar: true,
    },
    {
        name: "Stanko",
        hasCar: false,
    },
    {
        name: "Pero",
        hasCar: true,
    },
    {
        name: "Pko",
        hasCar: true,
    },
    {
        name: "Po",
        hasCar: false,
    }
];

console.log(arrayOfObjects.find((person) => person.name === "Pero"));

console.log(arrayOfObjects.filter((element) => element.hasCar === false));