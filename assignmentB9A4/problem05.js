// function monthlySavings(array, num){
//     if(Array.isArray(array) === true  && (typeof num === 'number' && isNaN(num) === false)){
//         let total = 0, saving = 0;
//         let sum1 = 0;
//         let sum2 = 0;
//         for(item of array){
//             if(item >= 3000){
//                 sum1 += item - (item*20)/100;
//             }
//             else{
//                 sum2 += item;
//             }
//         }
//         total = sum1 + sum2;
//         saving = total - num;
//         return saving < 0 ? "earn more" : saving;
//     }
//     else{
//         return 'invalid input';
//     }   
// }
// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ));
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000 ));
// console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
function minimumDistance(x1, x2, x3) {
    // Sort the coordinates to find the median
    let friends = [x1, x2, x3].sort((a, b) => a - b);

    // The median will be the second element after sorting
    let meetingPoint = friends[1];

    // Calculate the total minimum distance
    let totalDistance = Math.abs(friends[0] - meetingPoint) + 
                        Math.abs(friends[1] - meetingPoint) + 
                        Math.abs(friends[2] - meetingPoint);

    return totalDistance;
}

// Example Usage:
console.log(minimumDistance(5, 5, 10)); // Output: 6
console.log(minimumDistance(8, 10, 15)); // Output: 20
