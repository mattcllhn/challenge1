// The application should first have an input form that collects the following:
// Employee First Name
// Employee Last Name
// ID Number
// Job Title
// Annual Salary

console.log("test,test");
var employeeList=[];
var documentIds=['first','last','id','title','salary'];
// var employeeInfo{firstname:,lastName:,ID:,title:,salary:};
                                                //creates an object out of employe info,adds to array, clears inputs
var addInfo = function(){
  console.log('in addInfo');

  var employeeInfo={
  firstName : document.getElementById('first').value,
  lastName : document.getElementById('last').value,
  ID : document.getElementById('id').value,
  title : document.getElementById('title').value,
  salary : document.getElementById('salary').value
};//end of employeeInfo object
// console.log(employeeInfo);
  employeeList.push(employeeInfo);
  // console.log(employeeList);
                                                      // clear inputs
  for (var i = 0; i < documentIds.length; i++) {
  document.getElementById(documentIds[i]).value=""
  }//end of clear inputs
};//end of addInfo function

//appends information to the DOM
//function that calculates salaries and reports monthly total cost
//function that removes employee info from the DOM
