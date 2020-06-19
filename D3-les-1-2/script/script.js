
//alert("het werkt!");


d3.select("li").text("hola");

d3.selectAll("li").text("como estas?");

d3.select("li:nth-child(2)").html("<strong>hola</strong>");

d3.select("li:nth-child(3)").remove();

d3.select("li").attr("class", "highlight");

d3.selectAll("li").style("background-color", "orange");

d3.select("li")
	.append("span")
	.text(" hallo");

d3.select("span").classed("highlight", false);








var my_data = [

	{"merk": "audi", "prijs": "EUR. 80.000"},	
	{"merk": "bmw", "prijs": "EUR. 100.000"},	
	{"merk": "tesla", "prijs": "EUR. 180.000"},	
	{"merk": "ferarri", "prijs": "EUR. 800.000"}	
];

d3.select("ol")
	.selectAll("li")
	.data(my_data)
	.enter()
	.append("li")
	.text(function(d){

		return d.merk + " " + d.prijs;
	})

	.style("background-color", "red");







d3.select("#mydiv")
	.append("svg")
	.attr("width", 500)
	.attr("height", 600)
	.append("rect")
	.attr("x", 250)
	.attr("y" ,150)
	.attr("width", 100)
	.attr("height", 100)
	.style("fill", "blue");

d3.select("svg")
	.append("circle")
	.attr("cx", 300)
	.attr("cy", 200)
	.attr("r", 50)
	.style("fill", "red");














