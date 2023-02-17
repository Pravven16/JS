// trim
/*
// method 1
let firstName ="   Praveen  ";
console.log(firstName.length);
firstName.trim(); //"Praveen"
// string are immutable, it store value in new string
// means it can't change the value of old string
// rather it will create new string to store changes in old data

// there are two ways to store data; either in existing variable or in a new variable
newString =firstName.trim();
console.log(newString);
console.log(newString.length);  */



/*method 2
let firstName="    harshit    ";

console.log(firstName.length);
firstName = firstName.trim(); //"harshit"
console.log(firstName);
console.log(firstName.length); */

//toUpperCase
//toLowerCase

let firstName ="Praveen";
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();

//slice

    // start index
    // end index

// let newString = firstName.slice(0,4); //Prav
let newString = firstName.slice(1); //it start with index 1 and go upto last
console.log(newString);

   
