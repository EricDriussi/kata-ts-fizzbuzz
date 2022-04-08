import { FizzBuzz } from '../src/FizzBuzz';
import { FizzBuzzChooser } from '../src/FizzBuzzChooser';

const fullExpectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizzbuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'Fizzbuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'Fizzbuzz', 46, 47, 'Fizz', 49, 'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'Fizzbuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz', 73, 74, 'Fizzbuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'Fizzbuzz', 91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz'];
const fizzbuzzerExpectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 'Fizzbuzz', 16];
const partialExpectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizzbuzz', 16];
const buzzerExpectedOutput = [1, 2, 3, 4, 'Buzz', 6, 7, 8, 9, 'Buzz', 11, 12, 13, 14, 'Buzz', 16];
const fizzerExpectedOutput = [1, 2, 'Fizz', 4, 5, 'Fizz', 7, 8, 'Fizz', 10, 11, 'Fizz', 13, 14, 'Fizz', 16];
// const fullExpectedOutput = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz', 'Fizz', '22', '23', 'Fizz', 'Buzz', '26', 'Fizz', '28', '29', 'FizzBuzz', '31', '32', 'Fizz', '34', 'Buzz', 'Fizz', '37', '38', 'Fizz', 'Buzz', '41', 'Fizz', '43', '44', 'FizzBuzz', '46', '47', 'Fizz', '49', 'Buzz', 'Fizz', '52', '53', 'Fizz', 'Buzz', '56', 'Fizz', '58', '59', 'FizzBuzz', '61', '62', 'Fizz', '64', 'Buzz', 'Fizz', '67', '68', 'Fizz', 'Buzz', '71', 'Fizz', '73', '74', 'FizzBuzz', '76', '77', 'Fizz', '79', 'Buzz', 'Fizz', '82', '83', 'Fizz', 'Buzz', '86', 'Fizz', '88', '89', 'FizzBuzz', '91', '92', 'Fizz', '94', 'Buzz', 'Fizz', '97', '98', 'Fizz', 'Buzz'];
// const partialExpectedOutput = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz', '16'];
// const buzzerExpectedOutput = ['1', '2', '3', '4', 'Buzz', '6', '7', '8', '9', 'Buzz', '11', '12', '13', '14', '15', '16'];
// const fizzerExpectedOutput = ['1', '2', 'Fizz', '4', '5', 'Fizz', '7', '8', 'Fizz', '10', '11', 'Fizz', '13', '14', '15', '16'];

describe('FizzBuzz should output', () => {
	it('the expected partial output', () => {
		expect(FizzBuzz.runFor(16)).toStrictEqual(partialExpectedOutput);
	});

	it('the expected full output', () => {
		expect(FizzBuzz.runFor(100)).toStrictEqual(fullExpectedOutput);
	});
});

describe('FizzBuzzChooser should output', () => {
	let oneToSixteen: number[];
	beforeEach(() => {
		oneToSixteen = Array.from({ length: 16 }, (_, i) => i + 1);
	});

	it('Fizz for multiples of 3', () => {
		expect(FizzBuzzChooser.fizzer(oneToSixteen)).toStrictEqual(fizzerExpectedOutput);
	});

	it('Buzz for multiples of 5', () => {
		expect(FizzBuzzChooser.buzzer(oneToSixteen)).toStrictEqual(buzzerExpectedOutput);
	});

	it('Fizzbuzz for multiples of 3 and 5', () => {
		expect(FizzBuzzChooser.fizzbuzzer(oneToSixteen)).toStrictEqual(fizzbuzzerExpectedOutput);
	});
});
