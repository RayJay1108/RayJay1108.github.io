// greetings!! //
const time = new Date().getHours();
let greeting;
    if (time < 12 ) {
    greeting = "Good morning";
    } 
    else if (time < 18) {
    greeting = "Good Afternoon";
    } 
    else if (time < 24) {
    greeting = "Good evening";
    }
   

document.getElementById('greet').innerHTML = greeting; 

// footer year // 
document.addEventListener('DOMContentLoaded', function() {
        var currentYear = new Date().getFullYear();
        document.getElementById('year').textContent = currentYear;
       }); 

// sanity check //        
alert ('Hello World!')

// button hover function // 

function hover() {
    document.getElementById('btn-alert').innerHTML = "Watsuuupp"
}

function Watsuuupp() {
    document.getElementById('btn-alert').innerHTML = "Heyo"
}

function myFunction() {
    alert("Hello World!");
  } 


