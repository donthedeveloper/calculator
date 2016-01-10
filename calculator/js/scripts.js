// TEST

var previousNumber;
var currentNumber;
var currentPhrase;

var displayText;
var totalNumber;

previousNumber = null;
currentNumber = null;
currentPhrase = null;

displayText = "0";

// Run through all of the button elements and add an onClick listener to each one
var buttonsArray = document.getElementsByTagName('button');
for (var i = 0; i < buttonsArray.length; i++) {
		buttonsArray[i].addEventListener('click', function() {
			switch (this.id) {
				case "zero":
					previousNumberTransfer();
					currentNumber = "0";
					currentPhraseUpdate()
					addDisplayNumber();
					troubleshoot();
					break;
				case "one":
					previousNumberTransfer();
					currentNumber = "1";
					currentPhraseUpdate();
					addDisplayNumber();
					troubleshoot();
					break
				case "two":
					previousNumberTransfer();
					currentNumber = "2";
					currentPhraseUpdate();
					addDisplayNumber();
					troubleshoot();
					break
				case "three":
					previousNumberTransfer();
					currentNumber = "3";
					currentPhraseUpdate();
					addDisplayNumber();
					troubleshoot();
					break
				case "four":
					previousNumberTransfer();
					currentNumber = "4";
					currentPhraseUpdate();
					addDisplayNumber();
					troubleshoot();
					break
				case "five":
					previousNumberTransfer();
					currentNumber = "5";
					currentPhraseUpdate();
					addDisplayNumber();
					troubleshoot();
					break
				case "six":
					previousNumberTransfer();
					currentNumber = "6";
					currentPhraseUpdate();
					addDisplayNumber();
					troubleshoot();
					break
				case "seven":
					previousNumberTransfer();
					currentNumber = "7";
					currentPhraseUpdate();
					addDisplayNumber();
					troubleshoot();
					break
				case "eight":
					previousNumberTransfer();
					currentNumber = "8";
					currentPhraseUpdate();
					addDisplayNumber();
					troubleshoot();
					break
				case "nine":
					previousNumberTransfer();
					currentNumber = "9";
					currentPhraseUpdate();
					addDisplayNumber();
					troubleshoot();
					break
				case "divide":
					previousNumberTransfer();
					currentNumber = "/";
					currentPhraseClear();
					addDisplayCalculation();
					troubleshoot();
					break
				case "multiply":
					previousNumberTransfer();
					currentNumber = "*";
					currentPhraseClear();
					addDisplayCalculation();
					troubleshoot();
					break
				case "subtract":
					previousNumberTransfer();
					currentNumber = "-";
					currentPhraseClear();
					addDisplayCalculation();
					troubleshoot();
					break
				case "add":
					previousNumberTransfer();
					currentNumber = "+";
					currentPhraseClear();
					addDisplayCalculation();
					troubleshoot();
					break
				case "decimal":
					if ( addDisplayDecimal() === true ) {
						currentPhraseUpdate();
					}
					troubleshoot();
					break
					// Keep working on what happens when = is pressed
				case "equals":
					displayText = eval(displayText);
					// This changes the eval(not string) to a string, allowing script to search it for other values
					displayText = displayText.toString();
					previousNumber = null;
					currentNumber = displayText;
					currentPhrase = displayText;
					troubleshoot();
					break
				case "clear":
					previousNumber = null;
					currentNumber = null;
					currentPhrase = null;
					displayText = "0";
					troubleshoot();
					break
			}

			document.getElementById("displayText").innerHTML = displayText;
		})
}



function addDisplayNumber() {
	// If displayText is fresh (no built up evaluation)
	if (previousNumber == null) {
		displayText = currentNumber;
	} else {
		displayText = displayText + currentNumber;
	}
	// If previousNumber is an integer
	// } else if ( !isNaN(previousNumber) ) {
	// 	displayText = displayText + currentNumber;
	// If previousNumber is a decimal
	// } else if (previousNumber == ".") {
	// 	displayText = displayText + currentNumber;
	// }
}

function addDisplayDecimal() {
	// If adding a decimal in the beginning, utilize 0
	if ( currentPhrase == null ) {
		currentPhrase = "0";
	}
	// If there IS NOT already a decimal in the currentPhrase
	if ( currentPhrase.indexOf(".") == -1 ) {
		previousNumberTransfer();
		currentNumber = ".";
		displayText = displayText + currentNumber;
		return true;
	// If there IS already a decimal in the currentPhrase
	} else if ( currentPhrase.indexOf(".") > -1 ) {
		return false;
	}
}

function addDisplayCalculation() {
	// If previous number is a decimal, add a 0 after the decimal
	if (previousNumber == ".") {
		displayText = displayText + "0";
		previousNumber = "0";
	}

	// If previous number IS an integer
	if ( !isNaN(previousNumber) ) {
		displayText = displayText + " " + currentNumber + " ";
	}
}

function currentPhraseUpdate() {
	// If currentPhrase is empty due to a fresh application load
	if (currentPhrase == null) {
		currentPhrase = currentNumber;
	// If currentPhrase already has values in it
	} else if (currentNumber != null) {
		currentPhrase = currentPhrase + currentNumber;
	}
}

function currentPhraseClear() {
	currentPhrase = null;
}

// Transfer currentNumber into previousNumber (most likely used multiple buttons have been pressed since page load)
function previousNumberTransfer() {
	previousNumber = currentNumber;
}


function troubleshoot() {
	console.log(previousNumber);
	console.log(currentNumber);
	console.log(currentPhrase);
}