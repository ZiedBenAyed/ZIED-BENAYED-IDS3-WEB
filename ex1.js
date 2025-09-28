console.log('--- Exercice 1 : Variables et portée ---');

var a = 'var';
let b = 'let';
const c = 'const';

console.log('Avant block:', a, b, c);

{
  var a = 'var1';
  let b = 'let1';
  const c = 'const1';
  console.log('Dans block:', a, b, c);
}

console.log('Après block:', a, b, c);

try {
  c = 'nouvelle valeur';
} catch (err) {
  console.log('Réaffectation de const -> erreur:', err.message);
}
