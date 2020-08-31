const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce(function(total, batches){ return batches + total })

// or 

// let totalBatteroes = batteryBatches.reduce(function(total, batches){ return batches + total }, 0)

// or

// let totalBatteries = batteryBatches.reduce((total, batches) => {
//     return batches + total
// })
