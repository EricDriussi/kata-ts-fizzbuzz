export class Fizzbuzz {
	private readonly name: string;

	public constructor (name: string = 'Fizzbuzz') {
		if (Fizzbuzz.nameIsValid(name)) {
			this.name = name;
		} else {
			this.name = 'INVALID-NAME';
		}
	}

	public evaluate (value: number): number | string | boolean {
		if (!Fizzbuzz.valueIsDivByThreeAndFive(value)) {
			return value;
		}
		if (Fizzbuzz.nameIsValid(this.name)) {
			return this.name;
		}

		return false;
	}

	private static nameIsValid (name: string): boolean {
		return name === 'Fizzbuzz' || name === 'Blizzblubb';
	}

	public toString (): string {
		return `${this.name}`;
	}

	private static valueIsDivByThreeAndFive (value: number) {
		return value % 3 === 0 && value % 5 === 0;
	}
}
