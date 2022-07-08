const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings tests', () => {
	//First check valid value
	test('mapArrToStrings with numbers (1,2,3)', () => {
		expect(mapArrToStrings([1,2,3])).toEqual(['1','2','3'])
	})
	test('mapArrToStrings with other args (not nubmbers) return only nums', () => {
		expect(mapArrToStrings([1,2,3, null, undefined, 'string'])).toEqual(['1','2','3'])
	})
	test('mapArrToStrings with empty array', () => {
		expect(mapArrToStrings([])).toEqual([])
	})
	test('mapArrToStrings. Denial.', () => {
		expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3,4])
	})
})


