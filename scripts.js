// The application should first have an input form that collects the following:
// Employee First Name
// Employee Last Name
// ID Number
// Job Title
// Annual Salary
var firstName;
var lastName;
var ID;
var title;
var salary;
console.log("test,test");

var addName = function(){
  console.log('in addName');
  firstName = document.getElementById('first').value;
  lastName = document.getElementById('last').value;
  ID = document.getElementById('id').value;
  title = document.getElementById('title').value;
  salary = document.getElementById('salary').value;
};
