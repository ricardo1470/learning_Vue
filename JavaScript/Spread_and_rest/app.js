const mapState = {
	loggedIn() {
		return true
	},
	member() {
		return false
	}
}

const computed = {
	...mapState,
	computedProp() {
		return null
	}
}

console.log(computed);

// SPREAD
// Expands values (string or array) where arguments (function) or elements (arrays) are expected
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers);

const text = "Hello world";
console.log(...text);

// Passing arrays as arguments
function addto(a, b, c, d ,e) {
	return a + b + c + d + e;
}

//console.log(addto.apply(null, numbers));
console.log(addto(...numbers));

// Clonar matrices y objetos
const copynumber = [...numbers];
//console.log(copynumber);
numbers.push(6);
console.log(numbers, copynumber);

const data = {name: 'Ricardo', city: 'Cali'};
const dataCopy = {...values};
console.log(dataCopy);

// Merge arrays and objects
const preferencias = {name: 'Karolina', beer: 'Club Colombia negra', color: 'azul'};
const person = {...values, ...preferencias};
console.log(person);


// REST
// Represents an infinite number of arguments as a matrix
function addto2(...arguments) {
	return arguments.reduce((current, total) => current + total);
}

// Spread can be used several times
const numbers2 = [21, 22, 66];
console.log(addto2(...numbers, ...[55], ...numbers2, 4, 88, 99));