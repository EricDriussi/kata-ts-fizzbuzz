import { FizzBuzz } from '../src/application/domain/FizzBuzz';
import { Fizz } from '../src/application/domain/model/Fizz';
import { Buzz } from '../src/application/domain/model/Buzz';
import { Fizzbuzz } from '../src/application/domain/model/Fizzbuzz';
import { FizzBuzzArray } from '../src/application/domain/model/FizzBuzzArray';

const fullExpectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizzbuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'Fizzbuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'Fizzbuzz', 46, 47, 'Fizz', 49, 'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'Fizzbuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz', 73, 74, 'Fizzbuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'Fizzbuzz', 91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz'];
const partialExpectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizzbuzz', 16];

describe('FizzBuzz should output', () => {
	it('the expected partial output', () => {
		expect(FizzBuzz.runFor(16)).toStrictEqual(partialExpectedOutput);
	});

	it('the expected full output', () => {
		expect(FizzBuzz.runFor(100)).toStrictEqual(fullExpectedOutput);
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

	describe('a Buzz VO', () => {
		it('that prints its name', () => {
			const buzz = new Buzz();
			expect(buzz.toString()).toEqual('Buzz');
		});
	});

	describe('a Fizzbuzz VO', () => {
		it('that prints its name', () => {
			const fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.toString()).toEqual('Fizzbuzz');
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
