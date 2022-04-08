export class FizzBuzz {
	public static runFor (count: number = 100): (number | string)[] {
		const output: (number|string)[] = [];

		for (let number = 1; number <= count; number++) {
			output.push(this.replace(number));
		}
		return output;
	}

	private static replace (currentNumber: number): (number|string) {
		if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
			return 'Fizzbuzz';
		} else if (currentNumber % 3 === 0) {
			return 'Fizz';
		} else if (currentNumber % 5 === 0) {
			return 'Buzz';
		} else {
			return currentNumber;
		}
	}
}
