var my_data;
var widthScale;
var cx = 0;
var padding = 50;
var kleurScale;

d3.csv("data/data.csv").then(function(dataset){
    my_data = dataset;    
    widthScale = d3.scaleLinear()
                    .domain([800, 4690])
                    .range([10,50]);
    kleurScale = d3.scaleLinear()
                    .domain([45, 163])
                    .range([0,255]);
    print_data();
});

function print_data(){
    d3.select("#my_container")
        .selectAll("circle")
        .data(my_data)
        .enter()
        .append("circle")
        .attr("r", function(d){
             var radius = widthScale(d["spoken_words"]);
             return radius;
        })
        .attr("cx", function(d){
            cx = cx + widthScale(d["spoken_words"]) + padding;
            return cx;
        })
        .attr("cy", "100")
        .attr("fill", function(d){
            var kleur = parseInt(kleurScale(d["appearences"]));
            return "rgb(" +kleur + "," + kleur + "," + kleur + ")";
        })

        .on("mouseover", function(d) {
            var selected_x = parseInt(d3.select(this).attr("cx"));
            var selected_y = parseInt(d3.select(this).attr("cy"));
            var selected_r = parseInt(d3.select(this).attr("r"));
        
            d3.select("#my_container")
                .append("line")
                .attr("x1", selected_x)
                .attr("y1", function(d){
                    return selected_y + selected_r;
                })
                .attr("x2", selected_x)
                .attr("y2", 300)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
            
             d3.select("#my_container")
                .append("text")
                .attr("x", selected_x + 5)
                .attr("y", 280)
                .text(d["name"] + ", " + d["spoken_words"] + " words, " + d["appearences"] + " appearances")
        })
        .on("mouseout", function(d){
            d3.select("#my_container").selectAll("line").remove();
            d3.select("#my_container").selectAll("text").remove();
        })
}

