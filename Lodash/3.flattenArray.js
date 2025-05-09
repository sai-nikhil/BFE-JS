const arr = [1, [2], [3, [4,[5,[6]]]]];

function flatten(arr,depth){
    let res = [];
    arr.forEach(element => {
        if(Array.isArray(element) && depth > 0){
            res.push(...flatten(element , depth -1))
        }
        else{
            res.push(element)
        }
    });
    return res;
}

// console.log(flatten(arr,1))
