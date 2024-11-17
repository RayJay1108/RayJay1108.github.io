const time = new Date().getHours();
let greeting;
    if (time <= 6) {
    greeting = "Good morning";
    } 
    else if (time <= 12) {
    greeting = "Good Afternoon";
    } 
    else if (time <= 18) {
    greeting = "Good evening";
    }
    else {
        greeting = "Hello";
    }

document.getElementById('greet').innerHTML = greeting; 


document.addEventListener('DOMContentLoaded', function() {
        var currentYear = new Date().getFullYear();
        document.getElementById('year').textContent = currentYear;
       }); 

alert ('Hello World!')
