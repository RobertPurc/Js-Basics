
var massJohn = prompt("podaj wage johna w kg");
var heightJohn = prompt("podaj wzrost Johna w metrach");
var massBrain = prompt("podaj wage Braina w kg");
var heightBrain = prompt("podaj wzrost Brainaw w metrach");

massJohn /= heightJohn*heightJohn;
massBrain /= heightBrain*heightBrain;

console.log(massJohn, massBrain);

if (massJohn > massBrain){
    console.log('John jest grubszy :)')
}

if (massJohn < massBrain){
    console.log('Brain jest grubszy :)')
}

if (massJohn == massBrain){
    console.log('takie samo BMI!')
}




