const express = require('express');
const app = express();

const students = [
  { name: 'Ahmed', age: 22, major: 'CS' },
  { name: 'Mostafa', age: 19, major: 'IT' },
  { name: 'Mohammed', age: 20, major: 'OR' }
];

app.get('/students', (req, res) => {
  let studentList = '<ul>';

  students.forEach(student => {
    const { name, age, major } = student;
    studentList += `<li>${name}, ${age}, ${major}</li>`;
  });

  studentList += '</ul>';

  res.send(studentList);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
