/**
 * Created by benjaminratiarisolo on 13/07/14.
 */

var firstTerm = 1;
var secondTerm = 2;
var limit = 4000000;
var sum = secondTerm;
while (secondTerm < limit) {
    var nextTerm = firstTerm + secondTerm;
    if (nextTerm % 2 === 0) {
        sum += nextTerm;
    }
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}
console.log("The sum of the even-valued terms  of the Fibonacci suits not exceeding " + limit + " is "+ sum);
