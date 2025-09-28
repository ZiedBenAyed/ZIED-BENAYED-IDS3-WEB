const wait = ms => new Promise(res => setTimeout(res, ms));

(async () => {
  console.log('Début', new Date().toISOString());
  await wait(2000);
  console.log('Fin', new Date().toISOString());
})();
