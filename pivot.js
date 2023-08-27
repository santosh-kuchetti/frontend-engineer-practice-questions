/*
    we need to find a pivot index.(pivot means left sum of the elements and right sum of the elements of the purticular element are the same)

*/


let arr = [1, 4, 5, 2, 4, 5, 0, 1];

const pivot = (arr) => {
	let n = arr.length;
	for (let i = 0; i < arr.length; i++) {
		let leftSum = 0;
		for (let j = i - 1; j >= 0; j--) {
			leftSum += arr[j];
		}

		let rightSum = 0;
		for (let k = i + 1; k < n; k++) {
			rightSum += arr[k];
		}
		if (leftSum == rightSum) {
			return arr[i];
		}
	}

	return -1;
};

/*
    what we can do here is for every element we can check both the left sum of it by treversing back untill 0
     and the right sum of it by traversing upto the length of the array.

     in this way we can know which element can be the pivot element.

*/
console.log(pivot(arr));
