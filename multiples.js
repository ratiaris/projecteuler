/**
 * Created by benjaminratiarisolo on 13/07/14.
 */
var sum =0;
var limit = 1000;
for (var value = 1; value < limit; ++value) {
    if (value % 3 === 0 || value % 5 === 0) {
        sum += value;
    }
}
console.log("The sum of all the multiples of 3 or 5 below " + limit + " is "+ sum);
