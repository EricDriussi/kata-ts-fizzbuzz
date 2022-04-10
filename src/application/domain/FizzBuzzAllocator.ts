import { FizzBuzzArray } from './model/FizzBuzzArray';
import { Fizz } from './model/Fizz';
import { Buzz } from './model/Buzz';
import { Fizzbuzz } from './model/Fizzbuzz';

export class FizzBuzzAllocator {
	public static allocate (numberArray: number[]) {
		const allocatedArray = new FizzBuzzArray();
		const fizz = new Fizz();
		const buzz = new Buzz();
		const fizzBuzz = new Fizzbuzz();

		for (const item of numberArray) {
			allocatedArray.push(fizz.evaluate(buzz.evaluate(fizzBuzz.evaluate(item))));
		}
		return allocatedArray;
	}

	public static fizzArray (numberArray: number[]) {
		const fizzArray = new FizzBuzzArray();
		const fizz = new Fizz();

		for (const item of numberArray) {
			fizzArray.push(fizz.evaluate(item));
		}
		return fizzArray;
	}

	public static buzzArray (numberArray: number[]) {
		const buzzArray = new FizzBuzzArray();
		const buzz = new Buzz();

		for (const item of numberArray) {
			buzzArray.push(buzz.evaluate(item));
		}
		return buzzArray;
	}

	public static fizzBuzzArray (numberArray: number[]) {
		const fizzBuzzArray = new FizzBuzzArray();
		const fizzBuzz = new Fizzbuzz();

		for (const item of numberArray) {
			fizzBuzzArray.push(fizzBuzz.evaluate(item));
		}
		return fizzBuzzArray;
	}
}
