var math = require('mathjs');
math.config({
  number: 'Fraction'
});

function calculate(){
	// Get all data from form to variables

	var p1p = document.getElementById("p1p").value;
	var p2p = document.getElementById("p2p").value;
	var p3p = document.getElementById("p3p").value;
	var p4p = document.getElementById("p4p").value;
	var p5p = document.getElementById("p5p").value;
	var p6p = document.getElementById("p6p").value;
	var p7p = document.getElementById("p7p").value;
	var p8p = document.getElementById("p8p").value;
	var p9p = document.getElementById("p9p").value;

	var p1o = document.getElementById("p1o").value;
	var p2o = document.getElementById("p2o").value;
	var p3o = document.getElementById("p3o").value;
	var p4o = document.getElementById("p4o").value;
	var p5o = document.getElementById("p5o").value;
	var p6o = document.getElementById("p6o").value;
	var p7o = document.getElementById("p7o").value;
	var p8o = document.getElementById("p8o").value;
	var p9o = document.getElementById("p9o").value;	

	var p1lc = document.getElementById("p1lc").value;
	var p2lc = document.getElementById("p2lc").value;
	var p3lc = document.getElementById("p3lc").value;
	var p4lc = document.getElementById("p4lc").value;
	var p5lc = document.getElementById("p5lc").value;
	var p6lc = document.getElementById("p6lc").value;
	var p7lc = document.getElementById("p7lc").value;
	var p8lc = document.getElementById("p8lc").value;
	var p9lc = document.getElementById("p9lc").value;

	var p1sc = document.getElementById("p1sc").value;
	var p2sc = document.getElementById("p2sc").value;
	var p3sc = document.getElementById("p3sc").value;
	var p4sc = document.getElementById("p4sc").value;
	var p5sc = document.getElementById("p5sc").value;
	var p6sc = document.getElementById("p6sc").value;
	var p7sc = document.getElementById("p7sc").value;
	var p8sc = document.getElementById("p8sc").value;
	var p9sc = document.getElementById("p9sc").value;

	var p1s = document.getElementById("p1s").value;
	var p2s = document.getElementById("p2s").value;
	var p3s = document.getElementById("p3s").value;
	var p4s = document.getElementById("p4s").value;
	var p5s = document.getElementById("p5s").value;
	var p6s = document.getElementById("p6s").value;
	var p7s = document.getElementById("p7s").value;
	var p8s = document.getElementById("p8s").value;
	var p9s = document.getElementById("p9s").value;

	//Calculate points for each player
	var p1vp = calculatePoints(p1p,p1o,p1lc,p1sc,p1s);
	var p2vp = calculatePoints(p2p,p2o,p2lc,p2sc,p2s);
	var p3vp = calculatePoints(p3p,p3o,p3lc,p3sc,p3s);
	var p4vp = calculatePoints(p4p,p4o,p4lc,p4sc,p4s);
	var p5vp = calculatePoints(p5p,p5o,p5lc,p5sc,p5s);
	var p6vp = calculatePoints(p6p,p6o,p6lc,p6sc,p6s);
	var p7vp = calculatePoints(p7p,p7o,p7lc,p7sc,p7s);
	var p8vp = calculatePoints(p8p,p8o,p8lc,p8sc,p8s);
	var p9vp = calculatePoints(p9p,p9o,p9lc,p9sc,p9s);

	//Convert points to mixed numbers
	p1vp = toMixedNumber(p1vp);
	p2vp = toMixedNumber(p2vp);
	p3vp = toMixedNumber(p3vp);
	p4vp = toMixedNumber(p4vp);
	p5vp = toMixedNumber(p5vp);
	p6vp = toMixedNumber(p6vp);
	p7vp = toMixedNumber(p7vp);
	p8vp = toMixedNumber(p8vp);
	p9vp = toMixedNumber(p9vp);
	
	//Update player scores to score fields
	document.getElementById("p1vp").value = p1vp;
	document.getElementById("p2vp").value = p2vp;
	document.getElementById("p3vp").value = p3vp;
	document.getElementById("p4vp").value = p4vp;
	document.getElementById("p5vp").value = p5vp;
	document.getElementById("p6vp").value = p6vp;
	document.getElementById("p7vp").value = p7vp;
	document.getElementById("p8vp").value = p8vp;
	document.getElementById("p9vp").value = p9vp;

	return true;
}

function calculatePoints(p,o,lc,sc,s) {
	//Treat blanks as zeros
	if ( p == "") {
		p = 0;
	}
	if ( o == "") {
		o = 0;
	}
	if ( lc == "") {
		lc = 0;
	}
	if ( sc == "") {
		sc = 0;
	}
	if ( s == "") {
		s = 0;
	}
	
	//Add points up. First basic points and then add all other points with
	//	their multiplication factors
	var points = math.add(p,1/2 * o,3/12 * lc, 2/12 * sc, 2/12 *s);
	return points;
}

function toMixedNumber(fraction) {
	//First get the integer part and then substract it from original number
	//	to get the fraction part only
	//var integer = math.floor(math.divide(fraction.n,fraction.d));
    var integer = Math.floor(fraction);
    fraction = fraction - integer;
    
    //Avoid having  0/12 at the end.
    if (fraction == 0) {
        return integer + "";
    }

	//Expand that denominator is 12 in all cases that player might encounter.
    fraction = Math.round(12 * fraction);
    var number = integer + " " + fraction + "/" + "12"
	
	return number;
}


