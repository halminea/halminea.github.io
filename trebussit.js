var math = require('papaparse-min');

function calculate(){
	var data = Papa.parse("http://bussikirjasto.fi/pusatec.csv", {
	download: true,
	complete: results(results) {
		console.log(results);
	}
});
}
