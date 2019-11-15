// https://www.d3-graph-gallery.com/graph/sankey_basic.html FOR SANKEY


function setUpBarChart(svg) {
    const chart = {
        domElement: svg,
        height: Number(svg.attr("height")),
        width: Number(svg.attr("width"))
    }
    
    chart.margins = {
            top: 0.1 * chart.height,
            right: 0.1 * chart.width,
            bottom: 0.15 * chart.height,
            left: 0.1 * chart.width
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


function showStackedBarChart(data, chart, captionType) {
    const tallestBar = data.reduce((a, b) => {
        sizeA = a["shift"] > 0 ? a["baseline"] + a["shift"] : a["baseline"];
        sizeB = b["shift"] > 0 ? b["baseline"] + b["shift"] : b["baseline"];

        return sizeA > sizeB ? a : b;
    });

    const sizeMax = tallestBar["shift"] > 0 ? tallestBar["baseline"] + tallestBar["shift"] : tallestBar["baseline"];
    const scaleFactor = chart.graph.height / sizeMax;

    const barWidth = chart.graph.width / (3 * data.length / 2);

    let bar = chart.graph.domElement.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", (d, i) => {
            let yOffset = chart.graph.height - d["baseline"] * scaleFactor;
            let xOffset = i * 1.5 * barWidth + 0.25 * barWidth;
            return "translate(" + xOffset + "," + yOffset + ")";
        });

    bar.append("rect")
        .attr("class", "baseline")
        .attr("height", (d) => {
            return d["baseline"] * scaleFactor;
        })
        .attr("width", barWidth);

    bar.append("rect")
        .attr("class", "shift")
        .attr("height", function (d) {
            return (d["baseline"] + d["shift"]) * scaleFactor;
        })
        .attr("width", barWidth)
        .attr("transform", (d, i) => {
            let yOffset = -d["shift"] * scaleFactor;
            let xOffset = 0;
            return "translate(" + xOffset + "," + yOffset + ")";
        });

        addBarChartCaption(data, chart, barWidth, captionType);
}

function addBarChartCaption(data, chart, barWidth, captionName) {
    let caption = chart.domElement.append("g")
        .attr("class", "caption");

    caption.append("rect")
        .attr("height", chart.margins.bottom)
        .attr("width", chart.width)
        .attr("transform", () => {
            let yOffset = chart.height - chart.margins.bottom
            return "translate(0," + yOffset + ")";
        })
        .style("fill", "white");


    caption.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", function (d, i) {
            return i * 1.5 * barWidth + chart.margins.left + 0.75 * barWidth;
        })
        .attr("y", () => {
            return chart.height - 0.5 * chart.margins.bottom;
        })
        .text((d) => {
            return (captionName == "month") ? d[captionName][0] : d[captionName];
        });

}

function stackedBarChart(data, captionType, svg) {
    chart = setUpBarChart(svg);
    console.log(chart);
    showStackedBarChart(data, chart, captionType);
}

