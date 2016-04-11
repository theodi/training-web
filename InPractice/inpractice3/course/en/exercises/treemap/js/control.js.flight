var transparent = false;
d3.csv("data/Home_Office_Air_Travel_Data_2011.csv", function(err, res) {
    if (!err) {
	res.forEach(function(d){ d['value'] = +parseFloat(d['value']).toFixed(0); });   
        var data = d3.nest()
		.key(function(d) { return d["Destination"]; })
		.key(function(d) { return d["Ticket_class_description"]; })
		.key(function(d) { return d["Supplier_name"]; })
		.entries(res);
	main({title: "UK Home Office flight data cost"}, {key: "Destination", values: data});
    }
});
