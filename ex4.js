const tab1 =[1,2,3];
const tab2 =[4,5,6];
const fusion = tab1.concat(tab2);
console.log(fusion);
const obj = { a: 1, b: 2 };
const objCopy = { ...obj, b: 99 }; // copie + modification
console.log('objCopie:', objCopy);