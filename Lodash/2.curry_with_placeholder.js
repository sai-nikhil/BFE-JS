// const  join = (a, b, c) => {
//     return `${a}_${b}_${c}`
//  }
//  const curriedJoin = curry(join)
//  const _ = curry.placeholder
//  curriedJoin(1, 2, 3) // '1_2_3'
//  curriedJoin(_, 2)(1, _)(3) // '1_2_3'
//  curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'


 const  join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
 function curry(fn){
    return function inner(...args){
        const containsNoPlaceholder = args.length >= fn.length && !args.slice(0, fn.length).includes(curry.placeholder)
        if(containsNoPlaceholder){
            return fn(...args);
        }
        //if the paramete has some place holders remove them
        else{
            return function(...next){
                //why next.lenght what if all the args are shifted already you are left with empty array
                const mergedArgs = args.map(arg => (arg === curry.placeholder && next.length) ? next.shift() : arg )
                return inner(...mergedArgs,...next)
            }
        }


    }
 }

 const curriedJoin = curry(join)
 curry.placeholder = Symbol()
const _ = curry.placeholder

// console.log(curriedJoin(1, 2, 3))     // '1_2_3'
console.log ('3',curriedJoin(_, 2)(1, _)(3)) // '1_2_3'
// console.log('2',curriedJoin(_, _, _)(1)(_, 3)(2))// '1_2_3'