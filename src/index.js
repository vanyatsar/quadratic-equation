module.exports = function solveEquation(equation) {

	var eqDiv = equation.split(' '); //Divided - разделенный;
	var solution = [];
	
	var a = eqDiv[0];
	var b = eqDiv[3] + eqDiv[4];
	var c = eqDiv[7] + eqDiv[8];

	var D = Math.pow(b, 2) - 4 * a * c;	

	solution.push(Math.round((-b + Math.pow(D, 0.5)) / (2 * a)));
	solution.push(Math.round((-b - Math.pow(D, 0.5)) / (2 * a)));

	if (solution[0] > solution[1]) {
		var temp = solution [0];
		solution[0] = solution[1];
		solution[1] = temp;
	}

	return solution;

}

