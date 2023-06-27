function toggleText(buttonIndex) {
    var textElement = document.getElementById('text' + buttonIndex);
    var buttonText = document.getElementsByClassName('button')[buttonIndex - 1];
    var textElements = document.getElementsByClassName('button-text');
    for (var i = 0; i < textElements.length; i++) {
      textElements[i].style.display = 'none';
    }
    textElement.style.display = 'block';
    buttonText.scrollIntoView();
  }
  


/***** */
function convertUnits() {
    var value = parseFloat(document.getElementById('value').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = document.getElementById('result');

    if (fromUnit =='mm' && toUnit =='mm') {
        result.textContent = `${value} mm = ${value} mm`;
    }
    else if (fromUnit =='mm' && toUnit =='cm') {
        result.textContent = `${value} mm = ${value / 10} cm`;
    }
    else if (fromUnit =='mm' && toUnit =='m') {
        result.textContent = `${value} mm = ${value / 1000} m`;
    }
    else if (fromUnit =='mm' && toUnit =='km') {
        result.textContent = `${value} mm = ${value / 1000000} km`;
    }

    else if (fromUnit =='cm' && toUnit =='mm') {
        result.textContent = `${value} cm = ${value * 10} mm`;
    }
    else if (fromUnit =='cm' && toUnit =='cm') {
        result.textContent = `${value} cm = ${value} cm`;
    }
    else if (fromUnit =='cm' && toUnit =='m') {
        result.textContent = `${value} cm = ${value / 100} m`;
    } 
    else if (fromUnit =='cm' && toUnit =='km') {
        result.textContent = `${value} cm = ${value / 100000} km`;
    }

    else if (fromUnit =='m' && toUnit =='mm') {
        result.textContent = `${value} m = ${value * 1000} mm`;
    }
    else if (fromUnit =='m' && toUnit =='cm') {
        result.textContent = `${value} m = ${value * 100} cm`;
    }  
    else if (fromUnit =='m' && toUnit =='m') {
        result.textContent = `${value} m = ${value} m`;
    }
    else if (fromUnit =='m' && toUnit =='km') {
        result.textContent = `${value} m = ${value / 1000} km`;
    }

    else if (fromUnit =='km' && toUnit =='mm') {
        result.textContent = `${value} km = ${value * 1000000} mm`; 
    }
    else if (fromUnit =='km' && toUnit =='cm') {
        result.textContent = `${value} km = ${value * 100000} cm`;
    }
    else if (fromUnit =='km' && toUnit =='m') {
        result.textContent = `${value} km = ${value * 1000} m`;
    }
    else if (fromUnit =='km' && toUnit =='km') {
        result.textContent = `${value} km = ${value} km`;
    }
    else{
        result.textContent = `Please select a unit to convert from and a unit to convert to.`;
    }
  }

function convertUnits2() {
    var weight = parseFloat(document.getElementById('weight').value);
    var fromUnit2 = document.getElementById('fromUnit2').value;
    var toUnit2 = document.getElementById('toUnit2').value;
    var result2 = document.getElementById('result2');

    if (fromUnit2 =='mg' && toUnit2 =='mg') {
        result2.textContent = `${weight} mg = ${weight} mg`;
    }
    else if (fromUnit2 =='mg' && toUnit2 =='g') {
        result2.textContent = `${weight} mg = ${weight / 1000} g`;
    }
    else if (fromUnit2 =='mg' && toUnit2 =='kg') {
        result2.textContent = `${weight} mg = ${weight / 1000000} kg`;
    }

    else if (fromUnit2 =='g' && toUnit2 =='mg') {
        result2.textContent = `${weight} g = ${weight * 1000} mg`;
    }
    else if (fromUnit2 =='g' && toUnit2 =='g') {
        result2.textContent = `${weight} g = ${weight} g`;
    }
    else if (fromUnit2 =='g' && toUnit2 =='kg') {
        result2.textContent = `${weight} g = ${weight / 1000} kg`;
    }

    else if (fromUnit2 =='kg' && toUnit2 =='mg') {
        result2.textContent = `${weight} kg = ${weight * 1000000} mg`;
    }
    else if (fromUnit2 =='kg' && toUnit2 =='g') {
        result2.textContent = `${weight} kg = ${weight * 1000} g`;
    }
    else if (fromUnit2 =='kg' && toUnit2 =='kg') {
        result2.textContent = `${weight} kg = ${weight} kg`;
    }
    else{
        result2.textContent = `Please select a unit to convert from and a unit to convert to.`;
    }
    }

function convertUnits3() {
    var temp = parseFloat(document.getElementById('temp').value);
    var fromUnit3 = document.getElementById('fromUnit3').value;
    var toUnit3 = document.getElementById('toUnit3').value;
    var result3 = document.getElementById('result3');

    if (fromUnit3 =='c' && toUnit3 =='c') {
        result3.textContent = `${temp} °C = ${temp} °C`;
    }
    else if (fromUnit3 =='c' && toUnit3 =='f') {
        result3.textContent = `${temp} °C = ${temp * 9/5 + 32} °F`;
    }
    else if (fromUnit3 =='c' && toUnit3 =='k') {
        result3.textContent = `${temp} °C = ${temp + 273.15} K`;
    }

    else if (fromUnit3 =='f' && toUnit3 =='c') {
        result3.textContent = `${temp} °F = ${(temp - 32) * 5/9} °C`;
    }
    else if (fromUnit3 =='f' && toUnit3 =='f') {
        result3.textContent = `${temp} °F = ${temp} °F`;
    }
    else if (fromUnit3 =='f' && toUnit3 =='k') {
        result3.textContent = `${temp} °F = ${(temp - 32) * 5/9 + 273.15} K`;
    }

    else if (fromUnit3 =='k' && toUnit3 =='c') {
        result3.textContent = `${temp} K = ${temp - 273.15} °C`;
    }
    else if (fromUnit3 =='k' && toUnit3 =='f') {
        result3.textContent = `${temp} K = ${(temp - 273.15) * 9/5 + 32} °F`;
    }
    else if (fromUnit3 =='k' && toUnit3 =='k') {
        result3.textContent = `${temp} K = ${temp} K`;
    }
    else{
        result3.textContent = `Please select a unit to convert from and a unit to convert to.`;
    }
    }

