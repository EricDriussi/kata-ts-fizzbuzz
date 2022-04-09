import { FizzBuzzItem } from './FizzBuzzItem';

export class Fizz {
	private readonly name: string;

	public constructor (name: string = 'Fizz') {
		if (Fizz.nameIsValid(name)) {
			this.name = name;
		} else {
			this.name = 'INVALID-NAME';
		}
	}

	public evaluate (value: number): FizzBuzzItem {
		if (!Fizz.valueIsDivByThree(value)) {
			return value;
		}
		if (Fizz.nameIsValid(this.name)) {
			return this.name;
		}

		return false;
	}

	private static nameIsValid (name: string): boolean {
		return name === 'Fizz' || name === 'Blizz';
	}

	public toString (): string {
		return `${this.name}`;
	}

	private static valueIsDivByThree (value: number) {
		return value % 3 === 0;
	}
}
