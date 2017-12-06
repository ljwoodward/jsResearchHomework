var arrayTasks = {

	concat: function (arr1, arr2) {
		const newArray = [];
		for(let item of arr1) {
			newArray.push(item);
		};
		for(let item of arr2) {
			newArray.push(item);
		};
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		const map = arr.map(x => x * x);
		return map;
	},

	sum: function (arr) {
		let total = 0;
		for(let num of arr) {
			total += num;
		}
		return total;
	},

	findDuplicates: function (arr) {

	},

	removeAndClone: function (arr, valueToRemove) {

	},

	findIndexesOf: function (arr, itemToFind) {

	},

	sumOfAllEvenNumbersSquared: function (arr) {

	}

}

module.exports = arrayTasks
