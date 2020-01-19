let PI = 3.14;

const calculateArea = (radius) =>
  radius * radius * PI;

let PI = 3.14;
calculateArea(10); // 314.0

let PI = 42;
calculateArea(10); // 420

// ------------------------------

let counter = 1;

const increaseCounter = () => {
  counter++;
  return counter;
}

counter; // 1
increaseCounter(); // 2
counter; // 2
