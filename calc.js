const num1 = parseFloat(prompt("Enter First number : "));
const operator = prompt("enter Operator (+, -, *, /)")
const num2 = parseFloat(prompt("Enter Second number : "));

let result = 0;
 if (isNaN(num1)|| isNaN(num2)){
  alert("wrong input. Refresh page!")
  document.location.reload()
 }else{
   if(operator == '+'){
    result = num1 + num2
   }else if (operator == "-"){
     result = num1 - num2
   }else if(operator == '*'){
    result = num1 * num2
   }else if (operator == "/"){
     result = num1 / num2
   }
   alert(num1 + operator + num2 + " = " + result)
   if(confirm("Do you want to Calculate again?")){
    document.location.reload();
  }
}