function defer(method) {
    if (window.jQuery)
        method();
    else
        setTimeout(function() { defer(method) }, 10000);
}

function processEvents() {
	$.getJSON("course/config.json",function(data) {
        	moduleId = data._moduleId;
		lang = data._defaultLanguage;
		bannerControl(moduleId,lang);
	});    
}

function bannerControl(moduleId,lang) {
	if (lang != "en") {
		return;
	}
	if (moduleId != "ODI_2") {
		return;
	}

	$('#odibanner').html('<div class="component-container"><div class="tutor-icon-close icon icon-cross odibanner-close" onClick="$(\'#odibanner\').slideUp(\'slow\');"></div><div class="component graphic-component c-001   component-right nth-child-1"><div class="graphic-inner component-inner"><div class="graphic-widget component-widget"><img src="course/en/images/burst.png" alt="" title="" data-large="course/en/images/burst.png" data-medium="course/en/images/burst.png" data-small="course/en/images/burst.png"></div></div></div><div class="component text-component c-002   component-left nth-child-2"><div class="text-inner component-inner"><div class="text-title component-title"><h4 class="text-title-inner component-title-inner">Learn more from our experts</h4></div><div class="text-body component-body"><div class="text-body-inner component-body-inner"><p>Join our Webinar on XX of XXX at XX:XX to learn more.</p></div></div></div></div></div>');

	$('#odibanner').slideDown('slow');
}

document.addEventListener("DOMContentLoaded", function(event) {
	defer(function () {
	    processEvents();
	});
});
