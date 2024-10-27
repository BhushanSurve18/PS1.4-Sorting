const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.json());

// Exercise 1

let numbers = [2, 5, 10, 6, 4];

function numbersSortByAsecending(number1, number2) {
  return number1 - number2;
}

app.get('/sort/ascending-order', (req, res) => {
  let numbersCopy = numbers.slice();
  numbersCopy.sort(numbersSortByAsecending);
  console.log(numbersCopy);
});

// Exercise 2

const ages = [32, 21, 45, 29, 39];

function ageSortByDescending(age1, age2){
  return age2 - age1;
}

app.get("/ages/sort-descending", (req,res)=>{
  let agesCopy = ages.slice();
  agesCopy.sort(ageSortByDescending)
  console.log(agesCopy)
})

// Exercise 3

function priceSortByExpensiveToLeast(price1, price2){
  return price2 - price1
}

const prices = [99, 150, 75, 120, 200];

app.get("/prices/expensive-to-least", (req,res)=>{
  let pricescopy = prices.slice()
  pricescopy.sort(priceSortByExpensiveToLeast)
  console.log(pricescopy)
})

// Exercise 4

const projects = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' }
];

function projectsSortedByStatusandDuration(project1, project2){
  return project1.duration - project2.duration;
}

app.get("/project/projects-sorted", (req,res)=>{
  let projectsCopy = projects.slice()
  const result = projectsCopy.filter(projectsCopy=>projectsCopy.status ==="ongoing").sort(projectsSortedByStatusandDuration)
  console.log(result)
})

//Exercise 5

function projectsSortedByStatusandDurationAscending(project1, project2){
  return project1.duration - project2.duration;
}

app.get("/project/projects-sorted-Status", (req,res)=>{
  let projectsCopy = projects.slice()
  const result = projectsCopy.filter(projectsCopy=>projectsCopy.status ==="completed").sort(projectsSortedByStatusandDurationAscending)
  console.log(result)
})

//Exercise 6

function projectSortedByDuration(project1, project2){
  return project1.duration - project2.duration;
}

app.get("/projects/sorted-by-duration", (req,res)=>{
  let projectcopy = projects.slice(projectSortedByDuration)
  projectcopy.sort(projectSortedByDuration)
  console.log(projectcopy)
})

// Exercise 7

const gadgets = [
  { name: 'iPhone', brand: 'Apple', quantity: 2 },
  { name: 'Galaxy S21', brand: 'Samsung', quantity: 5 },
  { name: 'iPad', brand: 'Apple', quantity: 3 },
  { name: 'Pixel 5', brand: 'Google',quantity: 1 }
];

function gadgetSortByBrand(gadget1, gadget2){
 return gadget1.quantity - gadget2.quantity;
}

app.get("/gadgets/sorted-by-brand", (req,res)=>{
  let gadgetsCopy = gadgets.slice();
  let result = gadgetsCopy.filter(gadget=>gadget.brand==="Apple").sort(gadgetSortByBrand)
  console.log(result);
})

// Exercise 8
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 800 },
  { name: 'Tablet', price: 600 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 100 }
];

function poductSortByPrice(product1, product2){
  return product1.price - product2.price
}

app.get("/products/sorted-By-price", (req,res)=>{
  let productsCopy = products.slice()
  productsCopy.sort(poductSortByPrice)
  console.log(productsCopy)
})

//Exercise 9

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Honda', model: 'Accord', year: 2008 },
  { make: 'Tesla', model: 'Model 3', year: 2020 },
  { make: 'Ford', model: 'Fusion', year: 2009 }
];

function carSortByYear(car1, car2){
  return car1.year - car2.year
}

app.get("/cars/sorted-by-year", (req,res)=>{
  let carsCopy= cars.slice()
    carsCopy.sort(carSortByYear)
    console.log(carsCopy)
  
})

//Exercise 10

const athletes = [
  { name: 'John', score: 85 },
  { name: 'Mike', score: 92 },
  { name: 'Sara', score: 88 },
  { name: 'Linda', score: 95 }
];

function sortAthletesByScore(athlet1, athlet2){
  return athlet1.score - athlet2.score
}

app.get("/athletes/sort-by-score", (req,res)=>{
  let athletesCopy = athletes.slice()
  let result = athletesCopy.filter(athlete => athlete.score > 90).sort(sortAthletesByScore)
  console.log(result)
})

// Exercise 11

const students = [
  { name: 'Alex', grade: 'B', marks : 75 },
  { name: 'Bella', grade: 'A',marks : 90 },
  { name: 'Chris', grade: 'C', marks : 58 },
  { name: 'Diana', grade: 'A', marks : 80 }
];

function sortStudentByMarks(student1,student2){
  return student2.marks - student1.marks
}

app.get("/students/sort-by-marks", (req,res)=>{
  let studentsCopy = students.slice();
  let result = studentsCopy.filter(student=>student.grade==="A").sort(sortStudentByMarks)
  console.log(result)
})

//Exercise 12

const employees = [
  { name: 'Raman', department: 'Engineering', salary: 70000 },
  { name: 'Samiksha', department: 'Marketing', salary: 55000 },
  { name: 'Ronak', department: 'Engineering', salary: 80000 },
  { name: 'Kevin', department: 'Marketing', salary: 50000 },
  { name: 'Siddharth', department: 'Sales', salary: 60000 }
];

function employeeSortBySalary(employee1, employee2){
  return employee2.salary - employee1.salary
}

app.get("/employees/sort-by-salary", (req,res)=>{
  let employeesCopy = employees.slice()
  let result = employeesCopy.filter(employee=>employee.department==="Engineering").sort(employeeSortBySalary)
  console.log(result)
})

//Exercise 13


function employeeSortByMarketingSalary(employee1, employee2){
  return employee1.salary - employee2.salary
}

app.get("/employees/sort-by-department", (req,res)=>{
  let employeesCopy = employees.slice()
  let result = employeesCopy.filter(employee=>employee.department==="Marketing").sort(employeeSortByMarketingSalary)
  console.log(result)
})

//Exercise 14

const employees1 = [
  { name: 'Eve', department: 'Engineering', salary: 70000 },
  { name: 'Sam', department: 'Marketing', salary: 55000 },
  { name: 'John', department: 'Engineering', salary: 80000 },
  { name: 'Lucy', department: 'Sales', salary: 60000 }
];

function employeeSortBySalaryDescending(employee1, employee2){
  return employee2.salary - employee1.salary 
}

app.get("/employees1/sort-by-salary",(req,res)=>{
  let employee1Copy = employees1.slice()
  let result = employee1Copy.filter(employee=>employee.salary>"60000").sort(employeeSortBySalaryDescending)
  console.log(result)
})

// Exercise 15

function employeeSortBySalaryAscending(employee1, employee2){
  return employee1.salary - employee2.salary 
}

app.get("/employees1/sort-by-salary-ascending",(req,res)=>{
  let employee1Copy = employees1.slice()
  let result = employee1Copy.filter(employee=>employee.salary <"70000").sort(employeeSortBySalaryAscending)
  console.log(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
