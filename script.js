const userInput = document.getElementById('userInput');
var expression = '';

function press(num){
    expression += num;
    userInput.value = expression; /*to show input */
}

function equal(){
    userInput.value = eval(expression); /*eval will solve calculation*/
    expression = ''; /*clears box after entering */
}

function erase(){
    expression = ''; 
    userInput.value = expression;
}
