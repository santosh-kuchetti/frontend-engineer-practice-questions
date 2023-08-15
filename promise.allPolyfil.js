const demo = (time) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(`time is ${time}`);
		}, [time]);
	});
};

const test = [demo(1000), demo(2000), demo(3000)];

const promiseAll = (arr) => {
	return new Promise((res, rej) => {
		let output = [];
		arr.forEach((promise, index) => {
			promise
				.then((data) => {
                    output[index] = data;
                    console.log(data)
					if (index == arr.length - 1) {
						res(output)
					}
				})
				.catch((err) => {
					console.log(err);
				});
		});
	});
};

promiseAll(test)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
