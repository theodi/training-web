//# dc.js Getting Started and How-To Guide
'use strict';

/* jshint globalstrict: true */
/* global dc,d3,crossfilter,colorbrewer */

// ### Create Chart Objects

// Create chart objects associated with the container elements identified by the css selector.
// Note: It is often a good idea to have these objects accessible at the global scope so that they can be modified or
// filtered by other page controls.
//var locationChart = dc.pieChart('#location-chart');
var elevationChart = dc.barChart('#elevation-chart');
var bedroomsChart = dc.rowChart('#bedroom-chart');
var targetChart = dc.pieChart('#target-chart');

d3.csv('training-data.csv', function (data) {
    var ndx = crossfilter(data);
    var all = ndx.groupAll();

    var dateFormat = d3.time.format('%m/%d/%Y');
    var numberFormat = d3.format('.2f');

    var target = ndx.dimension(function (d) { 
	if (d.target == 1) {
		return "San Francisco";
	} else {
		return "New York";
	}
    });
    var targetGroup = target.group();

    targetChart /* dc.pieChart('#gain-loss-chart', 'chartGroup') */
        .width(180)
        .height(180)
        .radius(80)
        .dimension(target)
    // Set group
        .group(targetGroup)
        .ordinalColors(['blue', 'green'])
    // (_optional_) by default pie chart will use `group.key` as its label but you can overwrite it with a closure.
        .label(function (d) {
            var label = d.key;
            return label;
        });

    var bedrooms =  ndx.dimension(function (d) {
            return Math.round(d.beds);
    });
    var bedroomGroup = bedrooms.group();

    bedroomsChart /* dc.rowChart('#day-of-week-chart', 'chartGroup') */
        .width(480)
        .height(400)
        .margins({top: 20, left: 10, right: 10, bottom: 20})
        .group(bedroomGroup)
        .dimension(bedrooms)
        // Assign colors to each value in the x scale domain
        .ordinalColors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb','#3182bd', '#6baed6', '#9ecae1'])
        .label(function (d) {
            return d.key;
        })
        // Title sets the row text
        .title(function (d) {
            return d.value;
        })
        .elasticX(true)
        .xAxis().ticks(4);


    var elevation = ndx.dimension(function (d) {
	    return d.elevation;
//	    return Math.round(d.elevation / 10) * 10;
    });
    var elevationGroup = elevation.group();

    elevationChart /* dc.barChart('#volume-month-chart', 'chartGroup') */
        .width(800)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 40})
        .dimension(elevation)
        .group(elevationGroup)
        .elasticY(true)
        // (_optional_) whether bar should be center to its x value. Not needed for ordinal chart, `default=false`
        .centerBar(true)
        // (_optional_) set gap between bars manually in px, `default=2`
        .gap(1)
        // (_optional_) set filter brush rounding
        .round(dc.round.floor)
        .alwaysUseRounding(true)
        .x(d3.scale.linear().domain([0, 230]))
        .renderHorizontalGridLines(true)
        // Customize the filter displayed in the control span
        .filterPrinter(function (filters) {
            var filter = filters[0], s = '';
            s += numberFormat(filter[0]) + '% -> ' + numberFormat(filter[1]) + '%';
            return s;
        });

    // Customize axes
    elevationChart.xAxis().tickFormat(
        function (v) { return v + 'ft'; });
    elevationChart.yAxis().ticks(5);

    //simply call `.renderAll()` to render all charts on the page
    dc.renderAll();

});
