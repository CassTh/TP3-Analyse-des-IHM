// https://www.d3-graph-gallery.com/graph/sankey_basic.html FOR SANKEY

function setUpSankeyChart(svg) {
    const chart = {
        domElement: svg,
        height: Number(svg.attr("height")),
        width: Number(svg.attr("width"))
    }
    
    chart.margins = {
            top: 0.0 * chart.height,
            right: 0.2 * chart.width,
            bottom: 0.0 * chart.height,
            left: 0.2 * chart.width
        },
    
    chart.graph = {
            height: chart.height - chart.margins.top - chart.margins.bottom,
            width: chart.width - chart.margins.left - chart.margins.right
        }
    
    chart.graph.domElement = svg.append("g")
        .attr("class", "graph")
        .attr("transform", () => {
            return "translate(" + chart.margins.left + "," + chart.margins.top + ")";
        });

    return chart;
}

function sankeyChart(data, svg) {
    const chart = setUpSankeyChart(svg);

    let sankey = d3.sankey()
    .nodeWidth(36)
    .nodePadding(290)
    .size([chart.graph.width, chart.graph.height]);

    console.log(sankey.nodeWidth());

    sankey
    .nodes(data.nodes)
    .links(data.links)
    .layout(1);

    const link = svg.append("g")
    .selectAll(".link")
    .data(data.links)
    .enter()
    .append("path")
      .attr("class", "link")
      .attr("d", sankey.link())
      .style("stroke-width", function(d) {console.log(d.dy); return Math.max(1, d.dy); })
      .sort(function(a, b) { return b.dy - a.dy; });

      /*
    const node = svg.append("g")
    .selectAll(".node")
    .data(data["nodes"])
    .enter()
    .append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
      */
}