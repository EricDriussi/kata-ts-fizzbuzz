import { FizzBuzzItem } from './FizzBuzzItem';

export class Fizz {
	public constructor (readonly name: string = 'Fizz') {
		this.name = Fizz.nameIsValid(name) ? name : 'INVALID-NAME';
	}

	public evaluate (value: FizzBuzzItem): FizzBuzzItem {
		if (!Fizz.valueIsDivByThree(+value)) {
			return value;
		}
		if (!Fizz.nameIsValid(this.name)) {
			return false;
		}

		return this.name;
	}

	private static nameIsValid (name: string): boolean {
		return name === 'Fizz' || name === 'Blizz';
	}

	private static valueIsDivByThree (value: number) {
		return value % 3 === 0;
	}

	public toString (): string {
		return `${this.name}`;
	}
}
