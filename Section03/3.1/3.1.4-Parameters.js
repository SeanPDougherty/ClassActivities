// Named Parameters

// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParams(param1, param2) {
  console.log(param1, param2);
  return param1 + param2;
}

// invoke the function and pass in two numbers
functionWithTwoParams(2, 3);
console.log(functionWithTwoParams(2, 3));
// invoke the function and pass in more than two numbers
console.log(functionWithTwoParams(2, 3, 4));
// invoke the function and pass in only one number
console.log(functionWithTwoParams(2));
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithTwoParamsRest(param1, param2, ...param3) {
  console.log(param1, param2);
  console.log(param3);
  let sum = 6;
  for (let item of param3) {
    sum += sum + item;
  }
  return param1 + param2;
}
// again, invoke the function and pass in more than two numbers
console.log(functionWithTwoParamsRest(2, 10, 30, 40));
