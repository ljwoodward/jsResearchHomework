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

	// findDuplicates: function (arr) {
	// 	let newArray = arr.map(function () {
	// 		for (num of arr) {
	// 			return {count: 1, number: num};
	// 		}
	// 	})
	// 	newArray.
	// 	return multiples;
	// },
	// I GIVE UP!

	removeAndClone: function (arr, valueToRemove) {
		const result = [];
			for (num of arr) {
				if (num !== valueToRemove) {
					result.push(num);
				}
			}
		return result;
	},

	findIndexesOf: function (arr, itemToFind) {
		const result = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === itemToFind) {
				result.push(i);
			}
		}
		return result;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		const newArray = [];
		for (num of arr) {
			if (num % 2 === 0) {
				newArray.push(num);
			}
		}
		let total = 0;
		for (num of this.square(newArray)) {
			total += num;
		}
		return total;
	}

}

module.exports = arrayTasks
