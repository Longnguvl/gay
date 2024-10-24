const friends = new Set();

friends.add('Alice');
friends.add('Bob');
friends.add('Charlie');
friends.add('Alice'); 

console.log(friends); 

console.log(friends.has('Bob')); 


friends.delete('Charlie');
console.log(friends); 

friends.forEach(friend => {
  console.log(`Bạn của tôi: ${friend}`);
});
