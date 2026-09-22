mathSum(3, 3);
mathSum(6, 6);
mathSum(4, 4);

// function mathSum (num1, num2){
//
//   const sum = num1 + num2;
//  console.log(sum);
// }

// also works with classes, ".class" and ids, "#special", not just the element "div"
// document.querySelector("button").addEventListener("click", function(){
//    document.querySelector("div").innerHTML = "<h1>Whatever I want</h1>"
// })

 function mathSum (){
     const sum = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
     return (sum);
 }

 document.querySelector("button").addEventListener("click", function(){
    document.querySelector("div").innerHTML = mathSum();
 })

// document.querySelector("button").addEventListener("click", function(){
//    document.querySelector("div").innerHTML = document.getElementById("number1").value;
// })