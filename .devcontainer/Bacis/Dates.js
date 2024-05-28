//there are proposal for date function which is temporal to acces it like math fuction but not yet conformed so until we have follow it!

//date is a object


let date = new Date();
//important
console.log(typeof(date));
console.log(date);

console.log("toString() :"+date.toString());
console.log("toLocaleString() :"+date.toLocaleString());
console.log("toLocaleString('en-IN')"+date.toLocaleString('en-IN'));
console.log("toJSON:"+date.toJSON());
// in javascript months starts from 0 => so january is 0 (if onyl array format like(2024,0,24)) and if day is 0 then it shows
//for evens and odds 31
let newDate = new Date(2001,7,0);
console.log(newDate.toDateString());

//and if the format is yyyy-mm-dd then use months starts from 1
let anotherDate = new Date("2000-05-25");
console.log(anotherDate.toLocaleString());

//in india we use mm-dd-yyyy format
let normalDate = new Date("05-22-2002");
console.log(normalDate.toLocaleString());

//date.now fuction
//it gives no of milli secons elaspsed since january 1 1970
let elapsedDate  = Date.now();
console.log(elapsedDate);

// in bigcompanies like airlines or quiezes to caluculate the time stamp we have to use this

console.log(normalDate.getTime());

//use this to caluclate
console.log((elapsedDate - normalDate.getTime()));

console.log(Date.now()/1000); //it gives decimal so use floor or round 
console.log(Math.round(Date.now()/1000));

//some other functions (sunday=>0)
//0: Sunday
//1: Monday
//2: Tuesday
//3: Wednesday
//4: Thursday
//5: Friday
//6: Saturday
let day = new Date();
console.log(day.getDay());

// starts from 0 month (january=>0)
let month = new Date();
console.log(month.getMonth());

// to make user frendly add + 1 so that end user doesn't get confused

console.log(month.getMonth() + 1);

//for more customizations
let lDate = new Date();

console.log(lDate.toLocaleString('default',{
    weekday:'long',
    month:'long'


}));
