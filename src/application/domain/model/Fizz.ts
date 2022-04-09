export class Fizz {
	private readonly name: string;

	public constructor (value: number, name: string = 'Fizz') {
		const fizzIsValid = Fizz.hasValidName(name) && Fizz.hasValidValue(value);
		if (fizzIsValid) {
			this.name = name;
		} else {
			this.name = 'WRONG';
		}
	}

	private static hasValidName (name: string): boolean {
		return name === 'Fizz' || name === 'Blizz';
	}

	public toString (): string {
		return `${this.name}`;
	}

	private static hasValidValue (value: number) {
		return value % 3 === 0;
	}
}
