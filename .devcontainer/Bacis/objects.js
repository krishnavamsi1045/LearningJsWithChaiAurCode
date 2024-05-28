// to declare objects there are two types 
// 1.literals
// 2.through constructor (when we create with constructor then single instance so singleton comes into picture)
//but if you followed literal then no need to bother about single ton-hitesh(chai aur code  )


//single ton object declartion
//Object.create; (createing object throught constructor(singleton))

// ************************* object literals *******************************q

const jsUser = {
    name:"krish",
    lastname:"vamsi",
    age:24,
    isLoggedIn :false
}
//mostly good pracitce
console.log(jsUser.name);
//use it if required 
console.log(jsUser["age"]);

//interviewer will ask declare symbol and then print it then 
// ********************************************* this is the important most asked in the interviews
const sym =Symbol("krishna");
console.log(typeof sym);

const jsUser2 = {
    name:"krish",
    lastname:"vamsi",
    age:24,
    isLoggedIn :false,
    [sym] :sym,
    [sym]:"vamsi"
}

console.log(typeof(jsUser2[sym]));
console.log(jsUser2[sym])

//we can freeze the object value so that nobody can change it 

// Object.freeze(jsUser2);
console.log(jsUser2);

jsUser2.greetings = ()=>{
    console.log("hello man how are you are you good?");
}
console.log(jsUser2);
console.log(jsUser2.greetings());
//if your object is freze you can't insert or delete man(i didn't commented freze adnd try to run above line it didn't worked)

// if you don't give parenthesisi then it will give name doesn't run the code 
console.log(jsUser2.greetings);
console.log(jsUser2[`greetings`]);

jsUser2.greetUser = ()=>{
    console.log(`hello mr${this.name} how are you man`);
}
console.log(jsUser2);

jsUser2.greetUser = function(){
    console.log(`hello mr.${this.name

    } how are you man`);
}
console.log(jsUser2.greetUser());

//creating object through constructor
const obj = new Object();
console.log(obj);
obj.id=1;
obj.name='krishna';
obj.name='vamsi'; //updated value is inserted in object
console.log(obj);

const obj3  = {
    id:1,
    name:{
        fistname:'krishna',
        lastname:'vamsi',
        fullname:'krishnavamsi'
    }
}
console.log(obj3);
console.log(obj3.name?.fistname);//the questin markis for safety we will discuss it later

//to merge two object use Object.assign
const ob1 = {1:'vamsi'};
const ob2 = {2:'krishna'};
const ob3 = Object.assign({},ob1,ob2); //production grade
//passing empty obj is a good practise so that we are sure that object only comes
console.log(ob3);


//another best method is using spread operator
const ob4 = {...ob1,...ob2};
console.log(ob4);

//in general we get data from database which looks like
const data = [
    {
        id:1,
        name:'krishna'
    }
    ,{
        id:2,
        name:'vamsi'
    }
];
console.log(data[0]);
console.log(data[1]['id']);

//very very important used in loops \
console.log('see from here')
console.log(`key:`+Object.keys(jsUser2));
console.log(`enteries:`+Object.entries(jsUser2));
console.log(`values`+Object.values(jsUser2));

//to check whether a property is present or not

console.log(jsUser2.hasOwnProperty(`age`));
console.log(jsUser2.hasOwnProperty("areYouThere"));

const course = {
    id:88,
    tutor:'krishnvamsi',
    course:'dsa'
}


//destructing which is used in
const {tutor} = course; //it's a sugar syntax
console.log(course.tutor); //it's a sugar syntax (your wish)
console.log(tutor);

//you can even do this
const{tutor:t} = course;
console.log(t);