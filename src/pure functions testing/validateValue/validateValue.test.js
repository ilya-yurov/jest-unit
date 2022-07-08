const validateValue = require('./validateValue')

describe('Validate value tests', () => {
	//First check valid value
	test('Validate value correct (50)', () => {
		expect(validateValue(50)).toBe(true)
	})
	//Second left corner invalid value
	test('Validate value less then correct (-1)', () => {
		expect(validateValue(-1)).toBe(false)
	})
	//Then right corner invalid value
	test('Validate value more then correct (101)', () => {
		expect(validateValue(101)).toBe(false)
	})
	//And last one - two valid values on left/right corners
	test('Validate boundary bottom value (0)', () => {
		expect(validateValue(0)).toBe(true)
	})
	test('Validate boundary top value (100)', () => {
		expect(validateValue(100)).toBe(true)
	})
})


