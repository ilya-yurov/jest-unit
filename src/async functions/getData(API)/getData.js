// In this case we use {JSON} Placeholder Free fake API for testing and prototyping
//https://jsonplaceholder.typicode.com/

const { default: axios } = require("axios");
const mapArrToStrings = require("../../pure functions testing/mapArrToStrings/mapArrToStrings");

const getData = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		const userIds = response.data.map(user => user.id);
		return mapArrToStrings(userIds);
	} catch (error) {

	}
}

module.exports = getData;