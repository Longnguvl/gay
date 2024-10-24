const students = new Map();

students.set(1, { name: 'Alice', age: 20 });
students.set(2, { name: 'Bob', age: 22 });
students.set(3, { name: 'Charlie', age: 21 });

console.log(students.get(1)); 

console.log(students.has(2)); 

students.delete(3);
console.log(students); 

students.forEach((info, id) => {
  console.log(`ID: ${id}, Tên: ${info.name}, Tuổi: ${info.age}`);
});
