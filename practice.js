let random = Math.random();
let a = prompt("Enter your first Number")
let c = prompt("Enter your operation")
let b = prompt("Enter your second Number")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

console.log(random)

if(random > 0.1){
    console.log(`Your Result is ${eval ( `${a} ${c} ${b}`)}`)
    alert(`Your Result is ${eval ( `${a} ${c} ${b}`)}`)
}

else {
    c = obj[c]
    console.log(`Your Result is ${eval ( `${a} ${c} ${b}`)}`)
    alert(`Your Result is ${eval ( `${a} ${c} ${b}`)}`)
}
