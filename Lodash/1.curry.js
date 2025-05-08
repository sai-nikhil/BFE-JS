// Currying is a useful technique used in JavaScript applications.

// Please implement a curry() function, which accepts a function and return a curried one.

// Here is an example

// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }
// const curriedJoin = curry(join)
// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'

const join = (a, b, c) => {
    console.log(`${a}_${b}_${c}`);
    return `${a}_${b}_${c}`
}

function curry(fn){
    return function inner(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }
        else{
            //second function arguments
            return function(...next){
                return inner(...args, ...next);
            }
        }
    }
}

const curriedJoin = curry(join);
curriedJoin(1,2,3);
curriedJoin(1,2)(3);



