/* FUNCTIONS */
// Data randomization
function randomizeBarChartData(data, changeBaseline) {
  // For demonstration puroses, the baseline is between 10 and 250
  // The shift is between -baseline value and baseline value

  if (changeBaseline) {
    for (bar of data) {
      bar["baseline"] = Math.floor(Math.random() * (250 - Math.abs(bar["shift"]))) + Math.abs(bar["shift"]);
    }
  } else {
    for (bar of data) {
      bar["shift"] = Math.floor(Math.random() * 2 * bar["baseline"] - bar["baseline"]);
    }
  }
}

function randomizeLineChartData(data, changeBaseline) {
  // For demonstration puroses, the baseline is between 10 and 250
  // The shift is between -baseline value and baseline value

  if (changeBaseline) {
    data["baseline"] = Array.from({
      length: 50
    }, () => Math.random());
  } else {
    data["shift"] = Array.from({
      length: 50
    }, () => Math.random());
  }
}

function randomizeSankeyChart() {
  let companies = ["alpha", "beta", "gamma", "delta", "epsilon", "iota", "theta", "kappa"];

  let links = [];
  for (let source = 0; source < companies.length; source++) {
    for (let target = 0; target < companies.length; target++) {
      links.push({
        "source": source,
        "target": target + companies.length,
        "value": Math.random() * 100 + 1
      })
    }
  }

  c_data["links"] = links;
}

function randomizeCharts(changeBaseline) {
  randomizeBarChartData(vc_data, changeBaseline);
  randomizeBarChartData(ce_data, changeBaseline);
  randomizeLineChartData(pe_data, changeBaseline);
  randomizeLineChartData(re_data, changeBaseline);
  randomizeSankeyChart();
}

// Updating charts
function vc_update() {
  vc_svg.selectAll("*").remove();
  let showCaption = (vc_svg.node().parentNode.classList[1] == 'big')
  stackedBarChart(vc_data, "type", vc_svg, showCaption);
}

function pe_update() {
  pe_svg.selectAll("*").remove();
  let showCaption = (pe_svg.node().parentNode.classList[1] == 'big')
  lineChart(pe_svg, pe_data, showCaption);
}

function ce_update() {
  ce_svg.selectAll("*").remove();
  let showCaption = (ce_svg.node().parentNode.classList[1] == 'big')
  stackedBarChart(ce_data, "month", ce_svg, showCaption);
}

function re_update() {
  re_svg.selectAll("*").remove();
  let showCaption = (re_svg.node().parentNode.classList[1] == 'big')
  lineChart(re_svg, re_data, showCaption);
}

function c_update() {
  c_svg.selectAll("*").remove();
  sankeyChart(c_data, c_svg);
}

function updateCharts() {
  vc_update();
  pe_update();
  ce_update();
  re_update();
  c_update();
}

/* VARIABLES */
// Data
let vc_data = [{
    "type": "ACLV",
    "baseline": 123,
    "shift": -80
  },
  {
    "type": "Revenue",
    "baseline": 34,
    "shift": 30
  },
  {
    "type": "Churn",
    "baseline": 246,
    "shift": -30
  },
  {
    "type": "Volume",
    "baseline": 246,
    "shift": -30
  },
  {
    "type": "ARPU",
    "baseline": 246,
    "shift": 50
  },
];

let ce_data = [
  {
    "month": "January",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "February",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "March",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "April",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "May",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "June",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "July",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "August",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "September",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "October",
    "baseline": 13,
    "shift": 123
  },
  {
    "month": "November",
    "baseline": 23,
    "shift": 123
  },
  {
    "month": "December",
    "baseline": 23,
    "shift": 123
  }
];

let pe_data = {
  "xAxis": {
    "xMin": -12,
    "xMax": 50,
    "xUnit": "%"
  },
  "baseline": [],
  "shift": []
}

let re_data = {
  "xAxis": {
    "xMin": -12,
    "xMax": 50,
    "xUnit": "%"
  },
  "baseline": [],
  "shift": []
}

let c_data = {
  "nodes": [{
      "node": 0,
      "name": "Alpha"
    },
    {
      "node": 1,
      "name": "Beta"
    },
    {
      "node": 2,
      "name": "Gamma"
    },
    {
      "node": 3,
      "name": "Mobile"
    },
    {
      "node": 4,
      "name": "Epsilon"
    },
    {
      "node": 5,
      "name": "Iota"
    },
    {
      "node": 6,
      "name": "Theta"
    },
    {
      "node": 7,
      "name": "Kappa"
    },
    {
      "node": 8,
      "name": "Alpha"
    },
    {
      "node": 9,
      "name": "Beta"
    },
    {
      "node": 10,
      "name": "Gamma"
    },
    {
      "node": 11,
      "name": "Mobile"
    },
    {
      "node": 12,
      "name": "Epsilon"
    },
    {
      "node": 13,
      "name": "Iota"
    },
    {
      "node": 14,
      "name": "Theta"
    },
    {
      "node": 15,
      "name": "Kappa"
    },

  ],
  "links": []
}

/* CHART INITIALISATION */
// Chart location
const vc_svg = d3.select('#vc_graph').attr("height", 150).attr("width", 300);
const pe_svg = d3.select('#pe_graph').attr("height", 150).attr("width", 300);
const ce_svg = d3.select('#ce_graph').attr("height", 150).attr("width", 300);
const re_svg = d3.select('#re_graph').attr("height", 150).attr("width", 300);
const c_svg = d3.select('#c_graph').attr("height", 300).attr("width", 600);

randomizeCharts(true);
randomizeCharts(false);
stackedBarChart(vc_data, "type", vc_svg, false);
stackedBarChart(ce_data, "month", ce_svg, false);
lineChart(pe_svg, pe_data, false);
lineChart(re_svg, re_data, false);
sankeyChart(c_data, c_svg, false);
