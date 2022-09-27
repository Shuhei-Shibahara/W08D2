Array.prototype.myEach = function(callback) {

  for(let i=0; i < this.length; i++){
    callback(this[i]);
  };

};

const exclamation = function(el) {
  return (el + '!');
};

Array.prototype.myMap = function(callback) {
  let arr = [];

  this.myEach(function(el) {
    arr.push(callback(el));  
  });
  return arr;
};

// console.log([1, 2, 3].myMap(exclamation));

const addition = function(acc, el) {
  return acc + el;
};

const multiplication = function (acc, el) {
  return acc * el;
};

Array.prototype.myReduce = function(callback, initialValue) {

  if(initialValue === undefined) {
    initialValue = this.shift();
  };

  this.myEach(function(el){
    initialValue = callback(initialValue, el);
  });
  
  return initialValue;
};

console.log([1, 2, 3].myReduce(multiplication));
console.log([1, 2, 3].myReduce(multiplication, 25));