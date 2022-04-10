import { FizzBuzzArray } from './model/FizzBuzzArray';
import { Fizz } from './model/Fizz';
import { Buzz } from './model/Buzz';
import { Fizzbuzz } from './model/Fizzbuzz';

export class FizzBuzzAllocator {
	public static allocate (numberArray: number[]): FizzBuzzArray {
		// const fizz = new Fizz();
		// const buzz = new Buzz();
		// const fizzBuzz = new Fizzbuzz();

		return FizzBuzzAllocator.merge({
			fizzedArray: FizzBuzzAllocator.fizzArray(numberArray),
			buzzedArray: FizzBuzzAllocator.buzzArray(numberArray),
			fizzBuzzedArray: FizzBuzzAllocator.fizzBuzzArray(numberArray)
		});

		// const allocatedArray = numberArray.map(item => fizz.evaluate(buzz.evaluate(fizzBuzz.evaluate(item))));
		// return allocatedArray;
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

	private static parse (numberArray: number[], fizzOrBuzz: Fizzbuzz) {
		const fizzBuzzArray = new FizzBuzzArray();
		for (const item of numberArray) {
			fizzBuzzArray.push(fizzOrBuzz.evaluate(item));
		}
		return fizzBuzzArray;
	}

	private static merge (
		partialArrays: {
			fizzBuzzedArray: FizzBuzzArray;
			fizzedArray: FizzBuzzArray;
			buzzedArray: FizzBuzzArray
		}
	): FizzBuzzArray {
		return partialArrays.fizzBuzzedArray.reduce((acc, curr, index) => {
			if (typeof curr !== 'number') {
				return acc;
			}
			if (typeof partialArrays.fizzedArray[index] !== 'number') {
				acc[index] = partialArrays.fizzedArray[index];
			}
			if (typeof partialArrays.buzzedArray[index] !== 'number') {
				acc[index] = partialArrays.buzzedArray[index];
			}
			return acc;
		}, partialArrays.fizzBuzzedArray);
	}
}
