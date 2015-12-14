var api_url = "https://odi-elearning.herokuapp.com/";
if (!localStorage.getItem("_id")) {
  	$.get( api_url + "create_id.php", function( data ) {
  		window.localStorage.setItem("_id",data);
	});
}
	
var lang = ""
$.getJSON("course/config.json",function(data) {
	moduleId = data._moduleId;
	lang = data._defaultLanguage;
	setRawValue("lang",lang);
});
var id = "";

$(document).ready(function() {
	$.getJSON("course/config.json",function(data) {
		moduleId = data._moduleId;
		lang = data._defaultLanguage;
		setRawValue("lang",lang);
		if (moduleId == "ODI_nav") {
			setInterval(function() {updateProgress();},5000);
		}
	});
	setTimeout(function() {
		if (typeof theme !== "undefined") { 
			setRawValue("theme",theme); 
		}
	},1000);
});

function updateProgress() {
	var frame = document.getElementById('contentFrame').contentDocument;
	for (i=1;i<13;i++) {
		key = "ODI_" + i + "_cmi.suspend_data";
    		try {
			value = localStorage.getItem(key);
			data = $.parseJSON(value);
			completion = data.spoor.completion;
			total = completion.length;
			complete = completion.match(/1/g || []).length;	
			percent = (complete/total) * 100;
			frame.getElementById('ODI_' + i).setAttribute('value',percent);
		}
		catch(err) {
		}
	}
}

function getModuleId() {
	return moduleId;
}

function setSaveClass(toClass) {
    var frame = document.getElementById('contentFrame').contentDocument;
    var sl = frame.getElementById('save-section');
    $(sl).addClass('saving');
    $(sl).fadeIn();
    $(sl).css('background-image','url(adapt/css/assets/' + toClass + '.gif)');
}

function updateRemote() {
    var flag = localStorage.getItem("email");
    if (flag) { setSaveClass('cloud_saving'); }
    if(window.localStorage!==undefined) {
        send = {};
	send.data = JSON.stringify(localStorage);
        $.ajax({
           type: "POST",
           url: api_url + "store.php",         
           data: send,
           success: function(ret) {
		d = new Date();
    		localStorage.setItem(moduleId+"_lastSave",d.toString());
    		if (flag) { setSaveClass('cloud_success'); }
	   },
	   error: function (xhr, ajaxOptions, thrownError) {
       		console.log(xhr.status);
		console.log(thrownError);
    		if (flag) { setSaveClass('cloud_failed'); }
           }
        });
    } else {
    }
}

function fetchRemote() {
	if (typeof id == "undefined") {
		return;
	}
	url = api_url + "load.php?id=" + id;
	return $.getJSON( url , function() {
	})
	.done(function(data) {
		localStorage.clear;
		$.each(data, function(key, value) {
    			localStorage.setItem(key,value);
		});
		window.location.href=location.protocol + '//' + location.host + location.pathname;
	})
	.fail(function() {
		console.log("Failed to load data");
		window.location.href=location.protocol + '//' + location.host + location.pathname;
	});
}
function getRawValue(cname) {
    value = localStorage.getItem(cname);
    if (value) return value;
    return "";
}

function getValue(cname) {
    module_id = getModuleId();
    cname = module_id + "_" + cname;
    value = localStorage.getItem(cname);
    if (value) return value;
    return "";
}

function setRawValue(cname,cvalue) {
    localStorage.setItem(cname,cvalue);
    setTimeout(function() {updateRemote();},2000);
}

function setValue(cname, cvalue) {
    module_id = getModuleId();
    cname = module_id + "_" + cname;
    localStorage.setItem(cname,cvalue);
    setTimeout(function() {updateRemote();},2000);
}

function setValueLocal(cname, cvalue) {
    localStorage.setItem(cname,cvalue);
}

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();

id = QueryString.id;
fetchRemote();


var API = {
	LMSInitialize: function() {
		this.data = {};
		this.data["cmi.core.lesson_status"] = "not attempted";
		var lesson_status = getValue("cmi.core.lesson_status");
		if (lesson_status != "") {
			this.data["cmi.core.lesson_status"] = lesson_status;
		}
		this.data["cmi.suspend_data"] = getValue("cmi.suspend_data");
		return true;
	},
	LMSFinish: function() {
		return "true";
	},
	LMSGetValue: function(key) {
//		window.console && console.log('LMSGetValue("' + key + '") - ' + this.data[key]);
		if (typeof this.data[key] == "undefined") {
			localValue = getValue(key);
			this.data[key] = localValue;
			return localValue;
		} else {
			return this.data[key];
		}
	},
	LMSSetValue: function(key, value) {
//		window.console && console.log('LMSSetValue("' + key + '") - ' + value);
		this.data[key] = value;
		setValue(key,value,365);
		return "true";
	},
	LMSCommit: function() {
		return "true";
	},
	LMSGetLastError: function() {
		return 0;
	},
	LMSGetErrorString: function() {
		return "Fake error string.";
	},
	LMSGetDiagnostic: function() {
		return "Fake diagnostic information."
	}
}
