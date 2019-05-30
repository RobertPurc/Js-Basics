// function calculateBill(billCosts) {
//     var billFifty = 50;
//     var billMore = 200;

//     if (billCosts <= billFifty) {
//         var fiftyDevided = (billCosts * 0.2) + billCosts;
//         console.log(fiftyDevided, 'ponizej');
//     } else if (billCosts <= billMore) {
//         var moreDevided = (billCosts * 0.15) + billCosts;
//         console.log(moreDevided, 'pomiedzy');
//     } else {
//         var highDevided = (billCosts * 0.10) + billCosts;
//         console.log(highDevided, 'powyzej');
//     } 
// }
// calculateBill(200);

function tipCalculator(bill) {
    var precentage;
    if (bill < 50) {
        precentage = .2;
    } else if (bill >= 50 && bill < 200) {
        precentage = .15;
    } else {
        precentage = .1;
    }

    return precentage * bill;
}

// console.log(tipCalculator(100));

var bills = [124, 48, 268];
var tip = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

var finalValues = [bills[0] + tip[0],
    bills[1] + tip[1],
    bills[2] + tip[2]
]

console.log(tip);
console.log(finalValues);