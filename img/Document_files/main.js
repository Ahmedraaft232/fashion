// window.alert("hello from avaya"); (an alert should be shown when you open the page)

// document.write(<h2>Hello page</h2>); (to add an element to the page but it's not using that way)

// console.log("hello from js file"); (to just print in console)

// console.error("hello avaya from JS file"); to print the output as an error in console

// console.table(["Ahmed", "Raaft", "gaber"]);

// console.log("%cHello from file js " , "color:red; font-size:40px"  );

// %c directive it can be used before the text which you want to give it a style
// Console is a property of Web Api (Application Programming Interface.) and javasript is taken that from WEB API

// ECMA 6 , ES6 المعايير

// //////////////////////////////////////////////////////////////////

// window.alert("hello from JS file");
// document.write("<h2>For test</h2>");
// console.log("hello from our main file");
// console.table(["hello", "ahmed", "table"]);
// console.error("clear the error");
// console.log("%cAhmed%cRaaft" , "color:blue; font-size:20px ", "color:red; font-size:20px");

// how to print an element inside the web page itself

// document.write("<h1>Free</h1>"); 
// document.querySelector("h1").style.color = "red";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.fontWeight = "bold";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "Arial";

// console.log("%cerror %c of %cerror", "color:red; font-size: 40px;", "color:green; font-size:40px; font-weight:bold;" , "color:white; font-size:40px; background-color:blue;  "); 

// console grouping 


// console.log("Hello world!");
// console.group();
// console.log("Hello again, this time inside a group!");
// console.groupEnd();


// console.log("and we are back.");
// console.group(); 
// console.log("see the msg");
// console.groupEnd();

// // ending the console grouping 

// // table example 

// console.table(["Ahmed", "Raaft", "Gaber"]);
// console.table(["hello", "ahmed", "table"]);

// ending of requested table . 

//////////////////////////////////  type of data  //////////////////////////////////



/* 
- String should be between double cout " "
- number without double cout
- Array << Object
- Object
- Boolean
- undefined 
- null type of object
*/

//console.log("Ahmed Raaft"); 
//console.log(typeof "ahmed"); // string as long as between double or single quote
//console.log(typeof 500); // type of number 
//console.log(typeof ["ah", "ah", "ga"]); // type of object but it names array
//console.log(typeof [500, 200 , 400]); // type of object but it names array
//console.log(typeof {name: "ahmed", age: 20, country: "egypt"}); // type of aboject and called object as well
//console.log(typeof true); // type of boolean
//console.log(typeof false);
//console.log(typeof undefined);
//console.log(typeof null)

//console.table(["ahmed", "raaft", 500, "egypt"]);

//console.log(typeof "ahmed");
//console.log(typeof 500);

//console.log(typeof["ahmed", "raaft", "egypt"]);
//console.log(typeof{name: "ahmed", number: 500}); 


// /////////////// Variable /////////////

// to create a variable should be as the following (keyword which is responsible about the variable var) + var name + assignment operator = + var value
/*

var user = "raaft", age = 80;
var name =  "gaber";

console.log(user); 
console.log(age);
console.log(name);
console.log (next);

// losely type language VS strongly type language <<<<<<  Search requested 

*/


//////////////////// Identiefier name //////////

// it cannot be start with number however, number can be included in the center of var or end of it , cannot be included a space like (na me)
// it can be start with underscore and it can be anywhere of the var , as well as the same with dollar sign
// special char cannot be included anywhere as well as the words which are already booked to the system like (var, con)
// the best practice to writ the var is camelCae (userName)

////////////////////////////////////////////

/*
var 
- redeclare (it can be accepted by var)
var a = 1;
var a = 2;

- Acess before declare (undefiend)

- Varriable scope drama (it added to window scope)




let 
- redeclare (NO << error)

- Acess before declare (error)

- Varriable scope drama (it's not added to window scope)

const 

- redeclare (NO << error) 

- Acess before declare (error)

- Varriable scope drama (it's not added to window scope)
*/

// let a = 100; 
// console.log(a);

 

// console.log(b);

//  var b = 200; 
//  var b = 500; 


// end of compare

// Template Literals Template Strings with the old way before ECMA 6

// let a = "we love";
// let b = "javascript";
// let c = "And"; 
// let d = "programming"; 

// console.log(a+ " \" \" " + b + " \n " + c + " " + d);

// after the ECMA 6 it based on back tick symbol mark ``

// console.log(`${a} " " ${b} 
//  ${c} ${d}`);

//  let title = "Elzero";
// let desc = "Elzero Web School";

// let markup = `
//   <div class="card">
//     <div class="child">
//       <h1>${title}</h1>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;

//console.log(title); // with the old way before of ECMA 
//console.log(`${desc}`); // after the ECMA 

//////////////////// numbers ////////////////////////


// console.log(1000000);
// console.log(1000_000);
// console.log(1e6);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log((100).toString());
// console.log((100.10).toString());
// console.log(100.5555555.toFixed(2)); // return string 
// console.log(parseInt(" 100.66")); 
// console.log(parseInt("100.44"));


//it return only number without decimal which is interger number
//and cannot accept the string before the number and in that case will be returned Nan




//console.log(parseFloat(" 100.66"));  
//it can be returned float number with decimal number
//it cannot be accept the string before the number 


//console.log(Number.isInteger("100"));
//console.log(Number.isInteger(100.66));
//console.log(Number.isInteger(100));

/* number is an object which has a property called is integer which can be checked the value if it's integer or not
isNan
*/

//console.log(Number.isNaN(Number("Ahmed 20")));
//console.log(Number.isNaN(+"Ahmed 20"));
// console.log(Number.isNaN("Ahmed 20"));





////////////////// start of Math Object ///////////////////////////
/*
round
ceil 
floor
min, max
pow
random 
trunc 
*/



// console.log(Math.round(50.2));
// console.log(Math.round(50.5));

//console.log(Math.ceil(50.2)); // return the highest value
//console.log(Math.floor(40.9)); // return the lowest value

//console.log(Math.min(100, -100, 20 , 30 , 50)); // return the min value
//console.log(Math.max(100, -100, 20 , 30 , 50)); // return the max value

//console.log(Math.pow(2,4)); // 2**4

//console.log(Math.random()); // it can be return random number after every refresh 

//console.log(Math.trunc(45.2)); // it return integer value whatever after the decimel point 

////////// numbers challangs /////////////
//console.log(Math.pow(100, Math.floor(d))); // 10000



/*
  Number Challenge
*/

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
//console.log(Math.floor(d));

// Use Variables a + d One Time To Get The Needed Output
//console.log(Math.pow(100, Math.floor(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
//console.log(Math.floor(d));
//console.log(Math.trunc(d));
//console.log(Math.round(d));
//console.log(parseInt(d));

// Use Variables b + d To Get This Valus
//console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
//console.log(+(Math.floor(b) / Math.ceil(d)).toFixed(0)); // 67 => Number

//b = 200.5 
//d = 2.4






////////////// Start of the String ////////////////////
/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

// let theName = "  Ahmed  ";



//console.log(theName);
//console.log(theName[1]); // where we can target an special index in character 
//console.log(theName[5]); // which will give us undefined value since there is no index 5
//console.log(theName.charAt(2)); // it can targer the char with the same value as index
//console.log(theName.charAt(5)); // which will give us empty output since there is no number 5 to be target
//console.log(theName.length); // will give the length of the all value which is 5 and lenght should be more then index by 1 
//console.log(theName.trim()); // it will be deleted the space in the variable if found
//console.log(theName.toUpperCase());
//console.log(theName.toLowerCase());

// simple quiz we need to return letter (m) in CAPS letters


// console.log(theName.trim().charAt(2).toUpperCase());


////////////////////////////////////////////////////////////////////////////////
/*
  String Methods part 2
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";



// console.log(a.indexOf("Web")); // when the web word is start on index 7 
// console.log(a.indexOf("Web", 8)); // when you requested to start from index 8 which is not found web on that index and will return -1
// console.log(a.indexOf("o")); // will retun 5 where the index of first letter o
// console.log(a.lastIndexOf("o")); // will return the last index of (o) which is 15

// console.log(a.slice(3, 4)); // not included the end in the counter
// // in the above example will start to slice from index 3 and will end at position 4

// console.log(a.slice(-5, -3)); // will start to slice from the end of the text 

// console.log(a.repeat(5));

// console.log(a.split("", 7)); // split it can be return array and not included the end in the counter as well


// console.log(a.indexOf("Web"));
//console.log(a.indexOf("Web", 8));
//console.log(a.indexOf("o")); // 5
//console.log(a.lastIndexOf("o")); // 15

//console.log(a.slice(2, 6));
//console.log(a.slice(-5, -3));

//console.log(a.repeat(5));

//console.log(a.split("", 6));


// String Challange /////

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

//let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
//console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); // Zero

// 8 H
//console.log("School"[2].toUpperCase().repeat(8)); // HHHHHHHH
//console.log(a[13].toUpperCase().repeat(8));

// Return Array
//console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
//console.log(); // Elzero School
//console.log(`${a.substr(0,6)} ${a.substr(11,16)}`); 


// Solution Must Be Dynamic Because String May Changes
//console.log(); // eLZERO WEB SCHOOl
// console.log(a.charAt(0).toLowerCase() + a.slice(1, a.length-1).toUpperCase() + a.slice(-1).toLowerCase()) ;

//num = 0;
// Examples
//console.log(100_000); // 100000
//console.log(100000); // 100000
//console.log(5e4 + 5e4); // 100000

// Your Solutions
//console.log(100_000); // 100000
//console.log(100000); // 100000
//console.log(5e4+5e4); // 100000
//console.log(Number("100000")); // 100000
//console.log(+"100000"); // 100000
//console.log(num + 100000); // 100000
//console.log(); // 100000
//console.log(); // 100000
//console.log(); // 100000
//console.log(); // 100000

//console.log(-Number.MIN_SAFE_INTEGER);
//console.log(Number.MAX_SAFE_INTEGER);

//console.log(Number.MAX_SAFE_INTEGER.toString().length);




//let myVar = "100.56789 Views";

//console.log(parseInt(myVar)); // 100
//console.log(+parseFloat(myVar).toFixed(2)); // 100.57



//let a = 10;
// console.log(a)

// console.log(+Number.isInteger(num) + true); // 2





// let flt = 10.4;

// console.log(Math.round(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(parseInt(flt)); // 10
// console.log(+parseFloat(flt).toFixed(0)); // 10



//console.log(Math.random() * 4 );



//let userName = "Elzero";
//console.log(userName[3].toLowerCase()); // e
//console.log(userName.charAt(3).toLowerCase()); // e
//console.log(userName.slice(3,4).toLowerCase()); // e
//console.log(userName.substr(3,1)); // e
//console.log(userName.substring(3,4)); // e
//console.log(userName.substring(3, userName.length-2).repeat(3)); // eee




// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

//console.log(word.includes(letterZ)); // True
//console.log(word.startsWith(letterE.toUpperCase())); // True
//console.log(word.endsWith(letterO.toLowerCase())); // True




///////////////////////  Comparison Operators ////////

/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

// console.log(10 == "10"); // Compare Value Only
// console.log(-100 == "-100"); // Compare Value Only
// console.log(10 != "10"); // Compare Value Only

// console.log(10 === "10"); // Compare Value + Type
// console.log(10 !== "10"); // Compare Value + Type
// console.log(10 !== 10); // Compare Value + Type

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log(typeof "Osama" === typeof "Ahmed");

/////////////////////////////////////////////////////////
/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);




