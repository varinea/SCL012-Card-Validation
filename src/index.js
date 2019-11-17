

function getUserInput(){
    return userNumInput.value;  
 }
 
 function luhnCheck(){
   return "hello world";
 }
 
 function whatCard(){
 
 }
 
 document.getElementById("submitBtn").addEventListener("click", function(){
    document.getElementById("resultDiv").innerHTML = luhnCheck();
 }, false);