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

fibs(10);