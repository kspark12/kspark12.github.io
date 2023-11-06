let person = [];
let salaries = [];

function addSalary () {
    const name = document.getElementById("employee").value;
    const salary = document.getElementById("salary").value;

    if(name == "" || salary == "" ||isNaN(salary)) {
        alert("Please enter a valid name and numeric salary amount.");
    }else{
        person.push(name);
        salaries.push(parseInt(salary));
        document.getElementById("salary").value = "";
        document.getElementById("employee").value = "";        

    }
}

function displayResults() {
let sum = 0;
let highest = salaries[0];

for(let i = 0; i < salaries.length; i++) {
    sum += salaries[i];
    if(salaries[i] > highest) {
        highest = salaries[i];
    }
}
const average = sum / salaries.length;

const resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = `<h2>Results</h2>
                        <p>Average Salary: ${average}</p>
                        <p>Highest Salary: ${highest}</p>`;
}

function displaySalary () {
   const table = document.getElementById("results_table");
   table.innerHTML = `<tr><th>Employee || </th><th>Yearly Salary</th></tr>`;
   for(let i = 0; i < person.length; i++) {
       table.innerHTML += `<tr><td>${person[i]}</td><td>${salaries[i]}</td></tr>`;
   }
}

window.onload = function() {
    document.getElementById("employee").focus();
}