/* 
    for a given object like
    let obj = {
        A: "123",
        B: 23,
        C: {
            p: 32,
            O: {
                L: 56,
            },
            Q: [1, 2],
        },
    };

    we need to return the flatten object like,

    { A: '123', B: 23, 'C.p': 32, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }

*/

let finalObj = {};
const flattenObj = (obj, parent) => {
	// const generateFlattenObject = (obj, parent) => {
		for (let ele in obj) {
			let newParent = parent + ele;
			let val = obj[ele];
			if (typeof val === "object") {
				// generateFlattenObject(obj[ele], newParent + ".");
                
				flattenObj(obj[ele], newParent + ".");
			} else {
				finalObj[newParent] = val;
			}
		}
	// };
	// generateFlattenObject(obj, parent);
	return finalObj;
};

let obj = {
	A: "123",
	B: 23,
	C: {
		p: 32,
		O: {
			L: 56,
		},
		Q: [1, 2],
	},
};

console.log(flattenObj(obj, ""));
