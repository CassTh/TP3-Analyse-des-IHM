function lineChart(svg, data, showCaption) {
    chart = setUpLineChart(svg, showCaption);
    showLineChart(data, chart);

    if (showCaption) {
        let n = Math.floor(chart.width / 100);
        let x = rangeList(data["xAxis"]["xMin"], data["xAxis"]["xMax"], n);
        addLineChartCaption(x, data["xAxis"]["xUnit"], chart);
    }
}

function setUpLineChart(svg, showCaption) {
    const chart = {
        domElement:svg,
        height: Number(svg.attr("height")),
        width: Number(svg.attr("width"))
    };
    
    chart.margins = {
        top: 0.1 * chart.height,
        right: 0.05 * chart.width,
        bottom: (showCaption) ? 0.15 * chart.height : 0.0,
        left: 0.05 * chart.width
    },
    
    chart.graph = {
        height: chart.height - chart.margins.top - chart.margins.bottom,
        width: chart.width - chart.margins.left - chart.margins.right
    }
    
    chart.graph.domElement = svg.append("g")
    .attr("class", "graph")
    .attr("transform", () => {
        return "translate(" + chart.margins.left + "," + 0.5 * chart.margins.top + ")";
    });

    return chart;
}

function showLineChart(data, chart) {
    addLine(data["baseline"], "baseline", chart);
    addLine(data["shift"], "shift", chart);
}

function rangeList(start, end, size) {
    let ans = [start];

    let step = Math.abs(start - end) / size;

    for (let i = 0; i < size; i++) {
        let n = ans[i] + step;
        ans.push(Math.round(n * 10) / 10);
    }

    ans[size] = end;
    return ans;
}

function addLine(data, lineClass, chart) {
    const maxValue = data.reduce((a, b) => {
        return (a > b) ? a : b;
    });
    const minValue = data.reduce((a, b) => {
        return (a > b) ? b : a;
    });
    const range = maxValue - minValue;

    const scalefactor = chart.graph.height / range;

    let valueLine = d3.line()
        .x((d, i) => {
            return i * chart.graph.width / data.length
        })
        .y(d => {
            return -d * scalefactor + chart.graph.height;
        });

    chart.graph.domElement.append("path")
        .data([data])
        .attr("class", "line " + lineClass)
        .attr("style", "fill:none; stroke-width:3px")
        .attr("d", valueLine);
}

function addLineChartCaption(x, unit, chart) {
    let caption = chart.domElement.append("g")
        .attr("class", "caption");

    caption.append("rect")
        .attr("height", chart.margins.bottom)
        .attr("width", chart.width)
        .attr("transform", () => {
            let yOffset = chart.height - chart.margins.bottom;
            return "translate(0," + yOffset + ")";
        })
        .style("fill", "white");

    caption.selectAll("text")
        .data(x)
        .enter()
        .append("text")
        .attr("x", function (d, i) {
            return i * chart.width / (x.length) + chart.margins.left + chart.margins.right;
        })
        .attr("y", () => {
            return chart.height - 0.5 * chart.margins.bottom;
        })
        .text(function (d) {
            return d + unit;
        });

}

