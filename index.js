function arrayFibonacciNumber (n){

	let a = [];

	a[0] = 0;
	a[1] = 1;

	for (let i = 2; i < n; i++){
		a[i] = a[i - 1] + a[i - 2];
	}

	return a;
}

function variablesFibonacciNumber (n){

	let a__index_n_minus_2 = 0;
	let a__index_n_minus_1 = 1;
	let a__index_n;

	for (let i = 0; i < n - 2; i++){
		a__index_n = a__index_n_minus_2 + a__index_n_minus_1;
		a__index_n_minus_2 = a__index_n_minus_1;
		a__index_n_minus_1 = a__index_n;

	}

	return a__index_n;
}

function recursiveFibonacciNumber (n){

	if((n - 1) === 0)
		return 0;
	if((n - 1) === 1){
		return 1;
	}

	return recursiveFibonacciNumber(n - 1) + recursiveFibonacciNumber(n - 2);
}
const n =  Number(prompt('Enter the order number of the Fibonacci row'));

arrayResult = 'Solution using an array: ' + arrayFibonacciNumber(n) + '<br>';
document.write(arrayResult);

variablesResult = 'Solution using three variables: ' + variablesFibonacciNumber(n)  + '<br>';
document.write(variablesResult);

recursiveResult = 'Solution using recursion: ' + recursiveFibonacciNumber(n);
document.write(recursiveResult);



