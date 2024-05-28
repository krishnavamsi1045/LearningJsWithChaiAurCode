const score = 400;
console.log(score);

//it also give the object which all methods and properties
const balance = new Number( 100);
console.log(balance);

//one of property is toFixed 
//it is used extensively in ecomerece app for counting the total for precision

console.log(balance.toFixed(2));

console.log(score.toFixed(2));

//now precision

const preci = 187.2;
console.log(preci.toPrecision(3));

//generally if we have too many zeros in the number it makes too much ambigity

const hundreds = 1000000;
//it gives in american format
console.log(hundreds.toLocaleString());

//to get in indian format

console.log(hundreds.toLocaleString('en-IN'));

const name = "krishnavamsi";
console.log(name.toLocaleString());


//now some important math funtions

console.log(Math);
console.log(Math.max(1,2,74));
console.log(Math.min(1,2,34));
console.log(Math.round(5.6));
console.log(Math.ceil(5.9));
console.log(Math.floor(2.1));


//random
//random always gives values between  0 to 1 (included)
console.log(Math.random());

//to get a integer multiply with 10 and also add to 1 because we may get 0.05 then multiplying with 10 give 0.0 so to avoid this add 1
console.log((Math.random()*10)+1);

// ************************ important ***************************


//standard formual to get random values between your range
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max-min+1) )+ min);


