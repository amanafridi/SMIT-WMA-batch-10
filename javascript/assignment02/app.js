//***********************chap # 6-9  question # 01**********************

// var num = 10;
// console.log("Result : \n the value of a is: " +num ,"\n -----------------")

// ++num;
// console.log("the value of num is: "+num)
// console.log("Now the value of num is: "+num)

// console.log("the value of num is: "+num)
// num++;
// console.log("Now the value of num is: "+num)

// --num;
// console.log("the value of num is: "+num)
// console.log("Now the value of num is: "+num)

// console.log("the value of num is: "+num)
// num--;
// console.log("Now the value of num is: "+num)


//***********************chap # 6-9  question # 02**********************

// // var a = 1 , b = 2;
// // var result = --a - --b + ++b + b--;

// // console.log("The result is "+result);
 
// // --a; 0
// // --a - --b; 1
// // --a - --b + ++b; 2
// // --a - --b + ++b + b--; 3

// //***********************chap # 6-9  question # 03**********************

// // var yourName = prompt("write your name")
// // console.log("welcome "+yourName)

// //***********************chap # 6-9  question # 04-05**********************

// var num =+prompt("Enter the number",5);
// var num2 = 1;
// var num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)
// ++num2;
// num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)
// ++num2;
// num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)
// ++num2;
// num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)
// ++num2;
// num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)
// ++num2;
// num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)
// ++num2;
// num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)
// ++num2;
// num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)
// ++num2;
// num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)
// ++num2;
// num3 = num*num2;
// console.log(num+" X "+num2+" = "+num3)

//***********************chap # 6-9  question # 05**********************

var subOne = prompt("Enter first subject");
var sub1Obtained = +prompt("first subject obtained marks")
var subTwo = prompt("Enter second subject");
var sub2Obtained = +prompt("second subject obtained marks")
var subThree = prompt("Enter Third subject");
var sub3Obtained = +prompt("Third subject obtained marks")
var totalMarks = 100;

var percentage1 = (sub1Obtained/totalMarks)*100;
var percentage2 = (sub2Obtained/totalMarks)*100;
var percentage3 = (sub3Obtained/totalMarks)*100;

console.log("Subjects  Total Marks  Obtained Marks  Percentage");
console.log(subOne+ " " +totalMarks+ " " +sub1Obtained+ " " +percentage1+"%");
console.log(subTwo+ " " +totalMarks+ " " +sub2Obtained+ " " +percentage1+"%");
console.log(subThree+ " " +totalMarks+ " " +sub3Obtained+ " " +percentage1+"%");

var totalSubjectMarks = totalMarks*3;
var totalObtainedMarks = sub1Obtained + sub2Obtained + sub3Obtained;
var totalpercentage = percentage1 + percentage2 + percentage3/100;
console.log("        "+totalSubjectMarks +" " + totalObtainedMarks+" " + totalpercentage+"%");


