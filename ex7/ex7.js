// code here! :)

const foo = () => {
    return 14
};

const bar = () => {
    return 6
};

// 2. Write an `add(..)` function that takes two numbers and adds them and returns the result. 
// Call `add(..)` with the results of your two functions from (1) and print the result to the console.

const add = (num1, num2) => num1 + num2;

// console.log(add(foo(), bar()));

// return add(foo(), bar());

// 3. Write an `add2(..)` that takes two functions instead of two numbers, 
// and it calls those two functions and then sends those values to `add(..)`,
//  just like you did in (2) above.

const add2 = (func1, func2) => add(func1(), func2());

console.log(add2(foo, bar));

return add2(foo, bar);




