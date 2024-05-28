//Arrays
//elements can be different
const arr = [1,2,3,4,5];
console.log(arr);
//insert elements use `push`
arr.push(88);
console.log(arr);

//to remove use `pop`
arr.pop();
console.log(arr);

//interesting method `unshift` => it adds element in first of array which is not recommendable
arr.unshift(99);
console.log(arr);
//to remove it use
arr.shift();
console.log(arr);

//to remove first element of the array
arr.shift();
console.log(arr);
//use include to get wheher a  element is present or not
console.log(arr.includes(88));
//indexOf to get the index of the element 
console.log(arr.indexOf(4));
//if not present the indexOf method gives -1 as result 
console.log(arr.indexOf(88));

//The join() method in JavaScript is used to join all elements of an array into a single string and return that string. It concatenates the elements of the array together, separated by a specified separator string.
const newArr = arr.join();
console.log(newArr);
console.log(typeof(newArr));

let anotherArr = [2,34,4,56];
console.log(anotherArr);
anotherArr = arr.join();
console.log(anotherArr);

//slice and splice
let originalArr= ['9','8','7','6','5'];
console.log(originalArr);
//slice
console.log(originalArr.slice(1,3));
console.log(originalArr);

console.log(originalArr.splice(1,3));
console.log(originalArr);



// ********************* part 2 **************************************
let marvelArr= ['ironman','thor','hulk'];
console.log(marvelArr);
let dcArr = ['adam','flash','wonderwoman'];
console.log(dcArr);

//push which is recomendable so use concat and store the value 
// marvelArr.push(dcArr);
console.log(marvelArr);

const combo = marvelArr.concat(dcArr);
console.log(combo);

//spread(... varible_name) operaor is more preferable than concat operator man
const all_heros = [...marvelArr,...dcArr];
console.log(all_heros);

//for example you have suitation like this 
const array = [1,2,3,[13,3,5,[8,8,798,1]],23];
console.log(array);
//the result => [ 1, 2, 3, [ 13, 3, 5, [ 8, 8, 798, 1 ] ], 23 ] which is not looking good to make it flat use
//flat method
const flatArray = array.flat(Infinity);//(give the depth of to flat for our example we have 3 but we can give infinity which we take care whether how many were there!) 
console.log(flatArray);

//to whether a varible is array or not use this
console.log(Array.isArray("krishna"));
//to convert it into array use this
console.log(Array.from("krishna"));
        //important thamudu
//if it unbable to covert it returns empty array


//                  important
// it's confused that should i convert key into array or values into array  
console.log(Array.from({name:"vamsi"}));
let obj = {name:"krishna"};
let valuesObj = Array.from(Object.values(obj));
let keysObj = Array.from(Object.keys(obj));
console.log(keysObj);
console.log(valuesObj);

let a = 200;
let b= 400;
let c= 600;
console.log(Array.of(a,b,c,flatArray));
