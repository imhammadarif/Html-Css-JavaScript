console.log("Script has been initialized.")
let boxes = document.getElementsByClassName("boxes")


function getrandomcolor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgba(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(se =>{
    e.style.backgroundColor = getrandomcolor();
})