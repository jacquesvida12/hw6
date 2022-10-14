const num1 = prompt("Please enter a number: ");
const num2 = prompt("Please enter another number:  ");

const sumnum = Number(num1) + Number(num2);

var error = document.createElement("span");
error.style.color = "red";
error.textContent = "Error! ";
error.style.fontWeight = "bold";

var error2 = document.createElement("span");
error2.style.color = "black";
error2.style.fontWeight = "normal";
error2.textContent = `You must enter integers. You entered "${num1}" and "${num2}". Try again!`

var sum = document.createElement("span");
sum.style.color = "red";
sum.style.fontWeight = "bold";
sum.textContent = sumnum;

var descrip = document.createElement("span");
descrip.style.color = "black";
descrip.style.fontWeight = "normal";
descrip.textContent = `${num1} + ${num2} = `;

if (isNaN(num1) || isNaN(num2)){
    //not a number
     document.getElementById("content").appendChild(error);
     document.querySelector("span").appendChild(error2);
} else if(num1 - Math.floor(num1)!== 0 || num2 - Math.floor(num2)!== 0  ){
    //decimal
    document.getElementById("content").appendChild(error);
    document.querySelector("span").appendChild(error2);
}
else {
    //start
    document.getElementById("content").appendChild(descrip);
    document.querySelector("span").appendChild(sum);
    
    
}
