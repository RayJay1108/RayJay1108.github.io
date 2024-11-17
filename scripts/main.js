// greetings!! //
const time = new Date().getHours();
let greeting;
    if (time < 12 ) {
    greeting = "Good Morning 🌞";
    document.getElementById('greet').style.color =  'blue';
    
    } 
    else if (time < 18) {
    greeting = "Good Afternoon 🌅";
    document.getElementById('greet').style.color = 'orange';
   
    } 
    else if (time < 24) {
    greeting = "Good Evening 🌙";
    document.getElementById('greet').style.color = 'Purple'; 
    
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

  // Console log current date and time // 
  console.log(new Date().toString());   

//for loop lit // 

for (let i = 1; i <= 12; i = i + 1) {
    const listItem = document.createElement('li');

    if (i % 2 === 0) {
        listItem.textContent = ('even');
    }

    else {
        listItem.textContent = ('odd');
    }
    document.getElementById("numbers").appendChild(listItem);
};

