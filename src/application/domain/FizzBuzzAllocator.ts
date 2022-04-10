import { FizzBuzzArray } from './model/FizzBuzzArray';
import { Fizz } from './model/Fizz';
import { Buzz } from './model/Buzz';
import { Fizzbuzz } from './model/Fizzbuzz';

export class FizzBuzzAllocator {
	public static allocate (numberArray: number[]): FizzBuzzArray {
		const fizz = new Fizz();
		const buzz = new Buzz();
		const fizzBuzz = new Fizzbuzz();

		const allocatedArray = numberArray.map(item => fizz.evaluate(buzz.evaluate(fizzBuzz.evaluate(item))));
		return allocatedArray;
	}

	public static fizzArray (numberArray: number[]): FizzBuzzArray {
		const fizz = new Fizz();

		return this.parse(numberArray, fizz);
	}

	public static buzzArray (numberArray: number[]): FizzBuzzArray {
		const buzz = new Buzz();

		return this.parse(numberArray, buzz);
	}

	public static fizzBuzzArray (numberArray: number[]): FizzBuzzArray {
		const fizzBuzz = new Fizzbuzz();

		return this.parse(numberArray, fizzBuzz);
	}

	private static parse (numberArray: number[], fizzBuzz: Fizzbuzz) {
		const fizzBuzzArray = new FizzBuzzArray();
		for (const item of numberArray) {
			fizzBuzzArray.push(fizzBuzz.evaluate(item));
		}
		return fizzBuzzArray;
	}
}
