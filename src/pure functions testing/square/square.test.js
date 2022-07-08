const square = require('./square')

describe('square tests', () => {
	//First check valid value
	test('square with valid qual value', () => {
		expect(square(2)).toBe(4)
	})
	test('square w', () => {
		expect(square(2)).toBeLessThan(5)
	})
	test('square with number (2)', () => {
		expect(square(2)).toBeGreaterThan(3)
	})
	test('square with number (2)', () => {
		expect(square(2)).not.toBeUndefined()
	})
	test('test that method Math.pow calls 1 time', () => {
		//Used the function jest.spyOn()to track calls to an object's (Math) method(.pow)
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1) //correct, method .pow calls 1 time
	})
	test('test that method Math.pow calls 0 time', () => {
		//Used the function jest.spyOn()to track calls to an object's (Math) method(.pow)
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toBeCalledTimes(0) //correct, method .pow calls 1 time
	})
	//We need to clear all mocks, cause they have a cumulative effect
	afterEach(() => {
		jest.clearAllMocks();
	})
})
