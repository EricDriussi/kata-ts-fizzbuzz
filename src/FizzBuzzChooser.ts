export class FizzBuzzChooser {
	public static fizzer (listOfNumbers: (number|string)[]) {
		for (let currentNumber = 1; currentNumber < 17; currentNumber++) {
			if (+listOfNumbers[currentNumber] % 3 === 0) {
				listOfNumbers[currentNumber] = 'Fizz';
			}
		}
		return listOfNumbers;
	};

	public static buzzer (listOfNumbers: (number|string)[]) {
		for (let currentNumber = 1; currentNumber < 17; currentNumber++) {
			if (+listOfNumbers[currentNumber] % 5 === 0) {
				listOfNumbers[currentNumber] = 'Buzz';
			}
		}
		return listOfNumbers;
	};

	public static fizzbuzzer (listOfNumbers: (number|string)[]) {
		for (let currentNumber = 1; currentNumber < 17; currentNumber++) {
			if (+listOfNumbers[currentNumber] % 3 === 0 && +listOfNumbers[currentNumber] % 5 === 0) {
				listOfNumbers[currentNumber] = 'Fizzbuzz';
			}
		}
		return listOfNumbers;
	};
}
