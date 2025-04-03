/** Exercise 01 - Fizzbuzz

Write a program that writes all the numbers from 1 to 100, with some exceptions: 
- For numbers divisible by 3, print “fizz” 
- For numbers divisible by 5 (but not 3), print “buzz” 
- For numbers divisible by 3 and 5, print “fizzbuzz”

Use console.log() to write the proper output to the command line.

**/

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...

function fizzBuzz(x) {
    if (x % 15 ===0) {
        return 'fizzbuzz';
    } else if (x % 3 === 0) {
        return 'fizz';
    } else if (x % 5 === 0) {
        return 'buzz';
    } else {
        return x;
    }
}

function main() {
    for (let i = 1; i <= 100; i++) {
        console.log(fizzBuzz(i));
    }
}

main();