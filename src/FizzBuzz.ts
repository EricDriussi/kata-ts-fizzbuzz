export class FizzBuzz {
	public static run (): string[] {
		const output: string[] = [];

		for (let number = 1; number < 17; number++) {
			output.push(this.replace(number));
		}
		return output;
	}

	private static replace (currentNumber: number): string {
		if (currentNumber % 3 === 0) {
			return 'Fizz';
		} else {
			return String(currentNumber);
		}
	}
}
