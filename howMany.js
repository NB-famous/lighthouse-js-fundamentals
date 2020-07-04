let howManyHundreds = (num) =>{
    let total = num/100;

    let newTot = Math.floor(total);
    return newTot;
}

console.log(howManyHundreds(426));