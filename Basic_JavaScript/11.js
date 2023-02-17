//undefined,jab aap variable ko bano do ge but value assign nahi karo gaye to use bolenge undefined

let firstName;
console.log(typeof firstName);
firstName = "Praveen";
console.log(typeof firstName, firstName);
console.log(typeof firstName, firstName, firstName.length);
// we can print multiple instance in console.log()
// we do such thing with let and var but not with const --it shows error

//null
console.log(typeof null);  // ---> object data types not null

// it shows error or bug


// BigInt
    // it represents in 2 way :
    let myNumber = BigInt(12);
    let otherNumber = 123n;


// let myNumber = 123;
// console.log(myNumber);

// console.log(Number.MAX_SAFE_INTEGER);

console.log(myNumber + otherNumber);