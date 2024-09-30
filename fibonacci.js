const fibs = (num) => {
  let first = 0;
  let second = 1;
  
  const fibsArray = [];

  for( let i = first; i < num; i++) {
    fibsArray.push(first);
    let cur = first + second;    
    first = second;
    second = cur;    
  }
  console.log(fibsArray);
  return fibsArray;
}

// fibs(10);

const fibsRec = (num) => { 
  if (num <= 0) {
    return [];
  }
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }
  const fibsArray = fibsRec(num - 1);  
  const rest = fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3];
    
  return [...fibsArray, rest];
  
}

console.log(fibsRec(8));

