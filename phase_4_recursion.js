function range(start, end) {
  if(start === end) {
    return [end];
  }
  else {
    // return [start].concat(range(start + 1, end));
    return range(start + 1, end).unshift(start);
  };
};

console.log(range(1, 4));