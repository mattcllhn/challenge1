// The application should first have an input form that collects the following:
// Employee First Name
// Employee Last Name
// ID Number
// Job Title
// Annual Salary

// console.log("test,test");
var employeeList=[];
var documentIds=['first','last','id','title','salary'];
                                                //creates an object out of employe info,adds to array, clears inputs
var addInfo = function(){
  // console.log('in addInfo');

  var employeeInfo={
  firstName : document.getElementById('first').value,
  lastName : document.getElementById('last').value,
  ID : document.getElementById('id').value,
  title : document.getElementById('title').value,
  salary : Number(document.getElementById('salary').value)
};//end of employeeInfo object

//forin loop that makes sure all fields are filled in and clears inputs


// console.log(employeeInfo);
  employeeList.push(employeeInfo);
  // console.log(employeeList);
                                                      // clears inputs
  for (var i = 0; i < documentIds.length; i++) {
  document.getElementById(documentIds[i]).value=""
  }//end of clear inputs
  empDisplay();
};//end of addInfo
                                                  //appends information to the DOM
var empDisplay=function(){
  document.getElementById('empDiv').innerHTML ="";
  // console.log('in empDisplay');
  console.log(employeeList);
  for (var i = 0; i < employeeList.length; i++) {
    var emp=employeeList[i];
    var toHtml='<h2>'+emp.firstName+' '+emp.lastName+'</h2><br>ID Number: '+emp.ID+'</br><br>Title: '+emp.title+'</br><br>Salary: '+emp.salary+'</br>'
    var fireButton='<button onclick="fire()">Fire this jabroni</button>';

    document.getElementById('empDiv').innerHTML += toHtml;
    document.getElementById('empDiv').innerHTML +=fireButton;
    }//end of loop
salaryCalculator();
};//end of empDisplay
                                              //takes in salaries and outputs total monthly cost
var salaryCalculator=function(){
  var sal=0;
  for (var i = 0; i < employeeList.length; i++) {
    sal+=Number(employeeList[i].salary);
    console.log(sal);
  }//end of loop
    var toHtml= '<br id=salaryTicker>Total Monthy Salary: '+sal/12+'</br>'
    document.getElementById('empDiv').innerHTML += toHtml;

};//end of salaryCalculator


var fire=function(index){
// console.log(employeeList[index].name+' has been fired');
employeeList.splice(index,1);
empDisplay();
};//end of fire
//function that removes employee info from the DOM
