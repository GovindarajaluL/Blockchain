//1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

const checkTriangle = (x, y, z) => {
  if (x == y && y == z) return "equilateral triangle";

  if (x == y || y == z || z == x) return "isosceles triangle";

  return "scalene triangle";
};

console.log(checkTriangle(20, 30, 60));
console.log(checkTriangle(60, 60, 60));
console.log(checkTriangle(50, 50, 80));

//2. Write a function using switch case to find the grade of a student based on marks obtained

const studentMark = (mark) => {
  switch (true) {
    case mark > 90 && mark <= 100:
      return "S grade";
    case mark > 80 && mark <= 90:
      return "A grade";
    case mark > 70 && mark <= 80:
      return "B grade";
    case mark > 60 && mark <= 70:
      return "C grade";
    case mark > 50 && mark <= 60:
      return "D grade";
    case mark > 40 && mark <= 50:
      return "E grade";
    case mark >= 0 && mark <= 40:
      return "F grade";
    default:
      return "Invalid Marks";
  }
};

console.log(studentMark(81));
console.log(studentMark(10));
console.log(studentMark(55));
console.log(studentMark("dd"));

//3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000
let val1 = 0;
for (let m = 1; m < 1000; m++) {
  if (m % 3 == 0 || m % 5 == 0) {
    val1 = val1 + m;
  }
}
console.log(val1);

const giveTheFactorial = (val) => {
  if (val < 1) return 0;
  if (val == 1) return 1;
  //let retVal = 1;
  let retVal = BigInt(1);
  for (let j = 1; j <= val; j++) {
    retVal *= BigInt(j);
  }
  return retVal;
};

const checkPrimeNumber = (num) => {
  if (num < 2) return false;
  if (num == 2) return true;
  let retVal = true;
  for (let k = 2; k < num; k++) {
    if (num % k == 0) {
      retVal = false;
      break;
    }
  }
  return retVal;
};

const giveRange = (start, end) => {
  //console.log(start, end);
  for (let i = start; i < end; i++) {
    let isPrime = checkPrimeNumber(i);

    if (isPrime) {
      console.log(
        i + " is a prime number and its Factorial is " + giveTheFactorial(i)
      );
    }
  }
};

giveRange(2, 1000);
