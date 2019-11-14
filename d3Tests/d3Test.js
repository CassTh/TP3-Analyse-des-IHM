// DATA
const vc_data = [{
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

const ce_data = [ // Whatever for "baseline" and "shift"
    {"month": "January", "baseline": 23, "shift": 123},
    {"month": "February", "baseline": 23, "shift": 123},
    {"month": "March", "baseline": 23, "shift": 123},
    {"month": "April", "baseline": 23, "shift": 123},
    {"month": "May", "baseline": 23, "shift": 123},
    {"month": "June", "baseline": 23, "shift": 123},
    {"month": "July", "baseline": 23, "shift": 123},
    {"month": "August", "baseline": 23, "shift": 123},
    {"month": "September", "baseline": 23, "shift": 123},
    {"month": "October", "baseline": 13, "shift": 123},
    {"month": "November", "baseline": 23, "shift": 123},
    {"month": "December", "baseline": 23, "shift": 123}
];

const pe_data = {
    "xAxis": {
        "xMin": -12,
        "xMax": 50,
        "xUnit": "%"
    },
    "baseline": [0.0, 0.01745240643728351, 0.03489949670250097, 0.05233595624294383, 0.069756473, 0.08715574274765817, 0.10452846326765346, 0.12186934340514748, 0.139173, 0.15643446504023087, 0.17364817766693033, 0.1908089953765448, 0.207, 0.224951054343865, 0.24192189559966773, 0.25881904510252074, 0.27563735581699916, 0.29237170472273677, 0.3090169943749474, 0.32556815445715664,
        0.3420201433256687, 0.35836794954530027, 0.374606593415912, 0.3907311284892737,
        0.40673664307580015, 0.42261826174069944, 0.4383711467890774, 0.4539904997395467, 0.4694715627858908, 0.48480962024633706, 0.49999999999999994, 0.5150380749100, 0.5299192642332049, 0.5446390350150271, 0.5591929034707469, 0.5735764363510, 0.5877852522924731, 0.6018150231520483, 0.6156614753256582, 0.62932039104983, 0.6427876096865393, 0.6560590289905072, 0.6691306063588582, 0.68199836006249, 0.6946583704589973, 0.7071067811865475, 0.7193398003386511, 0.73135370161917, 0.7431448254773941, 0.754709580222772, 0.766044443118978, 0.7771459614569708, 0.788010753606722, 0.7986355100472928, 0.8090169943749475, 0.8191520442889918,
        0.8290375725550417, 0.8386705679454239, 0.848048096156426, 0.8571673007021122,
        0.8660254037844386, 0.8746197071393957, 0.8829475928589269, 0.8910065241883678,
        0.898794046299167, 0.9063077870366499, 0.9135454576426009, 0.9205048534524403, 0.9271838545667874,
        0.9335804264972017, 0.9396926207859083, 0.9455185755993167, 0.9510565162951535,
        0.9563047559630354, 0.9612616959383189, 0.9659258262890683, 0.9702957262759965,
        0.9743700647852352, 0.9781476007338056, 0.981627183447664, 0.984807753012208,
        0.9876883405951378, 0.9902680687415703, 0.992546151641322, 0.9945218953682733,
        0.9961946980917455, 0.9975640502598242, 0.9986295347545738, 0.9993908270190958,
        0.9998476951563913, 1.0
    ],
    "shift": [0.0, 0.01745240643728351, 0.03489949670250097, 0.05233595624294383, 0.069756473, 0.08715574274765817, 0.10452846326765346, 0.12186934340514748, 0.139173, 0.15643446504023087, 0.17364817766693033, 0.1908089953765448, 0.207, 0.224951054343865, 0.24192189559966773, 0.25881904510252074, 0.27563735581699916, 0.29237170472273677, 0.3090169943749474, 0.32556815445715664,
        0.3420201433256687, 0.35836794954530027, 0.374606593415912, 0.3907311284892737,
        0.40673664307580015, 0.42261826174069944, 0.4383711467890774, 0.4539904997395467, 0.4694715627858908, 0.48480962024633706, 0.49999999999999994, 0.5150380749100, 0.5299192642332049, 0.5446390350150271, 0.5591929034707469, 0.5735764363510, 0.5877852522924731, 0.6018150231520483, 0.6156614753256582, 0.62932039104983, 0.6427876096865393, 0.6560590289905072, 0.6691306063588582, 0.68199836006249, 0.6946583704589973, 0.7071067811865475, 0.7193398003386511, 0.73135370161917, 0.7431448254773941, 0.754709580222772, 0.766044443118978, 0.7771459614569708, 0.788010753606722, 0.7986355100472928, 0.8090169943749475, 0.8191520442889918,
        0.8290375725550417, 0.8386705679454239, 0.848048096156426, 0.8571673007021122,
        0.8660254037844386, 0.8746197071393957, 0.8829475928589269, 0.8910065241883678,
        0.898794046299167, 0.9063077870366499, 0.9135454576426009, 0.9205048534524403, 0.9271838545667874,
        0.9335804264972017, 0.9396926207859083, 0.9455185755993167, 0.9510565162951535,
        0.9563047559630354, 0.9612616959383189, 0.9659258262890683, 0.9702957262759965,
        0.9743700647852352, 0.9781476007338056, 0.981627183447664, 0.984807753012208,
        0.9876883405951378, 0.9902680687415703, 0.992546151641322, 0.9945218953682733,
        0.9961946980917455, 0.9975640502598242, 0.9986295347545738, 0.9993908270190958,
        0.9998476951563913, 1.0
    ]
}

const re_data = [
    {
        "xAxis": {
            "xMin":-12,
            "xMax":50,
            "xUnit":"$"
        },
        "baseline": [0.0, 0.01745240643728351, 0.03489949670250097, 0.05233595624294383, 0.069756473, 0.08715574274765817, 0.10452846326765346, 0.12186934340514748, 0.139173, 0.15643446504023087, 0.17364817766693033, 0.1908089953765448, 0.207, 0.224951054343865, 0.24192189559966773, 0.25881904510252074, 0.27563735581699916, 0.29237170472273677, 0.3090169943749474, 0.32556815445715664,
            0.3420201433256687, 0.35836794954530027, 0.374606593415912, 0.3907311284892737,
            0.40673664307580015, 0.42261826174069944, 0.4383711467890774, 0.4539904997395467, 0.4694715627858908, 0.48480962024633706, 0.49999999999999994, 0.5150380749100, 0.5299192642332049, 0.5446390350150271, 0.5591929034707469, 0.5735764363510, 0.5877852522924731, 0.6018150231520483, 0.6156614753256582, 0.62932039104983, 0.6427876096865393, 0.6560590289905072, 0.6691306063588582, 0.68199836006249, 0.6946583704589973, 0.7071067811865475, 0.7193398003386511, 0.73135370161917, 0.7431448254773941, 0.754709580222772, 0.766044443118978, 0.7771459614569708, 0.788010753606722, 0.7986355100472928, 0.8090169943749475, 0.8191520442889918,
            0.8290375725550417, 0.8386705679454239, 0.848048096156426, 0.8571673007021122,
            0.8660254037844386, 0.8746197071393957, 0.8829475928589269, 0.8910065241883678,
            0.898794046299167, 0.9063077870366499, 0.9135454576426009, 0.9205048534524403, 0.9271838545667874,
            0.9335804264972017, 0.9396926207859083, 0.9455185755993167, 0.9510565162951535,
            0.9563047559630354, 0.9612616959383189, 0.9659258262890683, 0.9702957262759965,
            0.9743700647852352, 0.9781476007338056, 0.981627183447664, 0.984807753012208,
            0.9876883405951378, 0.9902680687415703, 0.992546151641322, 0.9945218953682733,
            0.9961946980917455, 0.9975640502598242, 0.9986295347545738, 0.9993908270190958,
            0.9998476951563913, 1.0
        ],
        "shift": [0.0, 0.01745240643728351, 0.03489949670250097, 0.05233595624294383, 0.069756473, 0.08715574274765817, 0.10452846326765346, 0.12186934340514748, 0.139173, 0.15643446504023087, 0.17364817766693033, 0.1908089953765448, 0.207, 0.224951054343865, 0.24192189559966773, 0.25881904510252074, 0.27563735581699916, 0.29237170472273677, 0.3090169943749474, 0.32556815445715664,
            0.3420201433256687, 0.35836794954530027, 0.374606593415912, 0.3907311284892737,
            0.40673664307580015, 0.42261826174069944, 0.4383711467890774, 0.4539904997395467, 0.4694715627858908, 0.48480962024633706, 0.49999999999999994, 0.5150380749100, 0.5299192642332049, 0.5446390350150271, 0.5591929034707469, 0.5735764363510, 0.5877852522924731, 0.6018150231520483, 0.6156614753256582, 0.62932039104983, 0.6427876096865393, 0.6560590289905072, 0.6691306063588582, 0.68199836006249, 0.6946583704589973, 0.7071067811865475, 0.7193398003386511, 0.73135370161917, 0.7431448254773941, 0.754709580222772, 0.766044443118978, 0.7771459614569708, 0.788010753606722, 0.7986355100472928, 0.8090169943749475, 0.8191520442889918,
            0.8290375725550417, 0.8386705679454239, 0.848048096156426, 0.8571673007021122,
            0.8660254037844386, 0.8746197071393957, 0.8829475928589269, 0.8910065241883678,
            0.898794046299167, 0.9063077870366499, 0.9135454576426009, 0.9205048534524403, 0.9271838545667874,
            0.9335804264972017, 0.9396926207859083, 0.9455185755993167, 0.9510565162951535,
            0.9563047559630354, 0.9612616959383189, 0.9659258262890683, 0.9702957262759965,
            0.9743700647852352, 0.9781476007338056, 0.981627183447664, 0.984807753012208,
            0.9876883405951378, 0.9902680687415703, 0.992546151641322, 0.9945218953682733,
            0.9961946980917455, 0.9975640502598242, 0.9986295347545738, 0.9993908270190958,
            0.9998476951563913, 1.0
        ]
    },
    {
        "xAxis": {
            "xMin":-12,
            "xMax":50,
            "xUnit":"$"
        },
        "baseline": [0.0, 0.01745240643728351, 0.03489949670250097, 0.05233595624294383, 0.069756473, 0.08715574274765817, 0.10452846326765346, 0.12186934340514748, 0.139173, 0.15643446504023087, 0.17364817766693033, 0.1908089953765448, 0.207, 0.224951054343865, 0.24192189559966773, 0.25881904510252074, 0.27563735581699916, 0.29237170472273677, 0.3090169943749474, 0.32556815445715664,
            0.3420201433256687, 0.35836794954530027, 0.374606593415912, 0.3907311284892737,
            0.40673664307580015, 0.42261826174069944, 0.4383711467890774, 0.4539904997395467, 0.4694715627858908, 0.48480962024633706, 0.49999999999999994, 0.5150380749100, 0.5299192642332049, 0.5446390350150271, 0.5591929034707469, 0.5735764363510, 0.5877852522924731, 0.6018150231520483, 0.6156614753256582, 0.62932039104983, 0.6427876096865393, 0.6560590289905072, 0.6691306063588582, 0.68199836006249, 0.6946583704589973, 0.7071067811865475, 0.7193398003386511, 0.73135370161917, 0.7431448254773941, 0.754709580222772, 0.766044443118978, 0.7771459614569708, 0.788010753606722, 0.7986355100472928, 0.8090169943749475, 0.8191520442889918,
            0.8290375725550417, 0.8386705679454239, 0.848048096156426, 0.8571673007021122,
            0.8660254037844386, 0.8746197071393957, 0.8829475928589269, 0.8910065241883678,
            0.898794046299167, 0.9063077870366499, 0.9135454576426009, 0.9205048534524403, 0.9271838545667874,
            0.9335804264972017, 0.9396926207859083, 0.9455185755993167, 0.9510565162951535,
            0.9563047559630354, 0.9612616959383189, 0.9659258262890683, 0.9702957262759965,
            0.9743700647852352, 0.9781476007338056, 0.981627183447664, 0.984807753012208,
            0.9876883405951378, 0.9902680687415703, 0.992546151641322, 0.9945218953682733,
            0.9961946980917455, 0.9975640502598242, 0.9986295347545738, 0.9993908270190958,
            0.9998476951563913, 1.0
        ],
        "shift": [0.0, 0.01745240643728351, 0.03489949670250097, 0.05233595624294383, 0.069756473, 0.08715574274765817, 0.10452846326765346, 0.12186934340514748, 0.139173, 0.15643446504023087, 0.17364817766693033, 0.1908089953765448, 0.207, 0.224951054343865, 0.24192189559966773, 0.25881904510252074, 0.27563735581699916, 0.29237170472273677, 0.3090169943749474, 0.32556815445715664,
            0.3420201433256687, 0.35836794954530027, 0.374606593415912, 0.3907311284892737,
            0.40673664307580015, 0.42261826174069944, 0.4383711467890774, 0.4539904997395467, 0.4694715627858908, 0.48480962024633706, 0.49999999999999994, 0.5150380749100, 0.5299192642332049, 0.5446390350150271, 0.5591929034707469, 0.5735764363510, 0.5877852522924731, 0.6018150231520483, 0.6156614753256582, 0.62932039104983, 0.6427876096865393, 0.6560590289905072, 0.6691306063588582, 0.68199836006249, 0.6946583704589973, 0.7071067811865475, 0.7193398003386511, 0.73135370161917, 0.7431448254773941, 0.754709580222772, 0.766044443118978, 0.7771459614569708, 0.788010753606722, 0.7986355100472928, 0.8090169943749475, 0.8191520442889918,
            0.8290375725550417, 0.8386705679454239, 0.848048096156426, 0.8571673007021122,
            0.8660254037844386, 0.8746197071393957, 0.8829475928589269, 0.8910065241883678,
            0.898794046299167, 0.9063077870366499, 0.9135454576426009, 0.9205048534524403, 0.9271838545667874,
            0.9335804264972017, 0.9396926207859083, 0.9455185755993167, 0.9510565162951535,
            0.9563047559630354, 0.9612616959383189, 0.9659258262890683, 0.9702957262759965,
            0.9743700647852352, 0.9781476007338056, 0.981627183447664, 0.984807753012208,
            0.9876883405951378, 0.9902680687415703, 0.992546151641322, 0.9945218953682733,
            0.9961946980917455, 0.9975640502598242, 0.9986295347545738, 0.9993908270190958,
            0.9998476951563913, 1.0
        ]
    },
]

const c_data = {
    "nodes": [ // As is
        {"node": 0, "name": "Alpha"},
        {"node": 1, "name": "Beta"},
        {"node": 2, "name": "Gamma"},
        {"node": 3, "name": "Iota"},
        {"node": 4, "name": "Epsilon"},
        {"node": 5, "name": "Mobile"},
        {"node": 6, "name": "Theta"},
        {"node": 7, "name": "Kappa"}
    ],
    "links": [ // source and target in [0,7], whatever for values, length = idk, idc
        {"source": 0, "target": 2, "value":12},
        {"source": 1, "target": 2, "value":12},
        {"source": 3, "target": 1, "value":12},
        {"source": 1, "target": 1, "value":12},

    ]
}

// CHARTS
let vc_svg = d3.select('#vc_graph').attr("height", 300).attr("width", 600);
let pe_svg = d3.select('#pe_graph').attr("height", 300).attr("width", 600);
let ce_svg = d3.select('#ce_graph').attr("height", 300).attr("width", 600);
let re_svg = d3.select('#re_graph').attr("height", 300).attr("width", 600);
let c_svg = d3.select('#c_graph').attr("height", 300).attr("width", 600);

// SHOW CHARTS
stackedBarChart(vc_data, "type", vc_svg);
stackedBarChart(ce_data, "month", ce_svg);
lineChart(pe_svg, pe_data);
lineChart(re_svg, re_data[0]);
//sankeyChart(c_data, c_svg);

