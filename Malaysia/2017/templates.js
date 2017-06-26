define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("buttons", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "<button class=\"base button submit\">\n    <span>  \n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.submit : stack1), depth0)) != null ? stack1 : "")
    + " \n    </span>\n</button>\n<button class=\"base button reset\">\n    <span>\n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.reset : stack1), depth0)) != null ? stack1 : "")
    + " \n    </span>\n</button> \n<button class=\"base button model\">\n    <span> \n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.showCorrectAnswer : stack1), depth0)) != null ? stack1 : "")
    + " \n    </span>\n</button>\n<button class=\"base button user\">\n    <span>\n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.hideCorrectAnswer : stack1), depth0)) != null ? stack1 : "")
    + " \n    </span>\n</button>\n";
},"useData":true}));

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title\">\n            <div role=\"heading\" tabindex=\"0\" class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\"  aria-level=\"4\">\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header component-header\">\n    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header-inner component-header-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("state", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression;

  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-complete\">"
    + alias2((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isQuestionType : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0._canShowFeedback : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.correct : stack1), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incorrect : stack1), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\">"
    + alias1((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"accessibility-state\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " graphic-widget-attribution";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " class=\"a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"graphic-inner component-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._graphic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"graphic-widget component-widget"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n      <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "/>\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"text-inner component-inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._text : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["resources"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "			<button class=\"base resources-show-all selected\" data-filter=\"all\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.allAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.all : stack1), depth0))
    + "</span>\n			</button>\n"
    + ((stack1 = (helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || alias4).call(alias3,(depth0 != null ? depth0.resources : depth0),"_type","document",{"name":"if_collection_contains","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || alias4).call(alias3,(depth0 != null ? depth0.resources : depth0),"_type","media",{"name":"if_collection_contains","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || alias4).call(alias3,(depth0 != null ? depth0.resources : depth0),"_type","link",{"name":"if_collection_contains","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<button class=\"base resources-show-document\" data-filter=\"document\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.documentAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.document : stack1), depth0))
    + "</span>\n			</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<button class=\"base resources-show-media\" data-filter=\"media\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.mediaAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.media : stack1), depth0))
    + "</span>\n			</button>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<button class=\"base resources-show-link\" data-filter=\"link\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.linkAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.link : stack1), depth0))
    + "</span>\n			</button>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"resources-item drawer-item "
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "\">\n		<button class=\"base resources-item-open drawer-item-open\" data-type=\""
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "\" data-filename=\""
    + alias4(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filename","hash":{},"data":data}) : helper)))
    + "\" data-href=\""
    + alias4(((helper = (helper = helpers._link || (depth0 != null ? depth0._link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_link","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\" role=\"button\" aria-label=\""
    + alias4(helpers.lookup.call(alias1,((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1._filterButtons : stack1),(depth0 != null ? depth0._type : depth0),{"name":"lookup","hash":{},"data":data}))
    + ". "
    + alias4(container.lambda(((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1.itemAriaExternal : stack1), depth0))
    + ". "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ". "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\n			<div class=\"drawer-item-title\">\n				<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n			</div>\n			<div class=\"drawer-item-description\">\n				<div class=\"drawer-item-description-inner\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n			</div>\n		</button>\n	</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"resources-inner\" role=\"complementary\">\n	<div class=\"resources-filter clearfix resources-col-"
    + alias3((helpers.return_column_layout_from_collection_length || (depth0 && depth0.return_column_layout_from_collection_length) || alias2).call(alias1,(depth0 != null ? depth0.resources : depth0),"_type",{"name":"return_column_layout_from_collection_length","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = (helpers.if_collection_contains_only_one_item || (depth0 && depth0.if_collection_contains_only_one_item) || alias2).call(alias1,(depth0 != null ? depth0.resources : depth0),"_type",{"name":"if_collection_contains_only_one_item","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"resources-item-container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.resources : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\" aria-label=\""
    + alias3(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._resources : stack1)) != null ? stack1.resourcesEnd : stack1), depth0))
    + "\"/>\n</div>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return "visited";
},"9":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"11":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "            <span class=\"menu-item-duration accessible-text-block\" role=\"region\" tabindex=\"0\">"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1), depth0)) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "<div class=\"menu-item-inner\" aria-label=\""
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n    <div class=\"menu-item-graphic\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"menu-item-title\">\n        <div class=\"menu-item-title-inner h3 accessible-text-block\" role=\"heading\" aria-level=\"2\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"menu-item-body\">\n        <div class=\"menu-item-body-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"menu-item-button\">\n        <button aria-label=\""
    + alias1(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"linkText","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" class=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " accessible-text-block\" "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n            "
    + ((stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"linkText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </button>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.duration : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<div class=\"menu-title\">\n					<div class=\"menu-title-inner h1 accessible-text-block\" role=\"heading\" aria-level=\"1\" tabindex=\"0\">\n						"
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"menu-body\">\n					<div class=\"menu-body-inner accessible-text-block\">\n						"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"menu-container\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n	<div class='menu-container-inner box-menu-inner clearfix'>\n		<div class=\"menu-header\">\n			<div class=\"menu-header-inner\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n	<div class=\"aria-label relative a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuEnd : stack1), depth0))
    + "</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"article-title\">\n            <div role=\"heading\" tabindex=\"0\" class=\"article-title-inner h2\"  aria-level=\"2\">\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-body\">\n            <div class=\"article-body-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-instruction\">\n            <div class=\"article-instruction-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"article-inner block-container\">\n\n    <div class=\"article-header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"block-title\">\n            <div role=\"heading\" tabindex=\"0\" class=\"block-title-inner h3\"  aria-level=\"3\">\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"block-body\">\n            <div class=\"block-body-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"block-instruction\">\n            <div class=\"block-instruction-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"block-inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"component-container\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"buttons-display\">\n        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n        <div class=\"buttons-display-inner\">\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"buttons-inner\">\n    <div class=\"buttons-cluster clearfix\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <button class=\"buttons-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n        <button class=\"buttons-feedback\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"drawer-inner\">\n	<span class='aria-label prevent-default' tabindex='0' role='region'>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1), depth0))
    + "</span>\n	<div class=\"drawer-holder\">\n	</div>\n	<div class=\"drawer-toolbar clearfix\">\n		<div class=\"drawer-back-button\">\n		<button class=\"base drawer-back icon icon-controls-small-left\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n		</button>\n		</div>\n		<div class=\"drawer-close-button\">\n		<button class=\"base drawer-close icon icon-cross\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\n		</button>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<button class=\"base drawer-item-open "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"drawer-item-title\">\n		<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n	</div>\n	<div class=\"drawer-item-description\">\n		<div class=\"drawer-item-description-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n	</div>\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\n    <div class=\"loader-gif\"><div role=\"heading\" tabindex=\"0\" class=\"h3\" aria-level=\"1\">Loading...</div></div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"navigation-inner clearfix\" role=\"navigation\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigation : stack1), depth0))
    + "\">\n	<button class=\"base navigation-home-button icon icon-home\" data-event=\"homeButton\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.home : stack1), depth0))
    + "\"></button>\n    <button class=\"base navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\"></button>\n    <div class=\"save-section-outer\">\n    	<section id=\"save-section\" class=\"save-section\"></section>\n    </div>\n    <button class=\"base navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\"></button>\n</div>\n<section id=\"cloud-status\" class=\"cloud-status\">\n	<img id=\"cloud-status-img\"></img>\n	<span id=\"cloud-status-text\"></span>\n</section>";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "                    <div class=\"notify-popup-icon\">\n                        <div class=\"icon"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                        </div>\n                    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " icon-question";
},"4":function(container,depth0,helpers,partials,data) {
    return " icon-warning";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                    <div class=\"notify-popup-title\">\n                        <div class=\"notify-popup-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n                        "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-body\">\n                        <div class=\"notify-popup-body-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n                    </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "                    <div class=\"notify-popup-buttons\">\n                        <button class=\"notify-popup-button notify-popup-alert-button\" role=\"button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n                    </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-buttons\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0._prompts : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "                            <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + container.escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <button class=\"base notify-popup-done\" role=\"button\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n                <div class=\"notify-popup-icon-close icon icon-cross\"></div>\n            </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"notify-popup notify-type-"
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data}) : helper)))
    + "\" role=\"region\" aria-label=\""
    + alias4(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\n    <div class=\"notify-popup-inner\">\n        <div class=\"notify-popup-content\">\n            <div class=\"notify-popup-content-inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._showIcon : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"popup",{"name":"if_value_equals","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n\n\n<div class=\"notify-shadow\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<div class=\"notify-push-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\n	<div class=\"notify-push-title\">\n		<div class=\"notify-push-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n			"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n	<div class=\"notify-push-body\">\n		<div class=\"notify-push-body-inner\">\n			"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias4).call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n<button class=\"base notify-push-close\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n	<span class=\"icon icon-cross\"></span>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "					<div class=\"page-title\">\n						<div class=\"page-title-inner h1\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n							"
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n						</div>\n					</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<div class=\"page-body\">\n						<div class=\"page-body-inner\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pageBody : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "						</div>\n					</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pageBody : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"page-inner article-container\" role=\"main\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.page : stack1), depth0))
    + "\">\n\n	<div class=\"page-header\">\n		<div class=\"page-header-inner clearfix\">\n\n			<div class=\"page-header-content\">\n				<div class=\"page-header-content-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				</div>\n			</div>\n\n		</div>\n	</div>\n</div>\n<div class=\"block inverted footer footer-logo-links\"><div class=\"block-inner\">\n        <div class=\"block-title\">\n            <div role=\"heading\" tabindex=\"-1\" class=\"block-title-inner h3\" aria-level=\"3\" aria-hidden=\"true\">\n            </div>\n        </div>\n        <div class=\"component-container\">\n            <div class=\"component graphic-component component-left nth-child-1\"><div class=\"graphic-inner component-inner\">\n                <div class=\"graphic-header component-header\">\n                    <div class=\"graphic-header-inner component-header-inner\">\n                        <div class=\"graphic-title component-title\">\n                            <div role=\"heading\" tabindex=\"-1\" class=\"graphic-title-inner component-title-inner\" aria-level=\"4\" aria-hidden=\"true\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"graphic-widget component-widget footer-logo\">\n                    <img src=\"adapt/css/assets/logo-small.png\" data-large=\"adapt/css/assets/logo-small.png\" data-small=\"adapt/css/assets/logo-small.png\" class=\"a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\">\n                </div>\n            </div>\n            <div class=\"accessibility-state\">\n                <span tabindex=\"-1\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\" aria-hidden=\"true\">  Incomplete</span>\n            </div></div><div class=\"component socialbuttons-component component-right nth-child-2\">\n            <div class=\"socialbuttons-inner component-inner\"><span class=\"aria-label prevent-default a11y-ignore\" tabindex=\"-1\" role=\"region\" aria-hidden=\"true\">This component displays a series of clickable social network buttons. You can customise each one bellow.</span>\n                <a class=\"social\" target=\"_blank\" href=\"https://twitter.com/ODIHQ\"><img src=\"adapt/css/assets/twitter.png\"></a>\n                <a class=\"social\" target=\"_blank\" href=\"https://www.facebook.com/MyODIHQ\"><img src=\"adapt/css/assets/facebook.png\"></a>\n                <a class=\"social\" target=\"_blank\" href=\"https://soundcloud.com/theodi\"><img src=\"adapt/css/assets/soundcloud.png\"></a>\n                <a class=\"social\" target=\"_blank\" href=\"https://www.scribd.com/OpenDataInstitute\"><img src=\"adapt/css/assets/scribd.png\"></a>\n                <a class=\"social\" target=\"_blank\" href=\"https://github.com/theodi\"><img src=\"adapt/css/assets/github.png\"></a>\n                <a class=\"social\" target=\"_blank\" href=\"https://vimeo.com/theodiuk\"><img src=\"adapt/css/assets/vimeo.png\"></a>\n                <a class=\"social\" target=\"_blank\" href=\"https://www.youtube.com/user/OpenDataInstituteUK\"><img src=\"adapt/css/assets/youtube.png\"></a>\n                <a class=\"social\" target=\"_blank\" href=\"https://www.flickr.com/photos/ukodi/\"><img src=\"adapt/css/assets/flickr.png\"></a>\n            </div>\n            <div class=\"about-links\">\n            <a class=\"about\" onClick='callTrigger(\"aboutPage:showAboutPage\");'>About</a> | <a class=\"licence\" onClick='callTrigger(\"licencePage:showLicencePage\");'>Licence</a> | <a class=\"skills\" onclick='callTrigger(\"skillsFramework:showSkills\");'>Learning outcomes</a> | <a class=\"contact\" href=\"mailto:training@theodi.org\">Contact us</a>\n            </div>\n        <div class=\"accessibility-state\">\n            <span tabindex=\"-1\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\" aria-hidden=\"true\">Incomplete</span>\n        </div></div></div>\n    </div></div>\n<div class=\"aria-label relative a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.pageEnd : stack1), depth0))
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

return this["Handlebars"];

});