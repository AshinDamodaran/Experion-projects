// console.log('hello world');
// console.log('hello',  'world');
// console.clear();

// i=5;
// console.log(i);
// var i = 5;
// console.log(i);


// var firstName = 'John';
// var lastName = 'Doe';
// console.log(firstName, lastName);


// var firstName = 'John';
// console.log(typeof firstName);



// var data = 'This is a string';
// console.log(data[0]);
// console.log(data.length);
// console.log(data[data.length - 1]);


// var data = 'This is a string';
// var res = data.toLocaleUpperCase();
// console.log(res);


// var data = 'This is a string';
// var res = data.toLocaleUpperCase();
// // data = data.toupperCase();
// console.log(res);


// var data = 'This is a string';
// var res = data.toLowerCase();
// console.log(res);


// var message = '  JS for web   ';
// console.log(message.trim());

// var message = '  JS for web   ';
// console.log(message.trimEnd());



// var message = 'JS for web';
// console.log(message.split(' '));


// var message = 'JS for web';
// var res = message.replace(' ','_');
// console.log(res);



// var message = 'JS for web';
// var res = message.replaceAll(' ','_');
// console.log(res);



// var message = 'JS for web';
// var copy = message.trim();
// var res = message.replace(' ','_');
// console.log(res);




// var message = '  JS for web  ';
// var res = message
// .toUpperCase()
// .trim()
// .replaceAll(' ' ,'_');
// console.log(res);





// for (var i = 0; i < 5; i++){
//     console.log("Inside for loop",i);
// }
// console.log("Afterfor loop",i);




// for (let i = 0; i < 5; i++){
//     console.log("Inside for loop",i);
// }
// console.log("Afterfor loop",i);




// const firstName = 'John';
// const lastName = 'Doe';

// console.log(firstName, lastName);


// let data = null;
// console.log(data);

// let data = undefined;
// console.log(data);

// const language = 'JS';
// console.log(language);


// const numOne = 4;
// const numTwo = 5;
// const res = num1 + num2;


// console.log(res);

// const firstName = "John";
// const lastName = "Doe";
// console.log(firstName, lastName);









// const n1 = 4;
// const n2 = 5;
// //4 + 5 = 9
// const res1 = n1 + ' + ' + n2 + ' = ' + (n1 + n2);
// const res2 = `${n1} + ${n2} = ${n1 + n2}`;

// console.log(res1);
// console.log(res2);


// var firstName = "java";
// var lastName = "script";


// var res1 = firstName + " " + lastName;

// var res2 = firstName.concat('', lastName);
// var res3 = `${firstName} ${lastName}`;


// console.log(res1);
// console.log(res2);
// console.log(res3);






// let numbers = [1, 2, 3];
// console.log(typeof numbers);


// let numbers = [1, 2, 3];
// console.log(numbers [0]);


// let numbers = [1, 2, 3, 'Four'];
// console.log(typeof numbers);



// 

// let numbers = [1, 2, 3, 'Four']
// // numbers.push(5);
// // console.log(numbers);


// // 

// let firstArray = [1, 2, 3];
// let secondArray = [4, 5, 6, 7];


// firstArray.push(...secondArray);
// let thirdArray = firstArray.concat(secondArray);
// console.log(thirdArray);



// function greet(){
//     console.log("Hello World");

// }

// greet();

// greet();

// function greet(){
// //     console.log("Hello World");

// // }


// // function add(x, y){
// //     console.log(x + y);
// // }

// // add(1, 2);



// function add(x, y){
//     return x + y;
// }

// const res = add(1, 2);
// console.log(res);



// function converCasing(value){
//     return value.toUpperCase();

// }

// const res = converCasing('Hello');
// console.log(res.toUpperCase());


// function getFirstChar1(value) {
//     return value[0];
// }
// const getFirstChar2 = function (value) {
//     return value[0];

// };

// const getFirstChar3 = (value) => {
//     return value[0];

// };
// console.log(getFirstChar1('Hello'));
// console.log(getFirstChar2('Hello'));
// console.log(getFirstChar3('Hello'));



// const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const res = numbers.filter(value => value % 2 == 1);
// console.log(res);

// const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.fill(10);
// console.log(numbers);

// const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// if(numbers.includes(5)){
//     console.log('Array contains five');
// }


// const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.toString());
// console.log(numbers.join('->'));


// const language =  ['c', 'c++', 'java', 'python'];
// language.forEach(lang => {
//     console.log(lang);
// });

// const language =  ['c', 'c++', 'java', 'python'];
// language.forEach((iteam, index) => {
//     console.log(index, iteam);
// });



// const person = {
//     name: 'john Doe',
//     age: 20
// };
// console.log(person);






// const person = {
//     name: 'john Doe',
//     age: 20
// };
// console.log(person.name);




// const person = {
//     name: 'john Doe',
//     age: 20
// };

// person.name = 'Name Name';
// console.log(person.name);


// 

// const person = {
//     name: 'john Doe',
//     age: 20,
//     email: null
// };

// console.log(person.name);
// console.log(person['name');


// const person = {
//     name: 'john Doe',
//     age: 20,
//    experience:[
//     {
//         company: 'Company ABC',
//         year: 2
//     },
//     {
//         company: 'company XYZ',
//         years: 3
//     }
//    ]
// };
// console.log(person.experience[0].company);



// const person = {
//     name: 'john Doe',
//     age: 20,
//    experience:[
//     {
//         company: 'Company ABC',
//         year: 2
//     },
//     {
//         company: 'company XYZ',
//         years: 3
//     }
//    ]
// };
// person.experience.forEach(exp=>console.log(exp.company));


// const rows = 3;
// const cols = 3;
// const m = new Array(rows);
// const m1 = [
//     [1, 2],
//     [3, 4]
// ];
// console.log(m1);


// setTimeout(() => {
//     console.log('code worked!');
    
// }, 5000);


// setInterval(() => {
//     console.log('code worked!');
    
// }, 5000);


// setInterval(() => {
//     console.log('code worked!');
    
// }, 5000);
// console.log('COMPLETED');



// const student =  {
//     name: 'student 1',
//     mark1: 40,
//     mark2: 50,
//     total: function(){
//         console.log(this.mark1 + this.mark2);
//     }
// };
//  student.total();


// const student =  {
//     name: 'student 1',
//     mark1: 40,
//     mark2: 50,
//     total: function(){
//         const extramark = 5;
//         console.log(this.mark1 + this.mark2 + extramark);
//     }
// };
//  student.total();


// const student = {
//     name: 'student 1',
//     mark1: 40,
//     mark2: 50


// };

// const copy = Object.assign({age: 15}, student);
// copy.name = 'New Name';
// console.log(student);
// console.log(copy);



// const student = {
//     name: 'student 1',
    


// };

// const marks = {
    
//     mark1: 40,
//     mark2: 50
// };

// const copy = Object.assign({}, student, marks);

// console.log(copy);


// const student = {
//     fullName: 'student 1',

//     mark1: 40,
//     mark2: 50

// };

// const {fullName, mark1} = student;
// console.log(fullName);



// const student = {
//     fullName: 'student 1',

//     mark1: 40,
//     mark2: 50

// };

// const keys = Object.keys(student);
// keys.forEach(key=>{
//     console.log(student[key]);
// });


const student = {
    fullName: 'student 1',

    mark1: 40,
    mark2: 50

};

const values = Object.values(student);
values.forEach(value => {
    console.log(value);
});