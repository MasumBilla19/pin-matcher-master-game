// generate pin
document.getElementById('generate-pin').addEventListener('click', function() {
    var randomNumber = getPin();

    var testOne = document.getElementById('get-value').value;
    if (testOne.length != 4) {
        alert('Please Enter Your Digit.')
    } else {
        document.getElementById('pin-value').value = randomNumber;
    }
});
function getPin() {
    var random = Math.random() * 10000;
    var pin = (random + '').split('.')[0];
    if (pin.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

// handle calculator button event
document.getElementById('digit-container').addEventListener('click', function(event) {
    var digit = event.target.innerText;

    if (isNaN(digit)) {
        // handle backspace
        if (digit === '<') {
            var typedInput = document.getElementById('get-value');
            typedInput.value = (typedInput.value).toString().slice(0, -1);
        } 
        // handle clear 
        else {
            var typedInput = document.getElementById('get-value');
            typedInput.value = '';
        }
    } else {
        var typedInput = document.getElementById('get-value');
        if ((typedInput.value).length != 4) {
            typedInput.value = typedInput.value + digit;
        }
    }
});

// submit pin
document.getElementById('submit-pin').addEventListener('click', function() {
    verifyPin();
});

function verifyPin() {
    var pin = document.getElementById('pin-value').value;
    var get = document.getElementById('get-value').value;

    if(get.length < 4) {
        var moreDigit = 4 - get.length;
        alert('Please Enter The ' + moreDigit + ' Digit.');
    } else if (pin.length != 4 || pin.length != 4) {
        alert('Please Enter The Generate Pin Button.');
    } else {
        if (pin === get) {
            displayMatchResult('block', 'none'); 
            document.getElementById('pin-value').value = '';  
        } else {
            displayMatchResult('none', 'block');
            document.getElementById('pin-value').value = '';
        }
    }
}

function displayMatchResult(correctStatus, incorrectStatus) {
    var correctPin = document.getElementById('correct-pin');
    correctPin.style.display = correctStatus;

    var correctPin = document.getElementById('incorrect-pin');
    correctPin.style.display = incorrectStatus;
}
















