let range = (start, end, step) =>{
    let container = [];
    if(start > end){
      return container;
    }
    else if(step <= 0){
      return container;
    }
    else{
      for(let i = start; i <= end; i += step){
        container.push(i);
      }
      return container;
    }
  
  }

console.log(range(1, 30, 0));