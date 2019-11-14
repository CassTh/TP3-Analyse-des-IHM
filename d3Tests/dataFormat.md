# Data formats

## Choices (Sankey)

```javascript
c_data = {
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
        {"source": 1, "target": 2, "value":12}
    ]
}
```

## Various changes (stacked bars)

```javascript
vc_data = [ // Whatever for "baseline" and "shift"
    {"type": "ACLV", "baseline": 123, "shift": 123},
    {"type": "ARPU", "baseline": 123, "shift": 123},
    {"type": "Revenue", "baseline": 123, "shift": 123},
    {"type": "Volume", "baseline": 123, "shift": 123},
    {"type": "Churn", "baseline": 123, "shift": 123}
]
```

## Consumer evolution (stacked bars or waterfall if time)

```javascript
ce_data = [ // Whatever for "baseline" and "shift"
    {"month": "January", "baseline": 123, "shift": 123},
    {"month": "February", "baseline": 123, "shift": 123},
    {"month": "March", "baseline": 123, "shift": 123},
    {"month": "April", "baseline": 123, "shift": 123},
    {"month": "May", "baseline": 123, "shift": 123},
    {"month": "June", "baseline": 123, "shift": 123},
    {"month": "July", "baseline": 123, "shift": 123},
    {"month": "August", "baseline": 123, "shift": 123},
    {"month": "September", "baseline": 123, "shift": 123},
    {"month": "October", "baseline": 123, "shift": 123},
    {"month": "November", "baseline": 123, "shift": 123},
    {"month": "December", "baseline": 123, "shift": 123}
]
```

## Price elasticity (lines)

```javascript
pe_data = {
    "volume": {
        "xAxis": {
            "xMin":-12,
            "xMax":50,
            "xUnit":"%"
        },
        "baseline": [/* 100 values */],
        "shift": [/* 100 values relative to baseline or absolute */]
    },
    "revenue": {
        "xAxis": {
            "xMin":-12,
            "xMax":50,
            "xUnit":"%"
        },
        "baseline": [/* 100 values */],
        "shift": [/* 100 values relative to baseline or absolute */]
    }
}
```

## Revenue evolution (lines)

```javascript
re_data = [ // length = idk, idc
    {
        "xAxis": {
            "xMin":-12,
            "xMax":50,
            "xUnit":"%"
        },
        "baseline": [/* 100 values */],
        "shift": [/* 100 values relative to baseline or absolute */]
    },
    {
        "xAxis": {
            "xMin":-12,
            "xMax":50,
            "xUnit":"%"
        },
        "baseline": [/* 100 values */],
        "shift": [/* 100 values relative to baseline or absolute */]
    },
]
```
