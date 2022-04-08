export class Buzz {
	private readonly name: string;

	public constructor (name: string = 'Buzz') {
		if (Buzz.isValid(name)) {
			this.name = name;
		} else {
			this.name = 'WRONG';
		}
	}

	private static isValid (name: string): boolean {
		return name === 'Buzz' || name === 'Blubb';
	}

	public toString (): string {
		return `${this.name}`;
	}
}
