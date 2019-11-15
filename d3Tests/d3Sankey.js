function format(d) {
    let unit = (d < 2) ? "customer" : "customers";
    return d + " " + unit;
}

function sankeyChart(data, svg) {

    const height = Number(svg.attr("height"));
    const width = Number(svg.attr("width"));

    let sankey = d3.sankey()
      .nodeWidth(20)
      .nodePadding(10)
      .size([width, height]);
      
    sankey
    .nodes(data.nodes)
    .links(data.links)
    .layout(1);

    let link = svg.append("g").selectAll(".link")
      .data(data.links)
      .enter()
      .append("path")
      .attr("class", d => {
        return "link " + d.source.name.toLowerCase();
      })
      .attr("d", sankey.link())
      .style("stroke-width", function (d) {
        return Math.max(1, d.dy);
      })
      .style("fill", "none");
    
      link.append("title")
      .text(function (d) {
        return d.source.name + " → " + d.target.name + "\n" + format(d.value);
      });

      let node = svg.append("g").selectAll(".node")
      .data(data.nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

      node.append("rect")
      .attr("height", function (d) {
        return d.dy;
      })
      .attr("width", sankey.nodeWidth() - 10)
      .attr("transform", "translate(5,0)")
      .attr("class", d => {
        return d.name.toLowerCase();
      })
      .style("stroke", "none")
      .append("title")
      .text(function (d) {
        return d.name + "\n" + format(d.value);
      })


    // add in the title for the nodes
    node.append("text")
      .attr("x", -6)
      .attr("y", function (d) {
        return d.dy / 2;
      })
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .text(function (d) {
        return d.name;
      })
      .filter(function (d) {
        return d.x < width / 2;
      })
      .attr("x", 6 + sankey.nodeWidth())
      .attr("text-anchor", "start");
}