(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  posts.slice(0,5).forEach((p, i) => {
    console.log(`${i+1}. ${p.title}`);
  });
})();
