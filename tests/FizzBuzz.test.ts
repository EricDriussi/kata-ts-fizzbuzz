import { FizzBuzz } from '../src/application/domain/FizzBuzz';
import { Fizz } from '../src/application/domain/model/Fizz';
import { Buzz } from '../src/application/domain/model/Buzz';
import { FizzBuzzArray } from '../src/application/domain/model/FizzBuzzArray';
import { Fizzbuzz } from '../src/application/domain/model/Fizzbuzz';
import { FizzBuzzAllocator } from '../src/application/domain/FizzBuzzAllocator';

const fullExpectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizzbuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'Fizzbuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'Fizzbuzz', 46, 47, 'Fizz', 49, 'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'Fizzbuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz', 73, 74, 'Fizzbuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'Fizzbuzz', 91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz'];
const partialExpectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizzbuzz', 16];
const buzzedExpectedOutput = [1, 2, 3, 4, 'Buzz', 6, 7, 8, 9, 'Buzz', 11, 12, 13, 14, 'Buzz', 16];
const fizzedExpectedOutput = [1, 2, 'Fizz', 4, 5, 'Fizz', 7, 8, 'Fizz', 10, 11, 'Fizz', 13, 14, 'Fizz', 16];
const fizzBuzzedExpectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 'Fizzbuzz', 16];

describe('FizzBuzz should output', () => {
	it('the expected partial output', () => {
		expect(FizzBuzz.runFor(16)).toStrictEqual(partialExpectedOutput);
	});

	it('the expected full output', () => {
		expect(FizzBuzz.runFor(100)).toStrictEqual(fullExpectedOutput);
	});
});

describe('The domain should have', () => {
	describe('a FizzBuzzAllocator that', () => {
		it('Fizzes an incoming number array', () => {
			const oneToSixteen = Array.from({ length: 16 }, (_, i) => i + 1);

			const fizzedArray = FizzBuzzAllocator.fizzArray(oneToSixteen);

			expect(fizzedArray).toStrictEqual(fizzedExpectedOutput);
		});

		it('Buzzes an incoming number array', () => {
			const oneToSixteen = Array.from({ length: 16 }, (_, i) => i + 1);

			const buzzedArray = FizzBuzzAllocator.buzzArray(oneToSixteen);

			expect(buzzedArray).toStrictEqual(buzzedExpectedOutput);
		});

		it('FizzBuzzes an incoming number array', () => {
			const oneToSixteen = Array.from({ length: 16 }, (_, i) => i + 1);

			const fizzBuzzedArray = FizzBuzzAllocator.fizzBuzzArray(oneToSixteen);

			expect(fizzBuzzedArray).toStrictEqual(fizzBuzzedExpectedOutput);
		});

		it('correctly allocates an incoming number array', () => {
			const oneToOneHundred = Array.from({ length: 100 }, (_, i) => i + 1);

			const allocatedArray = FizzBuzzAllocator.allocate(oneToOneHundred);

			expect(allocatedArray).toStrictEqual(fullExpectedOutput);
		});
	});
});

describe('The domain model should consist of', () => {
	describe('a Fizz VO that', () => {
		it('outputs its name when evaluating a number divisible by 3', () => {
			const fizz = new Fizz();
			expect(fizz.evaluate(3)).toEqual('Fizz');
		});

		it('outputs the received value when evaluating a number NOT divisible by 3', () => {
			const fizz = new Fizz();
			expect(fizz.evaluate(4)).toEqual(4);
		});

		it('accepts Fizz as a valid name', () => {
			const fizz = new Fizz('Fizz');
			expect(fizz.toString()).toEqual('Fizz');
		});

		it('accepts Blizz as a valid name', () => {
			const fizz = new Fizz('Blizz');
			expect(fizz.toString()).toEqual('Blizz');
		});

		it('breaks when given an invalid name', () => {
			const fizz = new Fizz('Peter');
			expect(fizz.toString()).toEqual('INVALID-NAME');
		});

		it('evaluates to false when a valid number is given but an invalid name is assigned', () => {
			const fizz = new Fizz('Peter');
			expect(fizz.evaluate(3)).toBeFalsy();
		});
	});

	describe('a Buzz VO that', () => {
		it('outputs its name when evaluating a number divisible by 5', () => {
			const buzz = new Buzz();
			expect(buzz.evaluate(5)).toEqual('Buzz');
		});

		it('outputs the received value when evaluating a number NOT divisible by 5', () => {
			const buzz = new Buzz();
			expect(buzz.evaluate(4)).toEqual(4);
		});

		it('accepts Buzz as a valid name', () => {
			const buzz = new Buzz('Buzz');
			expect(buzz.toString()).toEqual('Buzz');
		});

		it('accepts Blizz as a valid name', () => {
			const buzz = new Buzz('Blubb');
			expect(buzz.toString()).toEqual('Blubb');
		});

		it('breaks when given an invalid name', () => {
			const buzz = new Buzz('Peter');
			expect(buzz.toString()).toEqual('INVALID-NAME');
		});

		it('evaluates to false when a valid number is given but an invalid name is assigned', () => {
			const buzz = new Buzz('Peter');
			expect(buzz.evaluate(5)).toBeFalsy();
		});
	});

	describe('a FizzBuzz VO that', () => {
		it('outputs its name when evaluating a number divisible by 3 and 5', () => {
			const fizzBuzz = new Fizzbuzz();
			expect(fizzBuzz.evaluate(15)).toEqual('Fizzbuzz');
		});

		it('outputs the received value when evaluating a number NOT divisible by 3 and 5', () => {
			const fizzBuzz = new Fizzbuzz();
			expect(fizzBuzz.evaluate(3)).toEqual(3);
		});

		it('accepts Fizzbuzz as a valid name', () => {
			const fizzBuzz = new Fizzbuzz('Fizzbuzz');
			expect(fizzBuzz.toString()).toEqual('Fizzbuzz');
		});

		it('accepts Blizzblubb as a valid name', () => {
			const fizzBuzz = new Fizzbuzz('Blizzblubb');
			expect(fizzBuzz.toString()).toEqual('Blizzblubb');
		});

		it('breaks when given an invalid name', () => {
			const fizzBuzz = new Fizzbuzz('Peter');
			expect(fizzBuzz.toString()).toEqual('INVALID-NAME');
		});

		it('evaluates to false when a valid number is given but an invalid name is assigned', () => {
			const fizzBuzz = new Fizzbuzz('Peter');
			expect(fizzBuzz.evaluate(15)).toBeFalsy();
		});
	});

	describe('a Fizzbuzz array', () => {
		it('that can hold numbers and strings', () => {
			const fizzBuzzArray = new FizzBuzzArray();
			fizzBuzzArray.push(1);
			fizzBuzzArray.push('two');
			fizzBuzzArray.push(3);
			expect(fizzBuzzArray).toStrictEqual([1, 'two', 3]);
		});
	});
});
