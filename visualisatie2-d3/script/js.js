var widthScale = d3.scaleLinear()
					.domain([800, 4690])
					.range([10, 50]);
var kleurScale = d3.scaleLinear()
					.domain([45, 163])
					.range([0, 255]);

var xRondje = 20;
var ruimte = 70;

var maxWords = 10000;
var minWords = 0;




var inputElements = d3.selectAll("input[type='radio']");
inputElements.on("change", inputChange);

drawCircles();

function inputChange(){
			var theValue = this.value;
			if (theValue=="0"){
				maxWords = 2000;
				minWords = 0;
			}
			else if (theValue=="2000"){
				maxWords = 4000;
				minWords = 2000;
			}
			else if (theValue=="4000"){
				maxWords = 10000;
				minWords = 4000;
			}
			//alert(minWords + (',') + maxWords);

		eraseCircles();
		drawCircles();

		};

function eraseCircles(){

	d3.selectAll("circle").remove();
	xRondje = 20;

}

function resetKnop(){
	minWords = 0;
	maxWords = 10000;
	eraseCircles();
	drawCircles();
}



function drawCircles(){
	d3.csv("data/data.csv").then(function(data) {
		d3.select("#my_container")
			.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
			.filter(function(d){
				if ((d["spoken_words"]>=minWords)&&(d["spoken_words"]<=maxWords)){
					return true;
				} else{
					return false;
				}


			})

			.attr("r", function(d){
				var radius = widthScale(d["spoken_words"]);
				return radius;
			})
			.attr("cx", function(d){
				xRondje = xRondje + ruimte + widthScale(d["spoken_words"]);
				return xRondje;
			})
			.attr("cy", 100)
			.attr("fill", function(d){
				var kleur = parseInt(kleurScale(d["appearences"]));
				return "rgb(" + kleur + "," + kleur + ",0)";

			})
			.on("mouseover", function(){
				d3.select(this).attr("fill" , "green");
			})
			.on("mouseout", function(){
				d3.select(this).attr("fill", function(d){
					var kleur = parseInt(kleurScale(d["appearences"]));
					return "rgb(" + kleur + "," + kleur + ",0)";
				})
			})




	});
}
