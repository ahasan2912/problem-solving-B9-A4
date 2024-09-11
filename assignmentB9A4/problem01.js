function calculateMoney(ticket){
    let total = 0;
    if(ticket < 0 || isNaN(ticket) === true){
        return "Invalid Number";
    }
    total = (ticket  * 120) - (500 + (8 * 50));
    return total;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney([1, 2, 3]));


