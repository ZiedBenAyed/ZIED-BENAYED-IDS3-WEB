
const notes = [12, 5, 17, 9, 20];
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
const triDesc = [...notes].sort((a,b) => b - a);
const filtrées = notes.filter(n => n >= 10);

console.log('moyenne =', moyenne);
console.log('triDesc =', triDesc);
console.log('filtrées =', filtrées);

