/*
WEB U1B1 + U1B2 Practice
Strings + Numbers (NO functions)
*/

console.log("\n=== PART A: Variables + typeof ===\n");

// TODO A1: Create a variable called firstName (string)
let firstName = "Maken";
// TODO A2: Create a variable called lastName (string)
let lastName = "Luct";
// TODO A3: Create a variable called gradeLevel (number)
let gradeLevel = 12;
// TODO A4: Log each variable and its typeof
console.log("firstName:", firstName, "|",  "type:", typeof firstName);
console.log("lastName:", lastName, "|", "type:", typeof lastName);
console.log("gradeLevel:", gradeLevel, "|", "type:", typeof gradeLevel);

// Example output style (you can match this format):
// firstName: Nick | type: string


console.log("\n=== PART B: Building strings ===\n");

// TODO B1: Create fullName using firstName + lastName (include a space)
let fullName = firstName + " " + lastName;
// TODO B2: Create a username using:
let userName = firstName + " " + lastName;
// - first letter of firstName + lastName
// - all lowercase
// Example: "narmstrong"
// TODO B3: Log fullName and username
console.log(firstName[0] + lastName)
console.log(userName.toLowerCase())
// Helpful hints (not required):
// - firstName[0]
// - .toLowerCase()


console.log("\n=== PART C: String skills ===\n");

// TODO C1: Log the length of fullName
console.log("length:", fullName.length);
// TODO C2: Log fullName in ALL CAPS
console.log(fullName.toUpperCase())
// TODO C3: Log the last character of fullName
console.log(lastName[3])
// TODO C4: Check if fullName includes a space (true/false) and log it
hasSpace = fullName.includes(" ");
console.log(`Does the full name include a space? ${hasSpace}`);
// TODO C5: Replace spaces in fullName with hyphens and log it
fullName = fullName.replaceAll(" ", "-");
console.log(fullName)
// Example: "Nick-Armstrong"


console.log("\n=== PART D: Numbers + math ===\n");

// Scenario: You run a tiny school store.
// You sold some items and need totals.

// TODO D1: Create variables:
// - pencilsSold (number)
let pencilsSold = 10;
// - pencilPrice (number)
let pencilPrice = 1.25
// - notebooksSold (number)
let notebooksSold = 15
// - notebookPrice (number)
let notebookPrice = 20
// Choose realistic values (example: pencilsSold = 17, pencilPrice = 0.25)

// TODO D2: Calculate subtotal = (pencilsSold * pencilPrice) + (notebooksSold * notebookPrice)
let subtotal = (pencilsSold * pencilPrice) + (notebooksSold + notebookPrice);
// TODO D3: Create taxRate (example: 0.07)
let taxRate = 0.15
// TODO D4: Calculate taxAmount
let taxAmount = subtotal * taxRate;
// TODO D5: Calculate total
let total = subtotal + taxAmount;
// TODO D6: Log subtotal, taxAmount, total
console.log(subtotal.toFixed(2));
console.log(taxAmount.toFixed(2));
console.log(total.toFixed(2));
// IMPORTANT: Use .toFixed(2) when logging money


console.log("\n=== PART E: Converting strings to numbers ===\n");

// Scenario: Data came in as strings (like form inputs)
const inputA = "12";
const inputB = "5.5";

// TODO E1: Create numA and numB as numbers (not strings)
let numA = Number (inputA);
let numB = Number (inputB);
// TODO E2: Log numA + numB (should be 17.5 if done right)
console.log(numA + numB);
// TODO E3: Log inputA + inputB (this will be string concatenation)
console.log(inputA + inputB)
// TODO E4: Log the typeof of inputA and numA to prove the difference
console.log(typeof inputA);
console.log(typeof numA);

// Stretch (still no functions):
// TODO E5: Round numB to the nearest whole number and log it
console.log(Math.round(numB));
// TODO E6: Use Math.floor and Math.ceil on numB and log both
console.log(Math.floor(numB));
console.log(Math.ceil(numB));
// console.log(Math.floor,Math.ceil(numB));
