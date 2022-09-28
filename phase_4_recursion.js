function range(start, end) {
  if(start === end) {
    return [end];
  }
  else {
    return [start].concat(range(start + 1, end));
    // console.log(start);
    // return range(start + 1, end).unshift(start);
    // let stack = range(start+1, end);
    // console.log(stack, 'hi');
    // return stack ? stack.unshift(start) : 'failure';
  };
};

console.log(range(1, 4));


const sumRec = (arr) => {
  if(arr.length === 1){
    return arr[0];
  }
  else {
    return arr.shift() + sumRec(arr);
  };
};

console.log(sumRec([1,2,3]));

const exponent = (base, exp) => {
  if(exp === 0){
    return 1;
  }
  else{
    return base * exponent(base, exp-1);
  };
};

console.log(exponent(2,5));

const exponentTwo = (base, exp) => {
  if (exp === 0) {
    return 1;
  }
  else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0){
    return exponentTwo(base, exp/2)**2;
  } else {
    return base * (exponentTwo(base, ( exp - 1 ) / 2 )**2)
  };
};

console.log(exponentTwo(2, 4));
console.log(exponentTwo(2, 5));

const fibonnacci = (n) => {
  if (n < 1) {
    return [1];
  }
  else if (n === 2){
    return [1,1];
  }
  else {
    
    let fibsum = fibonnacci(n-1)
    return fibsum.concat(fibsum[fibsum.length - 1] + fibsum[fibsum.length - 2]);
  };
};

console.log(fibonnacci(5));