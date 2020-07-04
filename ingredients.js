const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i =0;
let j =0;

let revArray = [];

while(i <= ingredients.length){
    console.log(ingredients[i]);
    i++;
}

for(i = 0; i <= ingredients.length; i++){
    console.log(ingredients[i]);
}

for(i = ingredients.length - 1; i >= 0 ; i--){    
    revArray.push(ingredients[i])
}
for(j = 0; j <= revArray.length; j++){
    console.log(revArray[j]);
}

  