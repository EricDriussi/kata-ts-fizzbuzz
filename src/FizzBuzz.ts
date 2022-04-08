import { FizzBuzzChooser } from './FizzBuzzChooser';

export class FizzBuzz {
	public static runFor (count: number = 100): (number | string)[] {
		return FizzBuzzChooser.fizzer(
			FizzBuzzChooser.buzzer(
				FizzBuzzChooser.fizzbuzzer(
					Array.from({ length: count }, (_, i) => i + 1)
				)
			)
		);
	}
}
