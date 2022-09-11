//1. Write a program to find whether a given year is a leap year or not.
function checkLeapYear(year) {
  if (year % 400 == 0) return "Leap Year";

  if (year % 100 == 0) return "Not Leap Year";

  if (year % 4 == 0) return "Leap Year";

  return "Not Leap Year";
}

console.log(checkLeapYear(1900));
console.log(checkLeapYear(2004));
console.log(checkLeapYear(2016));
console.log(checkLeapYear(2018));

// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]

const convertCelsiusToFahrenheit = (Celsius) => {
  return (Celsius * 9) / 5 + 32 + " Fahrenheit";
};

console.log(convertCelsiusToFahrenheit(60));

const convertFahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9 + " Celsius";
};

console.log(convertFahrenheitToCelsius(45));

//3. Write a program to find the factorial of a number.
const giveTheFactorial = (val) => {
  if (val < 1) return 0;
  if (val == 1) return 1;
  let retVal = 1;
  for (i = 1; i <= val; i++) {
    retVal *= i;
  }
  return retVal;
};

console.log(giveTheFactorial(2));
console.log(giveTheFactorial(-1));
console.log(giveTheFactorial(5));
