let smileys = [1,2,3,4,[5,6],7,[8,9,10]];
let flat = smileys.flat();
console.log(flat);
//multi level

let smileys2 = [1,2,3,4,[5,6],7,[8,9,['anis','rabbi'],10]];
let flat2 = smileys2.flat(Infinity);
console.log(flat2);