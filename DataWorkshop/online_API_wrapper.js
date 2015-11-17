var api_url = "https://odi-elearning.herokuapp.com/";

function setID() {
  	$.get( api_url + "create_id.php", function( data ) {
  		window.localStorage.setItem("_id",data);
	})
	.fail( function() {
		setTimeout(function() {setID();},10000);
	});
}

if (!localStorage.getItem("_id")) {
	setID();  
}

var moduleId = "";
var lang = ""
var config = {};
$.getJSON("course/config.json",function(data) {
	moduleId = data._moduleId;
	config = data;
});
var id = "";

$(document).ready(function() {
	$.getJSON("course/config.json",function(data) {
		moduleId = data._moduleId;
		lang = data._defaultLanguage;
		setRawValue("lang",lang);
		if (moduleId == "ODI_nav" || moduleId == "ODI_welcome"){
			setInterval(function() {updateProgress();},1000);
			setTimeout(function() {addOverlays();},2000);
		}
	});
	setTimeout(function() {setRawValue("theme",theme)},1000);
});

function reSizeOverlays() {
	$('#explorer').css('height',$('.b-01').height());
	$('#strategist').css('height',$('.b-10').height());
	$('#practitioner').css('height',$('.b-20').height());
	$('#explorer').css('padding-top',($('.b-01').height()/3) + 'px');
	$('#strategist').css('padding-top',($('.b-10').height()/3) + 'px');
	$('#practitioner').css('padding-top',($('.b-20').height()/3) + 'px');
}

function addOverlays() {
	$('.b-01').prepend('<div class="overlay" id="explorer"></div>');
	$('.b-10').prepend('<div class="overlay" id="strategist"></div>');
	$('.b-20').prepend('<div class="overlay" id="practitioner"></div>');
	$(window).resize(function() {
		reSizeOverlays();
	});
	$('#explorer').html('Type your email to start: <br/></br><input type="email" name="email"></input></br></br>Entering an email will allow to save your learning progress.');
	reSizeOverlays();
}
function updateProgress() {
//	var frame = document.getElementById('contentFrame').contentDocument;
	if (localStorage.getItem('email')) {
		$('#explorer').hide();
	}
	for (i=1;i<13;i++) {
		key = "ODI_" + i + "_cmi.suspend_data";
    		try {
			value = localStorage.getItem(key);
			data = $.parseJSON(value);
			completion = data.spoor.completion;
			total = completion.length;
			complete = completion.match(/1/g || []).length;	
			percent = (complete/total) * 100;
			document.getElementById('ODI_' + i).setAttribute('value',percent);
		}
		catch(err) {
		}
	}
}

function getModuleId() {
	return moduleId;
}

function setSaveClass(toClass) {
//    var frame = document.getElementById('contentFrame').contentDocument;
    var sl = document.getElementById('save-section');
    $(sl).addClass("saving");
    $(sl).fadeIn();
    $(sl).css('background-image','url(adapt/css/assets/' + toClass + '.gif)');
    var ss = document.getElementById('cloud-status-text');
    $(ss).html(config["_phrases"][toClass]);
    var ssi = document.getElementById('cloud-status-img');
    $(ssi).attr('src','adapt/css/assets/' + toClass + '.gif');
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
    		localStorage.setItem("ODI_lastSave",d.toString());
    		localStorage.setItem(moduleId+"_lastSave",d.toString());
    		if (flag) { setSaveClass('cloud_success'); }
	   },
	   error: function (xhr, ajaxOptions, thrownError) {
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
		var update = false;
		if (localStorage.getItem("_id") != id) {
			localStorage.clear();
			update = true;
			console.log("new data from remote");
		} else {
			lastGlobalSave = data["ODI_lastSave"];
			localSave = localStorage.getItem("ODI_lastSave");
			if (lastGlobalSave > localSave) {
				update = true;
				console.log("Updating data from remote");
			}
		}
		if (update) {
			$.each(data, function(key, value) {
				localStorage.setItem(key,value);
			});
			window.location.href=location.protocol + '//' + location.host + location.pathname;
		}
	})
	.fail(function() {
		console.log("Failed to load data");
		//window.location.href=location.protocol + '//' + location.host + location.pathname;
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

id = QueryString.id;
if (typeof id != "undefined") {
	fetchRemote();
} else if (!localStorage.getItem("_id")) {
  	$.get( api_url + "create_id.php", function( data ) {
  		window.localStorage.setItem("_id",data);
	});
} else {
	id = localStorage.getItem("_id");
	fetchRemote();
}
