export class FizzBuzzChooser {
	public static fizzer (listOfNumbers: (number|string)[]): (number|string)[] {
		for (const currentNumber in listOfNumbers) {
			if (+listOfNumbers[currentNumber] % 3 === 0) {
				listOfNumbers[currentNumber] = 'Fizz';
			}
		}
		return listOfNumbers;
	};

	public static buzzer (listOfNumbers: (number|string)[]): (number|string)[] {
		for (const currentNumber in listOfNumbers) {
			if (+listOfNumbers[currentNumber] % 5 === 0) {
				listOfNumbers[currentNumber] = 'Buzz';
			}
		}
		return listOfNumbers;
	};

	public static fizzbuzzer (listOfNumbers: (number|string)[]): (number|string)[] {
		for (const currentNumber in listOfNumbers) {
			if (+listOfNumbers[currentNumber] % 3 === 0 && +listOfNumbers[currentNumber] % 5 === 0) {
				listOfNumbers[currentNumber] = 'Fizzbuzz';
			}
		}
		return listOfNumbers;
	};
}
