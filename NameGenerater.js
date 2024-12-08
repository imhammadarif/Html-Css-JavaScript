let first, second, third;

let rand = Math.random();

if(rand < 0.33){
    first = 'Hammad'
}
else if(rand < 0.66 && rand > 0.33){
    first = 'Hamza'
}
else{
    first = 'Iqra'
}

rand = Math.random();

if(rand < 0.33){
    Second = 'Arif'
}
else if(rand < 0.66 && rand > 0.33){
    Second = 'Bhatti'
}
else{
    Second = 'Arif Bhatti'
}

console.log(`${first} ${Second}`)
