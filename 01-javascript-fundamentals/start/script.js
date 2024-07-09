/**********************************************************
 ** LECTURE 5: VARIABLES IN JAVASCRIPT*********************
 **********************************************************/
/*let username = 'john'; 
username = 'mark';
//console.log(username);

const PI = 3.141;

//var name = 'john smith';

// let name = 'merry', 
//     age = 28,
//     gender = 'male';

let country = 'usa';
let coun = 'uk';
country = coun;
console.log(country);
*/




/**********************************************************
 ** LECTURE 6: DATATYPES IN JAVASCRIPT*********************
 **********************************************************/
//1. STRING DATATYPE
/*let str1 = 'This is a string value.';
let str2 = `Hello, world! ${str1}`;
let char = 'a';

console.log(str2);

//2. NUMBER DATATYPE - infinity, -infinity, NaN
let age = 28;
let interestRate = 10.5;
let i = 10/0;

console.log(-1/0);
console.log('Hello'/10);

//3. BOOLEAN DATATYPE
let isEligible = 10 > 15;
console.log(isEligible);

//4. NULL DATATYPE
let gender = null;

//5. UNDEFINED DATATYPE
let firstname;
console.log(firstname);
*/




/**********************************************************
 ** LECTURE 7: DYNAMIC TYPING & TYPE COERCION**************
 **********************************************************/
/*let myVar = 100;
console.log(typeof myVar);

myVar = 'Hello';
console.log(typeof myVar);

let firstname = 'John'
let age = 28;
let isMarried = true;

alert(firstname + ' is a ' + age + ' yearls old male: Is he married? ' + isMarried);
*/


/**********************************************************
 ** LECTURE 8: JS STATEMENT & EXPRESSION*******************
 **********************************************************/
//Single line comment - //
//Multiple Line Comments - /*...*/

//This code is going to greet user
// console.log('Hello user');

/*console.log('Hello, world!')
let x = 30 + 40;
let y = `The result of 30 + 40 is ${x}`;

console.log( 10 
    + 20
    + 30);
*/



/**********************************************************
 ** LECTURE 9: JS OPERATOR & OPERANDS**********************
 **********************************************************/
/*let x = 5;
x = -x;
console.log(x);

let a = 20 - 5;

let b = 2 * 20;
*/



/**********************************************************
 ** LECTURE 10: JS ARITHMETIC OPERANDS**********************
 **********************************************************/
/*let x = 9;
let y = 1/2;

console.log(10 + 2 / 3 * 4 - 10);

console.log('10' + 5); //'10' + '5' = 105
console.log('Hello' + 'World'); //HelloWorld
console.log(true + 'Hello'); //'Hello' + 'true'

console.log(2 - 'Hello'); // 2 * NaN = NaN
console.log(2 - '23'); // 2 * 23

console.log( 2 + false); //true = 1, false = 0

console.log(2 + 3 + 'Hello'); //5 + 'Hello' = '5Hello'
console.log('Hello' + 2 + 3); 
//'Hello' + '2' = 'Hello2' + '3' = 'Hello23'
*/



/**********************************************************
 ** LECTURE 11: JS ASSIGNMENT OPERANDS*********************
 **********************************************************/
/*let x = 10;

let y;
console.log(y = 20);

let z = 100 - (x = y + 10);

let a, b , c , d;
a = b = c = d = 100;

let sum = 10;
//sum = sum + 15;
sum += 15 // sum = sum + 15;
//sum = sum - 5;
sum -= 5 //sum = sum - 5;

//sum = sum * 2;
sum *= 2 //sum = sum * 2;
*/


/**********************************************************
 ** LECTURE 12: INCREMENT & DECREMENT OPERATOR*************
 **********************************************************/
/*let counter = 10;

//PRE - value is incremented / decremented & then new value returned
//POST - value is returned and then its value is 
//incremented / decremented

//counte++ = POST INCREMENT OPERATOR
//++counter = PRE INCREMENT OPERATOR
//counter-- = POST DECREMENT OPERATOR
//--counter = PRE DECREMENT OPERATOR
console.log(counter--);
console.log(counter);

let z = (1 + 2, 3 + 4);
console.log(z);

console.log(typeof counter);
console.log(typeof 'Hello');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
*/


/**********************************************************
 ** LECTURE 13: COMPARISION OPERATORS IN JS****************
 **********************************************************/
// let a = 40;
// let b = 30;

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// let x = a >= b;
// console.log(x);

// console.log('2' > '01') //2 > 1 = true
// console.log('100' < 50) //100 < 50 = false
// console.log(true > 5) // 1 > 5 = false

// console.log(20 === 30);
// console.log(20 !== 10);
// console.log('' === false);

//Using comparison operator on two string values

// console.log('A' < 'Z'); // 65 < 90
// console.log('a' < 'A'); // 97 < 65
// console.log('Grass' > 'Green'); // 97 > 101
// console.log('Too' > 'Tool') //false

//comparing null with undefined
// console.log(null === undefined);
// console.log(null == undefined);

// console.log(null <= undefined); // 0 >= NaN

// console.log(null == 0);
// console.log(null >= 0); //true






/**********************************************************
 ** LECTURE 14: LOGICAL OPERATORS IN JS****************
 **********************************************************/
/*let x = true;
let y = false;
let z = true;

//OR - ||
// console.log(y || x);
// console.log(false || true || false);
// let a = 10 || 0;//10
// console.log(a);

// let b = '' || 0 || 5 || 10;
// console.log(b);

// let c = false || 0 || undefined || '' || null;
// console.log(c);

//AND - &&
// console.log(false && true) // false;
// console.log(true && false)
// console.log(true && true)

// let a = 10 && 0;
// console.log(a);

// let b = 'hello' && 5 && undefined && 100;
// console.log(b);

// let c = 'Hello' && 100 && true && 'Hello, World!';
// console.log(c);

//NOT - !
let a = true;
console.log(!a)

let b = 100;
console.log(!b);

let c = 100;
console.log(!!c);
*/






/**********************************************************
 ** LECTURE 16: OPERATOR PRECEDENCE & ASSOCIATIVITY********
 **********************************************************/
/*let result = (10 + 3 - 5) * 4 / 2; //8 * 4 / 2 = 16
console.log(result);

let a = 10;
let b = 12;

let expression = 10 + 23 || 20 + ++a + b-- * 2 && null;
                //10 + 23 || 20 + ++a + 12 * 2 && null;
                //10 + 23 || 20 + 11 + 12 * 2 && null;
                //10 + 23 || 20 + 11 + 24 && null 
                //33 || 55 && null;
                //33 || null = 33
console.log(expression);*/




/**********************************************************
 ** LECTURE 16: OMODAL WINDOWS IN JAVASCRIPT***************
 **********************************************************/
//alert('Welcome to JavaSCript course!');

// let age = prompt('Please enter your age', 18);
// console.log(age);

// let isDelete = confirm('Do you really want to delete this item?');
// console.log(isDelete);



/**********************************************************
 ** LECTURE 17: CONDITIONAL STATEMENT: IF******************
 **********************************************************/
// let age = prompt('Please enter your age.') //'0'

// if(age >= 18){
//     console.log('You are eligible for voting!');
// }else{
//     console.log('You are not eligible for voting!');
// }

// console.log('Thank you for voting');

/*let marks = prompt('Please enter your marks out of 100');

if(marks >= 90){
    console.log('Excellent! You got an A.')
}else if(marks >= 80 && marks < 90){
    console.log('Great job! You got a B.');
}else if(marks >= 70 && marks < 80){
    console.log('Vary Good! You got a C.');
} else {
    console.log('You need to study more. You got a D or below.')
}
*/




/**********************************************************
 ** LECTURE 18: THE CONDITIONAL OPERATOR*******************
 **********************************************************/
/*let age = prompt('Please enter your age.') //'0'

// if(age >= 18){
//     console.log('You are eligible for voting!');
// }else{
//     console.log('You are not eligible for voting!');
// }

//condition ? staement1 : statement2 - ?: - Ternary Operator
//age >= 18 ? console.log('You are eligible for voting!') : console.log('You are not eligible for voting!');
let msg = age >= 18 ? 'You are eligible for voting' : 'You are not eligible for voting';
console.log(msg);*/




/**********************************************************
 ** LECTURE 20: CONDITIONAL STATEMEMT: SWITCH**************
 **********************************************************/
/*let day = prompt('Please enter weekday number'); //day = '4'

// if(day == 1){
//     console.log('Today is Moday.')
// }else if(day == 2){
//     console.log('Today is Tuesday.')
// }else if(day == 3){
//     console.log('Today is Wednesday.')
// } else if(day == 4) {
//     console.log('Today is Thursday.')
// } else if(day == 5){
//     console.log('Today is Friday.')
// } else {
//     console.log('Today is Weekend.')
// }

switch(+day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Today is a Weekday.');
        break;
    case 6:
    case 0:
        console.log('Today is a Weekend.');
        break
    default:
        console.log('Weekday number is not correct.');
}*/




/**********************************************************
 ** LECTURE 21: FUNCTIONS IN JAVASCRIPT********************
 **********************************************************/

//DEFINING THE FUNCTION
/*function greetings(name, timeOfDay){
    const msg = `Good ${timeOfDay} ${name}. Welcome back!`;
    console.log(msg);
}

//CALLING FUNCTION
let x = greetings('john', 'morning');
console.log(x);

greetings('merry', 'evening');
greetings('mark', 'afternoon');

function addition(num1, num2){
    let sum = num1 + num2;
    return sum;
}

const add = addition(20, 30);
console.log(add);

function checkEligibility(age){
    if(age >= 18){
        return true
    }else{
        return false;
    }
}

console.log(checkEligibility(20))
console.log(checkEligibility(15))

function allowVoting(age){
    if(!checkEligibility(age)){
        return;
    }
    console.log('Please cast your vote');
}

console.log(allowVoting(15));
*/



/**********************************************************
 ** LECTURE 22: FUNCTION EXPRESSION IN JAVASCRIPT**********
 **********************************************************/

//FUNCTION DECLARATION
// function greetings1(){
//     console.log('Good morning user. Welcome back!');
// }

//FUNCTION EXPRESSION
/*const greetings2 = function(name, timeOfDay){
    const msg = `Good ${timeOfDay} ${name}. Welcome back!`
    console.log(msg);
};

const addition = function(num1, num2){
    return num1 + num2;
}

const x = greetings2;

console.log(x('john', 'morning'));
console.log(addition(10, 25));
*/



/**********************************************************
 ** LECTURE 23: CALLBACK & ANONYMOUS FUNCTIONS*************
 **********************************************************/
// function first(){
//     setTimeout(function(){
//         console.log('First function called!');
//     }, 1000)    
// }

// function second(){
//     console.log('Second function called!');
// }

// first();
// second();

/*function doHomeWork(subject, callback){
    console.log(`Started working on my ${subject} homework`);
    callback();
}

doHomeWork('maths', function(){ 
    console.log('Finished my homework'); 
});*/



/**********************************************************
 ** LECTURE 24: LOCAL & GLOBAL SCOPE***********************
 **********************************************************/
/*let user = 'john';
let x = 11;



function greetings(name, timeOfDay){
    const msg = `Good ${timeOfDay} ${name}. Welcome back!`;
    console.log(msg);
    console.log(user);

    function sayHello(){
        console.log('Hello, World!');
    }
    sayHello();
}

sayHello();

console.log(user);

greetings('mark', 'evening');
*/



/**********************************************************
 ** LECTURE 25: OBJECT & PROPERTIES************************
 **********************************************************/

//Object Literal Syntax
/*let user = {
    name: 'john',
    age: 28,
    'full name': 'John Smith'
}; 
// {} = new Object()

console.log(user.name);
console.log(user['age']);
console.log(user['full name']);

user.gender = 'male';
user.age = 30;
user['gender'] = 'female';

delete user['full name']
delete user.age

console.log(user);
*/



/**********************************************************
 ** LECTURE 26: OBJECT & METHODS***************************
 **********************************************************/

/*let user = {
    name: 'john',
    yearOfBirth: 1989,
    isMarried: true,
    calculateAge: function(){
        return 2024 - this.yearOfBirth
    }
};

let name = user.name;
let age = user.calculateAge();
console.log(age);
*/


/**********************************************************
 ** LECTURE 26: ARRAYS IN JAVASCRIPT***********************
 **********************************************************/
/*let student = ['john', 28, 'male', 123456, true]; //new Array()
let value = student[2] //accessing array element
student[3] = 456789; //manipulating array element

console.log(student);
console.log(value);

let user = new Array('admin', 'READWRITE', 'IT');

console.log(user[1]);
user[1] = 'READONLY';

console.log(user);

//Array of numbers
let numbers = new Array(10, 20);
console.log(numbers);*/




/**********************************************************
 ** LECTURE 26: ARRAYS METHODS & PROPERTIES****************
 **********************************************************/

//length - return total elements in the array

// let arr = [];
// arr[50] = 20;
// console.log(arr[50]);
// console.log(arr.length);

//Interview question about length property of array
// let numbers = [1, 2, 3, 4, 5];
// numbers.length = 0;
// console.log(numbers);

// numbers.length = 2;
// console.log(numbers);

// numbers.length = 5;
// console.log(numbers);

//let names = ['john', 'mark', 'merry', 'steve'];

//push - it insert an element at the end of the array
//names.push('ravi');

//pop - it is used to remove an element from the end of the array and return it
//let removedEle = names.pop();

//unshift - it insert an element at the start of the array
//names.unshift('jonas')

//shift - it is used to remove an element from the start of the array and return it
//let removedEle = names.shift();

//names.unshift('ravi', 'mukesh', 'sarah');
//console.log(names);
//console.log(removedEle);

//indexOf - it returns the index of an element in the array else -1
//let index = names.indexOf('ravi');
//console.log(index);



/**********************************************************
 ** LECTURE 29: JAVASCRIPT LOOPS: WHILE********************
 **********************************************************/

 //STEP 1: Create a variable and initialize it.
 //STEP 2: Provide a condition for while loop.
 //STEP 3: Increment / Decrement variable value
 /*let i = 10;
 const user = ['john', 'steve', 'merry', 'mark'];

//  while(i >= 1){
//     console.log("Value of i is: " + i--);
//  }

let index = 0;

while(index < user.length){
    console.log(user[index]);
    index++;
}*/
 



/**********************************************************
 ** LECTURE 30: JAVASCRIPT LOOPS: DO-WHILE*****************
 **********************************************************/
/*let i = 1;
const user = ['john', 'steve', 'merry', 'mark'];

//STEP 1: Create a variable and initialize it.
//STEP 2: Increment / Decrement variable value
//STEP 3: Provide a condition for while loop.
 

// do{
//     console.log("Value of i is: " + i++);
// }while(i <= 10)
let index = 0;
do{
    console.log(user[index]);
    index++;
}while(index < user.length)
*/



/**********************************************************
 ** LECTURE 31: JAVASCRIPT LOOPS: DO-WHILE*****************
 **********************************************************/

/*let i = 1; //initialization
const user = ['john', 'steve', 'merry', 'mark'];

// while(i <= 10){ //condition
    
//     i++; //increment / decrement
// }

// for(; i <= 10; ){
//     console.log("Value of i is: " + i);
//     i++;
// }

for(let i = 0; i < user.length; i++){
    console.log(user[i]);
}*/


/**********************************************************
 ** LECTURE 33: VARIABLE DECLARATION USING VAR*************
 **********************************************************/
// var x = 1000;
// x = 100;

// let y = 1000;
// y = 200;

//1. SCOPE - var has function scope & let has block scope
// function greetings(){
//     var x = 10;

//     if(x < 100){
//         var y = 100;
//         let z = 200;
//     }
//     console.log(y);
//     console.log(z);
// }

// greetings();

// var x = 100;
// var x = 'Hello';
// console.log(x);


// let z = 20;
// var z = 10;

//console.log(x);
//const x = 100;



/**********************************************************
 ** LECTURE 33: BREAK & CONTINUE STATEMENT*****************
 **********************************************************/
// let x = 1;

// while(x <= 10){
//     if(x === 5){
//         break;
//     }
//     console.log('Value of x is: ' + x);
//     x++;
// }

// for(let i = 0; i < 10; i++){
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// }





/**********************************************************
 ** LECTURE 33: *****************
 **********************************************************/
'use strict'

console.log('Learning use strict')


let user = 'john';

let isEligible = false;
let isFullAge = true;

if(isFullAge){
    isEligible = true;
}
console.log(isEligible);

function greet(x, y){
    console.log('This is greet function!')
}

let interface = 100;