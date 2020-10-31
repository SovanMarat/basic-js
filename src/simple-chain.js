const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr:[],

  getLength() {
   //this.arr.push(this.arr.length); если выводить  длину в цепочку
   this.arr.length; 
   return this;
  },
 addLink(value) {
   if (String(value)==='undefined') {
    this.arr.push(' ');
   } else {
this.arr.push(value);
}
return this;
  },
  removeLink(position) {
    if (position<1  || position>this.arr.length-1   || typeof(position)!=='number' || position!==Math.ceil(position)){
     // return false;
  //console.log('erorr');
  this.arr.length=0;
      throw Error;
    }
this.arr.splice(position-1,1);
return this;
  },
  reverseChain() {
this.arr.reverse();
return this;
  },
  finishChain() {
  let result='';
  let aaa='';
//console.log(this.arr);
result=this.arr;
//console.log(result);

for (let i=0; i<result.length; i++){
if (i===result.length-1){
  aaa+=`( ${result[i]} )`;
  //console.log(aaa);
 // console.log(`aaa=${aaa}`);
  //return aaa;
} else {
aaa+=`( ${result[i]} )~~`;
}
}
//console.log(aaa);
this.arr.length=0;
////console.log(aaa);
//console.log(this.arr.length);
return aaa;
  }
};

module.exports = chainMaker;

 //chainMaker.addLink(0).addLink(1).addLink(true).addLink(3).removeLink(2).reverseChain().finishChain();
//  console.log(chainMaker.arr);
