// exercise 5

console.log(Math.floor(4.5)); // expected output: 4
console.log(Math.ceil(4.5)); // expected output: 5
console.log(Math.round(4.5)); // expected output: 5
console.log(Math.round(4.49)); // expected output: 4

function randomNumbers(number) {
  for (let index = 1; index <= number; index++) {
    console.log(Math.random());
  }
}

randomNumbers(5);

function getRandomInt(repition, min, max) {
  for (let index = 1; index <= repition; index++) {
    console.log(Math.floor(Math.random() * (max - min) + min));
  }
}

getRandomInt(100, 5, 10);

let arr = ["apple", "orange", "kiwi"];
let x = arr.length;

function getRandomItem() {
  let item = arr[Math.floor(Math.random() * x)];
  console.log(item);
}

getRandomItem();

// exercise 6

function pyr(number) {
  for (let rowNumber = 0; rowNumber < number; rowNumber++) {
    let res = "";
    for (let column = 0; column <= rowNumber; column++) {
      res += rowNumber + 1;
    }
    console.log(res);
  }
}

pyr(6);

let lineA = " # # # #";
let lineB = "# # # #";
let currentLineToPrint = lineA;

for (let index = 0; index < 8; index++) {
  if (currentLineToPrint == lineA) {
    console.log(currentLineToPrint);
    currentLineToPrint = lineB;
  } else {
    console.log(currentLineToPrint);
    currentLineToPrint = lineA;
  }
}

// Exercise 7

// let workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
// let sum = 0;

// function salary() {
//   for (let i = 0; i < workingHours.length; i++) {
//     console.log("Peter earned $ " + workingHours[i] * 25 + " today.");
//     sum += workingHours[i] * 25;
//   }
// }

// salary();
// console.log("Peter earned  $ " + sum + " in 2 weeks.");

let workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
let sum = 0;

function salary(weeks) {
  for (let index = 1; index <= weeks; index++) {
    let randomHours = Math.floor(Math.random() * (9 - 6) + 6);
    workingHours.push(randomHours);
  }
  for (let i = 0; i < workingHours.length; i++) {
    console.log("Peter earned $ " + workingHours[i] * 25 + " today.");
    sum += workingHours[i] * 25;
  }
}

salary(245);
console.log("Peter earned  $ " + sum + " in a year.");

// exercise 8

function getLeapYears(start, end) {
  for (let i = start; i < end; i++)
    if (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0)) {
      console.log(i);
    }
}

getLeapYears(1899, 2001);

// let arr = [1, 2, 3, 4, 5];

// function reverseArray(arr) {
//   const reversed = arr.reverse();
//   console.log(reversed);
// }

// reverseArray(arr)

let arr = [1, 2, 3, 4, 5];

function reverseArr(arr) {
  let reverseArr = new Array();
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  console.log(reverseArr);
  console.log(arr);
}

reverseArr(arr);

function getNumbers() {
  let numbers = [];
  let evenNumbers = [];
  let oddNumbers = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(getRandomInt(0, 100));
  }
  console.log(numbers);
  for (let i = 0; i < 100; i++) {
    if (numbers[i] % 2 === 1) {
      oddNumbers.push(numbers[i]);
    } else {
      evenNumbers.push(numbers[i]);
    }
  }
  console.log("Even numbers", evenNumbers);
  console.log("Odd numbers", oddNumbers);
}
// getNumbers();

// Exercise 9

let userA = {
  id: 123456,
  name: "Peter Parker",
  email: "peter.parker@gmail.com",
  role: "student",
  courseId: 112233,
  tasks: [
    { name: "Task 1", status: "Done" },
    { name: "Task 2", status: "Not Started" },
    { name: "Task 3", status: "In Progress" },
    { name: "Task 4", status: "Not Started" },
    { name: "Task 5", status: "Done" },
    { name: "Task 6", status: "In Progress" },
    { name: "Task 7", status: "Not Started" },
    { name: "Task 8", status: "Done" },
    { name: "Task 9", status: "Done" },
    { name: "Task 10", status: "In Progress" },
  ],
};

userA.email = "pparker@gmail.com";
console.log(Object.entries(userA));
console.log(Object.keys(userA).length);

function greeting(userA) {
  console.log(`Hi, my name is ${userA.name}, my email is ${userA.email}`);
}

greeting(userA);

function listOfTasks(userA) {
  function printTasks(status) {
    console.log(status);
    for (let index = 0; index < userA.tasks.length; index++) {
      const task = userA.tasks[index];
      if (task.status === status) {
        console.log(`- ${task.name}`);
      }
    }
  }
  printTasks("Not Started");
  printTasks("In Progress");
  printTasks("Done");
}

listOfTasks(userA);

// exercise 6

var variousThings = [
  true,
  true,
  true,
  false,
  true,
  true,
  1,
  true,
  true,
  false,
  true,
  false,
  true,
  "hello",
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  "world",
  true,
];
function findFirstString(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (typeof element === "string") {
      console.log(element);
      return;
    }
  }
}
findFirstString(variousThings);

var emails = ["  PETER@gmail.com", "Mia1024@gmail.COM  ", " Dorian@gmail.com "];

function normalizeEmails(emails) {
  let result = [];
  for (let index = 0; index < emails.length; index++) {
    let email = emails[index];
    email = email.toLowerCase();
    email = email.trim();
    result.push(email);
  }
  return result;
}

function splitNames(fullName) {
  let firstName = fullName.split(" ")[0];
  let lastName = fullName.split(" ").slice(1).join(" ");
  console.log(fullName.split(" "));
  return { firstName, lastName };
}

console.log(splitNames("Peter van Parker"));

function getRandomString(length) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let index = 0; index < length; index++) {
    result += getRandomItem(characters);
  }
  return result;
}
