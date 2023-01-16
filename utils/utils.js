export const Greet = (string, bool = false) => {
    if (bool) return console.log("Good evening, "+string);
    else return console.log("Hi, "+string);
}

export const calculate = (x,y, operator = '+') => {
switch (operator) {
    case "+":
        return x+y;
    case "-":
        return x-y;
    case "*":
        return x*y;
    case "/":
        return x/y;
        
    default:
        break;
}
}