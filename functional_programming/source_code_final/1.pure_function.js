const calculateArea = (radius, pi) =>
  radius * radius * pi;

calculateArea(100, 3.14); // 314
calculateArea(100, 42); // 4200

// ------------------------------

const counter = 1;

const increaseCounter = () => counter + 1;

counter; // 1
increaseCounter(); // 2
counter; // 1
