const mergeSort = (arr) => {  
  if (arr.length === 1) {
    return arr;
  }

  let mid= Math.floor((arr.length) / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid)); 

  const sorted = [];
  
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sorted.push(left[i]);    
    i++;
  }

  while (j < right.length) {
    sorted.push(right[j]);    
    j++;
  }

   return sorted;
};

const arr = [105, 79, 100, 110];
console.log(mergeSort(arr));
