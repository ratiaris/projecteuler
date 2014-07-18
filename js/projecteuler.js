/**
 * Created by benjaminratiarisolo on 17/07/14.
 */
var multiples = function multiples(limit) {
    var sum = 0;
    for (var value = 1; value < limit; ++value) {
        if (value % 3 === 0 || value % 5 === 0) {
            sum += value;
        }
    }
    //console.log("The sum of all the multiples of 3 or 5 below " + limit + " is "+ sum);
    return sum;
}

var fibonacci = function fibonacci(limit) {
    var firstTerm = 1;
    var secondTerm = 2;
    var sum = secondTerm;
    while (secondTerm < limit) {
        var nextTerm = firstTerm + secondTerm;
        if (nextTerm % 2 === 0) {
            sum += nextTerm;
        }
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    }
    //console.log("The sum of the even-valued terms  of the Fibonacci suits not exceeding " + limit + " is " + sum);
    return sum;
}

var isPrime = function (number) {
    var limit = Math.floor(Math.sqrt(number));
    for (var i = 2; i < limit; ++i) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

var prime = function prime(initialValue) {
    var primeFactors = [];
    var maxPrimeFactor = 1;
    var value = initialValue;
    while (true) {
        //console.log("value: " + value);
        if (value === 1) {
            break;
        }
        var foundPrime = false;
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
                console.log("Strange: " + value + " is should be a prime but is not");
            }
            break;
        }

    }
    var checkPrimeFactor = 1;
    for (var index = 0; index < primeFactors.length; ++index) {
        checkPrimeFactor *= primeFactors[index];
    }
    if (checkPrimeFactor != initialValue) {
        console.log(checkPrimeFactor + " is different than " + initialValue);
        console.log("A problem occurs when decomposing " + initialValue + " into its prime factors: " + primeFactors);
    } else {
        //console.log("The greatest prime factor of " + initialValue + " is " + maxPrimeFactor);
    }
    return maxPrimeFactor;
}

var getInputValue = function (elementName) {
    var inputField = document.getElementsByName(elementName)[0];
    var value = inputField.value;
    if (value === "") {
        return inputField.placeholder;
    }
    return value;
}

var setAnswer = function (elementId, value) {
    var answerElement = document.getElementById(elementId);
    answerElement.innerHTML = "The answer is <strong>" + value + "</strong>.";
    answerElement.style.display = "inline";
}

var setCallback = function (operation) {
    var label = operation.name;
    var inputLabel = label + "Input";
    var callback = function () {
        setAnswer(label + "Answer", operation(getInputValue(inputLabel)));
        return false;
    };
    document.getElementById(label).onclick = callback;
    document.getElementsByName(inputLabel)[0].onkeydown = function(event) {
        event = event || window.event;
        var keyCode = event.which || event.keyCode;
        console.log(keyCode);
        if (keyCode == 13) {
            callback();
            return false;
        }
        return true;
    };
};

setCallback(multiples);
setCallback(fibonacci);
setCallback(prime);
