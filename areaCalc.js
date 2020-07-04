let calculateRectangleArea = (length, width) =>{
    
    
    let area = length * width;

    if(area <= 0){
       let noVal;

       return noVal;
      
    }

    return area;
}

let calculateTriangleArea = (base, height) =>{
    let area = (base * height)/2;

    return area;
}

calculateCircleArea = (radius) =>{
    let pi = Math.PI;
    let squared = Math.pow(radius, 2);

    let area = pi * squared ;

    return area;
}

console.log(calculateRectangleArea(-1, 3))
console.log(calculateTriangleArea(-1, 0))
console.log(calculateCircleArea(-1))


/* 
****** GOOOD CODE******

let calculateRectangleArea = (length, width) =>{
  let newLength = Math.abs(length);
  let newWidth = Math.abs(width);
  let area = newLength * newWidth;
  
  if(area <= 0){
    let noVal;
    return noVal;
  }
  return area;
}

let calculateTriangleArea = (base, height) =>{
  let newBase = Math.abs(base);
  let newHeight = Math.abs(height);
  let area = (newBase * newHeight) / 2;
  
  if(area <= 0){
    let noVal;
    return noVal;
  }
  return area;
}

let calculateCircleArea = (radius) =>{
  let pi = Math.PI;
  let squared = Math.pow(radius, 2);
  let area = pi * squared ;
  if(radius < 0){
    let noVal;
    return noVal;
  }
  return area;
}

console.log(calculateRectangleArea(-3, 4))
console.log(calculateTriangleArea(5, -10))
console.log(calculateCircleArea(3))


*/