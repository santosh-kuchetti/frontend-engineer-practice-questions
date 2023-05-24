// let array = [];
// const flattenArray = (arr) => {
// 	arr.forEach((ele, i) => {
// 		if (Array.isArray(ele)) {
// 			flattenArray(ele);
// 		} else {
// 			array.push(ele);
// 		}
// 	});

// 	return array;
// };


const flattenArray = (arr) => {
    return arr.reduce((prevValue, currValue) => {
        if (Array.isArray(currValue)) {
            prevValue = prevValue.concat(flattenArray(currValue))  // Array concat method joins elements with the array and retuens new concated array.
        } else {
            prevValue.push(currValue)
        }

        return prevValue
    },[])
}

console.log(
	flattenArray([
		[[1, [1.1]], 2, 3],
		[4, 5],
	])
);
