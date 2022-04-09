import { FizzBuzzItem } from './FizzBuzzItem';

export class Fizzbuzz {
	public constructor (readonly name: string = 'Fizzbuzz') {
		this.name = Fizzbuzz.nameIsValid(name) ? name : 'INVALID-NAME';
	}

	public evaluate (value: number): FizzBuzzItem {
		if (!Fizzbuzz.valueIsDivByThreeAndFive(value)) {
			return value;
		}
		if (!Fizzbuzz.nameIsValid(this.name)) {
			return false;
		}

		return this.name;
	}

	private static nameIsValid (name: string): boolean {
		return name === 'Fizzbuzz' || name === 'Blizzblubb';
	}

	private static valueIsDivByThreeAndFive (value: number) {
		return value % 3 === 0 && value % 5 === 0;
	}

	public toString (): string {
		return `${this.name}`;
	}
}
