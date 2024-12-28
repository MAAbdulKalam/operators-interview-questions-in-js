/*1. Arithmetic Operations with Type Conversion                                 : 06-12-2024 :
Create a program that takes a string input of two numbers (e.g., "5" and "10") and
performs arithmetic operations like addition, subtraction, multiplication, and division
after converting them to numbers. */
let num1 = "5";
let num2 = "10";
let res = Number(num1) + Number(num2);
// let res = parseInt(num1) + parseInt(num2);
// let res = Number(num1) - Number(num2);
// let res = Number(num1) * Number(num2);
// let res = Number(num1) / Number(num2);
// let res = Number(num1) ** Number(num2);
console.log(res);

/*2. String Concatenation vs Addition
Write a program that concatenates two strings and adds two numbers. Compare the
results when using mixed data types (e.g., "5" + 10 vs 5 + 10). 
*/
let str1 = "Hello";
let str2 = " World!";
let concate = str1 + str2;
console.log("concatenation of :", concate);  // concatenation of : Hello world.

let numb1 = 5;
let numb2 = 10;
let result2 = numb1 + numb2;
console.log("Addition of numbers :", result2); // Output: 15

let mixed1 = "5" + 10;
console.log(mixed1);  //string to number - string concatenation. output : 510

let n1 = 5 + "10"; //number and string
console.log(n1);   // output : 510

let n2 = 10 + 5;  // both are number 
console.log(n2);   // output : 15

/*3. Relational Operators with Type Coercion
Use <, >, <=, and >= to compare string and number inputs (e.g., "15" > 10). Analyze
the results. */
console.log("15" < 10);  //false  here type coercion performing during comparison automatically changing string into a number before comparison.
console.log("15" > 10);  //true
console.log("15" >= 10); //true
console.log("15" <= 10); //false

/*4. Equality Operators (== vs ===)
Create a program that compares a string number ("20") with an integer (20) using both == and ===. Explain the difference in the output.*/
let p = "20";
let q = 20;
console.log(p == q); //true .. here the loose equality operator check the value only.
console.log(p === q); //false .. here the loose equality operator check the value and datatype also.

/*5. Logical Operators with Boolean Conversion
Accept user input and check whether it is empty using the || operator (e.g., input || "default"). Also, validate non-empty strings using &&. */
let a = true;
let b = false;
let c = true;
let d = true;
console.log(a || b); //output : true. because here a is true. OR operator will check any one condition is true.
console.log(b || a); //output : true. because here a is true.
console.log(a && b); //output : false. because here b is false. AND operator will check all the conditions are true.
console.log(a && c); //output : true. because here a and c both are true.
console.log(a && c && d); //output : true. because here a, c & d are true.

/*6. Ternary Operator for Discounts
Create a program that calculates a discount for a shopping cart based on the total amount. Use a ternary operator to apply a 10% discount 
if the total is greater than $100. 
 */
const totalAmount = 150;
const { discountPercentage, discountAmount, finalPrice } = calculateDiscount(totalAmount);
function calculateDiscount(totalAmount) {
    const discountPercentage = totalAmount > 100 ? 10 : 0;
    const discountAmount = totalAmount * (discountPercentage / 100);
    const finalPrice = totalAmount - discountAmount;
    return {
        discountPercentage,
        discountAmount,
        finalPrice
    };
}
console.log(`Total Amount: $${totalAmount}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: $${discountAmount}`);
console.log(`Final Price: $${finalPrice}`);

/*7. Increment and Decrement with String Numbers
Write a program that takes a string number (e.g., "5") and applies pre- and postincrement operators. Observe how type conversion affects the output. */
let s = "5";
++s;
// console.log(s); //output : 6
// console.log(++s); //output : 7
let t = "5";
t++;
console.log(t); //output : 6
console.log(t++); //output : 6
// console.log(t--); //output : 5
// console.log(--t); //output : 4

/*8. Typeof Operator for Validation
Create a function that accepts mixed inputs and checks their type using the typeof operator. Handle different types (number, string, object, etc.) appropriately.  */
let mix1 = "2" + 10;
let mix2 = 5 + "2";

function function1() {
    console.log("The type of the input is :", typeof mix1);
    console.log("The type of the input is :", typeof mix2);

}
function1();

/*9. Unary Plus for Type Conversion
Write a program that uses the unary + operator to convert various data types (e.g.,strings, booleans) into numbers. */
let s1 = "10";
let s2 = +s1; //unary operator converts s1 into a number.
console.log(typeof s2, s2); //number 10
console.log(Boolean(s2 == s1));  //true 
console.log(s2 === Number(s1));  //true
console.log(s1 === s2); //false

let bool1 = true;
let bool2 = +bool1; //converts true become 1 , false become 0.
console.log(typeof bool2, bool2); //nummber 1.

let bool3 = false;
let bool4 = +bool3; //converts 0 to false
console.log(typeof bool4, bool4); //number 0.

/*10. Assignment Operators for Accumulation
Simulate a bank account where a user deposits and withdraws money. Use compound assignment operators like += and -=. */
let bankAcc = 100;
let deposit = 50;
let withdraw = 20;
bankAcc += deposit;
bankAcc -= withdraw;
console.log(bankAcc);

/*11. Modulo Operation for Even/Odd Check
Create a program that checks if a given number is even or odd using the % operator. Use parseInt() if the input is a string. */
let findNumb = 5;
let Check = (findNumb % 2 === 0) ? "Even" : "Odd";
console.log(Check);  // odd.

/*12. String to Boolean Conversion
Accept user input as a string ("true" or "false") and convert it into a boolean using a logical operator or comparison. */
let cat = "true";
let dog = "false";
let catbool = cat === "true";
let dogbool = dog === "true";

console.log(catbool && dogbool);  //false
console.log(catbool || dogbool);  //true
console.log(!catbool == dogbool); //true

/*13. Chaining Logical and Relational Operators
Write a program that takes user age as input and checks if the user is a teenager (13 <= age <= 19). Use logical and relational operators in a single expression. */

let userAge = 13;
let CheckAge = (userAge >= 13 && userAge <= 19) ? "He is teenager" : "Not a teenager";
console.log(CheckAge);

/*14. Grading System
Write a program using Ternary Operator to determine the grade based on the marks entered by the user. */
let studentMarks = 98;
let grade = (studentMarks >= 85) ? "A" :
    (studentMarks >= 70) ? "B" :
    (studentMarks >=50) ? "C" :
    (studentMarks >=35) ? "D" : "F";
console.log(`grade: ${grade}`);

/*15. Checking for Leap Year
Write a program using Ternary Operator that checks if a given year is a leap year.*/
let year = 2024;
let checkLeap = (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) ? "Leap Year" : "Not a leep Year";
console.log(checkLeap);




























