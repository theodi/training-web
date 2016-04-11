function genderChart() {
    var data = [
        {key: "Male", y: 50},
        {key: "Female", y: 40},
	{key: "Prefer not to say", y: 10}
    ];
    addPie(data,"gender_chart");
}

function addPie(data,element) {
    var height = 300;
    var width = 300;
    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            .width(width)
            .height(height)
	    .showLabels(true)
	    .labelType("percent")
	    .color(["#1F77B4","#AEC7E8","#BDBDBD"]);

        d3.select("#" + element)
            .datum(data)
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

        return chart;
    });
}

function ageBar() {
          
     data = [
        {
            key: "Ages",
            values: [
                {
                    "label" : "16-24" ,
                    "value" : 0
                } ,
                {
                    "label" : "25-34" ,
                    "value" : 0.1
                } ,
                {
                    "label" : "35-44" ,
                    "value" : 0.70
                } ,
                {
                    "label" : "45-54" ,
                    "value" : 0
                } ,
                {
                    "label" : "55-64" ,
                    "value" : 0.10
                } ,
                {
                    "label" : "Prefer not to say" ,
                    "value" : 0.10
                }
		
	    ]
	}
     ];

     addBar(data,"age_chart");
}

function addBar(data,element) {
     var height = 220;
     var width = 480;
     nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .staggerLabels(false)
            //.staggerLabels(historicalBarChart[0].values.length > 8)
            .valueFormat(d3.format(".0f"))
            .tooltips(false)
            .showValues(true)
            .valueFormat(d3.format(".0%"))
            .duration(250)
	    .color(["#1F77B4"])
            .width(width)
            .height(height);

        chart.yAxis
	     .tickFormat(d3.format(".0%"));

        d3.select('#' + element)
            .datum(data)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });
}

function religionChart() {
	var data = [
	{
		"key": "Series 1",
			"color": "#1F77B4",
			"values": [
			{ 
				"label" : "Christian" ,
				"value" : 0
			} , 
			{ 
				"label" : "Other" ,
				"value" : 0
			},
			{ 
				"label" : "No religion" ,
				"value" : 0.50
			} , 
			{ 
				"label" : "Prefer not to say" ,
				"value" : 0.50
			}
		]
	}
	];
	addHorizontal(data,'religion_chart');
}

function addHorizontal(data,element) {
  var height = 260;
  var width = 480;
  nv.addGraph(function() {
    var chart = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .margin({top: 30, right: 20, bottom: 50, left: 175})
        .showValues(true)           //Show bar value next to each bar.
        .tooltips(true)             //Show tooltips on hover.
	.showLegend(false)
        .valueFormat(d3.format(".0%"))
//        .transitionDuration(350)
        .showControls(false);        //Allow user to switch between "Grouped" and "Stacked" mode.
        
    chart.yAxis
        .tickFormat(d3.format('.0%'));

    d3.select('#' + element)
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
}

function caringChart() {
	var data = [
	{
		"key": "Series 1",
			"color": "#1F77B4",
			"values": [
			{ 
				"label" : "Yes" ,
				"value" : 0.30
			} , 
			{ 
				"label" : "No" ,
				"value" : 0.50
			} , 
			{ 
				"label" : "Prefer not to say" ,
				"value" : 0.20
			}
		]
	}
	];
	addHorizontal(data,'caring_chart');
}

function disabilityChart() {
    var data = [
        {key: "Yes", y: 20},
        {key: "No", y: 60},
	{key: "Prefer not to say", y: 20}
    ];
    addPie(data,"disability_chart");
}

function ethnicChart() {
	var data = [
	{
		"key": "Series 1",
			"color": "#1F77B4",
			"values": [
			{ 
				"label" : "White British" ,
				"value" : 0.60
			} , 
			{ 
				"label" : "Other" ,
				"value" : 0.10
			} , 
			{ 
				"label" : "Prefer not to say" ,
				"value" : 0.30
			}
		]
	}
	];
	addHorizontal(data,'ethnic_chart');
}

function orientationBar() {
          
     data = [
        {
            key: "Orientation",
            values: [
                {
                    "label" : "Hetrosexual" ,
                    "value" : 0.60
                } ,
                {
                    "label" : "Gay/Lesbian" ,
                    "value" : 0.10
                } ,
                {
                    "label" : "Bisexual" ,
                    "value" : 0.10
                } ,
                {
                    "label" : "Other" ,
                    "value" : 0
                } ,
                {
                    "label" : "Prefer not to say" ,
                    "value" : 0.20
                }
		
	    ]
	}
     ];

     addBar(data,"sex_chart");
}

function schoolBar() {
          
     data = [
        {
            key: "Schooling",
            values: [
                {
                    "label" : "UK State" ,
                    "value" : 0.40
                } ,
                {
                    "label" : "UK Independent" ,
                    "value" : 0.20
                } ,
                {
                    "label" : "Non-UK" ,
                    "value" : 0.20
                } ,
                {
                    "label" : "Prefer not to say" ,
                    "value" : 0.20
                }
	    ]
	}
     ];

     addBar(data,"school_chart");
}

$( document ).ready(function() {
	genderChart();
	ageBar();	
	religionChart();
	caringChart();
	disabilityChart();
	ethnicChart();
	orientationBar();
	schoolBar();
});
