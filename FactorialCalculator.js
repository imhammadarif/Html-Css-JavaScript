
function factorial(num){
    factorial = 1;
    for(let i = num; i > 0;i--){
        factorial *= i;
    }
    return factorial;
}

function Factorial(num){
    let arr = Array.from(Array(num+1).keys())
    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c
}

