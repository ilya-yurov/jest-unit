const delay = require('./delay')

describe('async func delay testing', () => {
	test('correct sum at 1 second delay', async () => {
		const sum = await delay(() => 5+5, 1000);
		expect(sum).toBe(10)
	})
})