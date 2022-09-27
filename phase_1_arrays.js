Array.prototype.uniq = function(){
    let arr = [];
    this.forEach(el => {
        if (!arr.includes(el)){
            arr.push(el);
        };
    });
    return arr;
}

// console.log([1, 2, 2, 3, 3, 3].uniq());

Array.prototype.twoSum = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0) {
        arr.push([this[i], this[j]]);
      };
    };
  };
  return arr;
}

// console.log([1, -1, 4, 5, -4].twoSum());

Array.prototype.transpose = function() {
  let arr = [];
  for(let i = 0; i < this[0].length; i++){
    let subArr = [];
    for(let j = 0; j < this.length; j++){
      subArr.push(this[j][i]);
    };
    arr.push(subArr);
  };
  return arr;
}

console.log([[1, 2, 3], [4, 5, 6]].transpose());
// [[1, 2, 3], [4, 5, 6]] -> [[1, 4], [2, 5], [3, 6]]