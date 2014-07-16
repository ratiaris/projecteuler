/**
 * Created by benjaminratiarisolo on 13/07/14.
 */
var isPrime = function(number) {
    var limit = Math.floor(Math.sqrt(number));
    for (var i = 2; i < limit; ++i) {
        //if (isPrime(i)) {
            if (number % i === 0) {
                return false;
            }
        //}
    }
    return true;
}

var primeFactors =[];
var maxPrimeFactor = 1;
var initialValue = 600851475143;
//var initialValue = prompt("Initial value?");
var value = initialValue;
while (true) {
    //console.log("value: " + value);
    if (value === 1) {
        break;
    }
    var foundPrime =false;
    for (var i = 2; i < value; ++i) {
        if (value % i === 0 && isPrime(i)) {
            if (i > maxPrimeFactor) {
                maxPrimeFactor = i;
            }
            //console.log(i);
            primeFactors.push(i);
            value /= i;
            foundPrime = true;
            break;
        }
    }
    if (!foundPrime) {
        if (isPrime(value)) {
            if (value > maxPrimeFactor) {
                maxPrimeFactor = value;
            }
            //console.log(value);
            primeFactors.push(value);
        } else {
            console.log("Strange: " + value +  " is should be a prime but is not");
        }
        break;
    }

}
var checkPrimeFactor = 1;
for (var index = 0; index < primeFactors.length; ++ index) {
    checkPrimeFactor *= primeFactors[index];
}
if (checkPrimeFactor !== initialValue) {
    console.log(checkPrimeFactor + " is different than " + initialValue);
    console.log("A problem occurs when decomposing " + initialValue + " into its prime factors: " + primeFactors);
} else {
    console.log("The greatest prime factor of " + initialValue + " is "+ maxPrimeFactor);
}
