import { FizzBuzzItem } from './FizzBuzzItem';

export class Buzz {
	private readonly name: string;

	public constructor (name: string = 'Buzz') {
		if (Buzz.nameIsValid(name)) {
			this.name = name;
		} else {
			this.name = 'INVALID-NAME';
		}
	}

	public evaluate (value: number): FizzBuzzItem {
		if (!Buzz.valueIsDivByFive(value)) {
			return value;
		}
		if (Buzz.nameIsValid(this.name)) {
			return this.name;
		}

		return false;
	}

	private static nameIsValid (name: string): boolean {
		return name === 'Buzz' || name === 'Blubb';
	}

	public toString (): string {
		return `${this.name}`;
	}

	private static valueIsDivByFive (value: number) {
		return value % 5 === 0;
	}
}
