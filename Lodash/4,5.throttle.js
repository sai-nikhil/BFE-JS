//throttle example
//run a function once and wait for a dealy before executing it again
//but call the ast called function after cooldown

function throttle(fn,delay){
    let lastCalledTime = -Infinity;
    let lastArgs = null

    return function(...args){
        let currentTime = Date.now();
         if(currentTime - lastCalledTime >= delay){
            lastCalledTime = currentTime;
            fn(...args)
         }
         else{
            lastArgs = args;
         }

         if(lastArgs && currentTime - lastCalledTime >= delay){
            fn(...lastArgs);
            lastArgs = null;
            lastCalledTime = currentTime;
         }
    }
}


// throttle with timers

function trottles2(fn, delay, options = {trailing : true, leading : true}){
    let isThrolled = false;
    let lastArgs = null;
    return function (...args){
        if(!isThrolled){
            isThrolled = true
            
            let timer = () => setTimeout(()=>{
                if(lastArgs && options.trailing){
                    fn(...args);
                    lastArgs = null;
                    timer();
                }
                else{
                    isThrolled = false;
                }
                }, delay)

            if(options.leading){
                fn(...args);
            }
            else{
                lastArgs = args; //if leading is false and example you only have once call then at the end you need to call this with last args no
            }
            timer();
        }
        else{
            lastArgs = args;
        }
    }
}