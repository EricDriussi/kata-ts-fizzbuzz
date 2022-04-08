export class Fizzbuzz {
	private readonly name: string;

	public constructor (name: string = 'Fizzbuzz') {
		if (Fizzbuzz.isValid(name)) {
			this.name = name;
		} else {
			this.name = 'WRONG';
		}
	}

	private static isValid (name: string): boolean {
		return name === 'Fizzbuzz' || name === 'Blizzblubb';
	}

	public toString (): string {
		return `${this.name}`;
	}
}
