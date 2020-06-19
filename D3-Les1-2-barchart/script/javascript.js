var my_data = [100, 300, 500, 100, 100, 10, 200, 50];
var paddingX = 10;
var widthBar = 50;
var heightSVG = 400;

d3.select("#my_div")
	.append("svg")
	.attr("width", 500)
	.attr("height", 500)
	.selectAll("rect")
	.data(my_data)
	.enter()
	.append("rect")
	.attr("x", function(d,i){
		return  i * (widthBar + paddingX);
	})
	.attr("y", function(d){
		return heightSVG - d;
	})
	.attr("width", widthBar)
	.attr("height", function(d){
		return d;
	})
	.on("mouseover", function(d){
		alert(d);
	})
	.style("fill", "red")