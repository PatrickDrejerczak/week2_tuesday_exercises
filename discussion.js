// skip game

let number = 10;

function skipp(start, end) {
  for (let number = start; number < end; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
      console.log("ziffzub");
    } else if (number % 3 == 0) {
      console.log("ziff");
    } else if (number % 5 == 0) {
      console.log("zubb");
    } else {
      console.log(number);
    }
  }
}

skipp(5, 15);

// greatest common divisor

function gcd(x, y) {
  let result = 0;
  for (let index = 1; index < x + 1; index++) {
    if (x % index == 0 && y % index == 0) {
      result = index;
    }
    console.log(result);
  }
}

gcd(12, 24);

// lowest common divisor

function lcd(x, y) {
  let result = 0;
  for (let index = 1; index < x + 1; index++) {
    if (x % index == 0 && y % index == 0) {
      result = index;
    }
    console.log(result);
  }
}

gcd(12, 24);

// prime number

function prime(zahl) {
  for (let index = 2; index < zahl; index++)
    if (zahl % index == 0) {
      return false;
    }
  return true;
}

console.log(prime(7));

// date & age in weeks

function calcDate() {
  let seconds = Date.now() / 1000;
  let minute = seconds / 60;
  let hour = minute / 60;
  let day = hour / 24;
  let year = day / 365.25;
  let month = year * 12;
  console.log(
    `Since 1st of January 1970, ${year} years, ${month} months, ${day} days, ${hour} hours, ${minute} minutes and ${seconds} seconds passed.`
  );
}

calcDate();

function myAge(dateOfBirth) {
  let yourAgeInMilliseconds = Date.now() - new Date(dateOfBirth);
  let agePerson = yourAgeInMilliseconds / 6.048e8;
  console.log(`My age in weeks is ${agePerson}`);
}

myAge("1990-01-22");

// scope

function outer() {
  function inner1() {
    var x = 10;
    return x;
  }

  function inner2() {
    var y = 11;
    return y;
  }

  function inner3() {
    var xy = inner1() + inner2();
    return xy;
  }

  return inner3();
}

console.log(outer());
