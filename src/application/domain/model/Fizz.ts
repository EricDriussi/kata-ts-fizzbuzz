export class Fizz {
	private readonly name: string;

	public constructor (name: string = 'Fizz') {
		if (Fizz.isValid(name)) {
			this.name = name;
		} else {
			this.name = 'WRONG';
		}
	}

	private static isValid (name: string): boolean {
		return name === 'Fizz' || name === 'Blizz';
	}

	public toString (): string {
		return `${this.name}`;
	}
}
