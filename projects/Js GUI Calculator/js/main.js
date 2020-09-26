var display = document.getElementById('display');
var buttons = document.querySelectorAll('button');

let displayScreenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            displayScreenValue += buttonText;
            display.value = displayScreenValue;
        }
        else if (buttonText == 'C') {
            displayScreenValue = "";
            display.value = displayScreenValue;
        }
        else if (buttonText == '=') {
            display.value = eval(displayScreenValue);
        }
        else {
            displayScreenValue += buttonText;
            display.value = displayScreenValue;
        }

    })
}

