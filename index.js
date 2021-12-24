/*console.log("Hello World!");
const arr = ["hey", "world"];
console.log(arr[0]);*/
function changeColor(){
    const arr = ["red", "blue", "yellow", "green"];
    let index = Math.ceil(Math.random() * arr.length);
    let lorem = document.getElementById("lorem");
    console.log(lorem);
    lorem.style.background = arr[index];
    lorem.style.color = "white";
}