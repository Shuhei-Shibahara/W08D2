Array.prototype.myEach = function(callback) {

  for(let i=0; i < this.length; i++){
    callback(this[i]);
  };

};

const exclamation = function(el) {
  console.log(el + '!');
};

// [1,2,3].myEach(exclamation);

Array.prototype.myMap = function(callback) {
  let arr = [];
  arr.push(this.myEach(callback));
  console.log(arr);
};

[1, 2, 3].myMap(exclamation);