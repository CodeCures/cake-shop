/*

const student = "Beulah"

const search = 'B'

// console.log(student.toLowerCase().includes(search.toLowerCase()));

const index = student.indexOf('lah');
console.log(index);

console.log(student.slice(1, 4));
console.log(student.substring(1, 4));
console.log(student.substr(1, 3));
console.log(student.replace('eul', 'our'));
console.log(student.replace('eul', 'idi'));
console.log(student.replace('eul', 'age'));

console.log("a,b,c".split(","))

const message = 'Welcome to class'

const linesString = "29038490290;29480923023;3982849028039";

const phoneNumbers = linesString.split(';')

console.log(phoneNumbers);

*/

//

const num1 = 20
const num2 = 30;

const price = 232.28923982;



// console.log(parseInt('011', 2));

console.log(isNaN('20s'));

console.log(price.toFixed(2));
console.log(price.toPrecision(2));

console.log((20).toString(16));

// console.log(Math.(...[num1, num2, 15, 40]));

const scores = [20, 30, 40, 50]

// for (let i = 0; i < scores.length; i++) {
//     const value = scores[i];

//     console.log({ index: i, value });
// }

// for (const [index, score] of Object.entries(scores)) {
//     console.log({ index, score });
// }

// const logIndexedScores = (score, index) => console.log({ index, score })

// scores.forEach(logIndexedScores);


// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [3, 5, 6, 4, 1, 2];

// const deleted = arr.splice(1, -1, 6);

// const sliced = arr.slice(2, -2)

// const sum = arr.reduce((currentSum, currentValue) => {
//     return currentSum += currentValue
// }, 0)

// arr.sort((a, b) => b - a)
// arr.reverse()

// console.log(arr);

// const messedUp = [1, [2, [3]]]

// function printMess(arr) {
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             printMess(item)
//         } else {
//             console.log(item)
//         }
//     }
// }

// printMess(messedUp)

// const flattened = messedUp.flat(2)

// const multiple = arr.map(i => i)

// console.log(multiple);

// function mappedArray(arr, cb) {
//     const output = []
//     for (let i = 0; i < arr.length; i++) {
//         output.push(cb(arr[i], i))
//     }

//     return output
// }

// const mapped = mappedArray(arr, (item, index) => ({ index, value: item * 2 }))

// console.log(mapped);

const numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]

const exists = numbers.includes(23);


const found = numbers.find(n => n === 23);

// console.log({ found });

const students = [
    {
        id: 1,
        name: "Courage",
        gender: "Male",
        age: 25
    },
    {
        id: 2,
        name: "Beulah",
        gender: "Female",
        age: 21
    },
    {
        id: 3,
        name: "Havillah",
        gender: "Female",
        age: 16
    },
    {
        id: 4,
        name: "Emma",
        gender: "Male",
        age: 10
    },
    {
        id: 5,
        name: "Elysa",
        gender: "Female",
        age: 9
    },
    {
        id: 6,
        name: "Bella",
        gender: "Female",
        age: 20
    },
    {
        id: 7,
        name: "Rose",
        gender: "Female",
        age: 25
    },
]

// const student = students.find(s => s.id === 3);
// console.log({ student });

// const femaleStudents = students.filter(s => s.gender === 'Female');

// console.log({ femaleStudents });


// const indexOfBeulah = students.findIndex(s => s.name === 'Beulah')
// console.log({ indexOfBeulah });
let searchParam = 'ly'
const search = students.filter(s => s.name.toLowerCase().includes(searchParam.toLowerCase()))

console.log({ search });
// function findValue(arr, cb) {
//     for (const item of arr) {
//         if (cb(item)) return item
//     }

//     return -1
// }


// const found = findValue(numbers, n => n === 23)

// console.log({ found });


// OBJECT

// const person = {
//     name: "Courageous love",
//     age: 16,
//     gender: "Male",
//     complexion: "fair"
// }


// for (const key in person) {
//     console.log(key, person[key]);
// }

// const keys = Object.keys(person)
// console.log({ keys });

// const values = Object.values(person)
// console.log({ values });

// const entries = Object.entries(person)
// console.log({ entries });

// const hasKey = Object.hasOwnProperty.call(person, 'age');
// console.log({ hasKey });

// OOP

class Person {
    #_name
    #_age
    constructor(name, age) {
        this.#_name = name
        this.#_age = age
    }

    #getPerson() {
        return { name: this.#_name, age: this.#_age }
    }

    setName(name) {
        this.#_name = name
    }

    setAge(age) {
        this.#_age = age
    }

    print() {
        return this.#getPerson()
    }
}

const user = new Person('Courage', 32)

console.log(user.print());
