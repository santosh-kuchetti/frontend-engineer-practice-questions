/*
    given in the dom,
    we have two symetrical dom elements and we have the a element that is having the id in the first root element.
    and we have another element in the second root element without id the same place like first root element and we have to find the value of that element

*/

const getPath = (parent, child) => {
	let currentNode = child;
	let path = [];
	while (currentNode !== parent) {
		let parentElement = currentNode.parentElement; 
		let childrenArray = Array.from(parentElement.children);
		console.log(currentNode);
		console.log(childrenArray);
		path.push(childrenArray.indexOf(currentNode));
		currentNode = parentElement;
	}

	return path;
};

const getPathValue = (parent, path) => {
	let currentNode = parent;
	while (path.length) {
		currentNode = currentNode.children[path.pop()];
	}
	return currentNode.innerText;
};

const func = () => {
	let root1 = document.getElementById("rootA");
	let root2 = document.getElementById("rootB");
	let child1 = document.getElementById("nodeA");

	let path = getPath(root1, child1);
	return getPathValue(root2, path);
};

console.log(func());

/*
    first we will get the first root element and the the child element having the id
    we will track the path of the elements from the child element.

    we can create a function getPath and pas parameters as the root1 and the child with id
    we will compare from the bottom to top.
    
    while the currentNode is not equal to parent node we will run a loop and track the path,
    we will get the parent of the current element by using   (element.parentElement)
    and we will get the children array    (with using (element.children) )   and we have to convert it to array using (Array.from )of the parent because to know from where the child with the id came from 
    otherwise confusion will there about which element is our child element.

    from the children array, we will push the index of the current nof=de to the path array.

    we will return the path array


    we need the value of the child element

    so, we will create another function and pass the paramenters as second root element and the path array

    now will dig deep from the top of theat parent, in the path array first element will that actual place of child elem=nt in the dom,
     so we will pop untill the length is 0 and we will update our currenttNode with that, at the end our currentNode will be our required node,

     and we will return value with (element.innerText)

*/
