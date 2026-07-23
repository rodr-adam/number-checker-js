// check for positive number
function isPositive(number){
    return number > 0;
}

// check for negative number
function isNegative(number){
    return number < 0;
}

// check for zero number
function isZero(number){
    return number === 0;
}

// check for even number
function isEven(number){
    return number % 2 === 0;
}

// describe the input number (object)

function describeNumber(number){
    return {
        positive: isPositive(number),
        negative: isNegative(number),
        zero: isZero(number),
        even: isEven(number),
        odd: !isEven(number)
    }
}

// test examples from roadmap.sh JavaScript Foundations

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
