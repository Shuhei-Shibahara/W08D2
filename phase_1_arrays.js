Array.prototype.uniq = function(){
    let arr = [];
    this.forEach(el => {
        if (!arr.includes(el)){
            arr.push(el);
        };
    });
}