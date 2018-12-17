// code here! :)

// const foo = () => {
//     return 14
// };

// const bar = () => {
//     return 6
// };

// 2. Write an `add(..)` function that takes two numbers and adds them and returns the result. 
// Call `add(..)` with the results of your two functions from (1) and print the result to the console.

const add = (num1, num2) => num1 + num2;

// console.log(add(foo(), bar()));

// return add(foo(), bar());

// 3. Write an `add2(..)` that takes two functions instead of two numbers, 
// and it calls those two functions and then sends those values to `add(..)`,
//  just like you did in (2) above.

const add2 = (func1, func2) => add(func1(), func2());

// console.log(add2(foo, bar));

// return add2(foo, bar);

// 4. Replace your two functions from (1) with a single function that takes a value 
// and returns a function back, where the returned function will return the value when 
// it's called.

let armyFunc = (val) => {
    return () => {
        return val
    }
}

// console.log(add2(armyFunc(28), armyFunc(12)));

// 5. Write an `addn(..)` that can take an array of 2 or more functions, 
// and using only `add2(..)`, adds them together. Try it with a loop. 
// Try it without a loop (recursion). Try it with built-in array 
// functional helpers (map/reduce).

const addn = (...arr) => {
    let newVal = 0
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        console.log(num);
        newVal += num();
    }
    return newVal;
}

console.log(addn([armyFunc(21), armyFunc(21), armyFunc(21)]));