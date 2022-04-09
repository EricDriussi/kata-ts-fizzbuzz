import { FizzBuzzItem } from './FizzBuzzItem';

export class Buzz {
	public constructor (readonly name: string = 'Buzz') {
		this.name = Buzz.nameIsValid(name) ? name : 'INVALID-NAME';
	}

	public evaluate (value: number): FizzBuzzItem {
		if (!Buzz.valueIsDivByFive(value)) {
			return value;
		}
		if (!Buzz.nameIsValid(this.name)) {
			return false;
		}

		return this.name;
	}

	private static nameIsValid (name: string): boolean {
		return name === 'Buzz' || name === 'Blubb';
	}

	private static valueIsDivByFive (value: number) {
		return value % 5 === 0;
	}

	public toString (): string {
		return `${this.name}`;
	}
}
