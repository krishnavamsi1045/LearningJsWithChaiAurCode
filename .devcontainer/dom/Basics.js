//even thought we use class but dom gives you classname(try it)
// document.getElementById('title').className
// 'title'

//we have getAttribute and also setAttrubute

//getAttribute =>
    //
// <!-- document.getElementById('title').getAttribute
// ƒ getAttribute() { [native code] }
// document.getElementById('title').getAttribute('class')
// 'title' -->

//setAttribute=>
    //using setAttribure we also overides the previous property so be care full it takes two arguments
//******************** important */
// document.getElementById('title').setAttribute('class','heading testing');


//textContent,innerText,innerHTML

// <h2>this is example <span style=`display:none`;> hey i am span</span></h2>

//textContent=>it will show all the textContent including span which is hidden
//innerText =>it will only show the text which is not hidden
//innerHTML =>it will give all the html code inside the tag


// ************************************ important *******************************


// to select input based on the type
// use document.querySelector('input[type="password"]');

//querySelector=>always gives first of it's kind

//querySelectorAll => will give nodeList to and  to access the elements in them use indexing man (NodeList has Foreach loop)

//ClassName =>it will give HTML collection (HTML Collection doesn't have foreach loop )
