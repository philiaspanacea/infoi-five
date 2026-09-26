 console.log ("helloooo")
// let output = 0;
// let plus = ".plus";
// let minus = ".minus";
// let divide = ".divide";
// let multiply = ".multiply";

// function mathSum(){
//     if (plus)
// }

// PLUS FUNCTION

function plusSum(){
    const sum = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
    return(sum);
}

document.querySelector(".plus").addEventListener("click", function(){
    document.querySelector(".output").innerHTML = plusSum();
})

// MINUS FUNCTION

function minSum(){
    const sum = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
    return(sum);
}

document.querySelector(".minus").addEventListener("click", function(){
    document.querySelector(".output").innerHTML = minSum();
})

// MULTIPLICATION FUNCTION

function mulSum(){
    const sum = Number(document.getElementById("number1").value) * Number(document.getElementById("number2").value);
    return(sum);
}

document.querySelector(".multiply").addEventListener("click", function(){
    document.querySelector(".output").innerHTML = mulSum();
})

// DIVISION FUNCTION

function divSum(){
    const sum = Number(document.getElementById("number1").value) / Number(document.getElementById("number2").value);
    return(sum);
}

document.querySelector(".divide").addEventListener("click", function(){
    document.querySelector(".output").innerHTML = divSum();
})

// DIVIDE BY ZERO
