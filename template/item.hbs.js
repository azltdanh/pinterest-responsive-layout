var item = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "    <div class=\"grid-item\" id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div class=\"grid-item-photo\">\r\n            <a href=\"#"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"open-detail-view\">\r\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.img : stack1), depth0))
    + "\">\r\n            </a>\r\n            <div class=\"glyphicon rating\">\r\n                <div>\r\n                    <span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.rating : stack1), depth0))
    + "</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"grid-item-info\">\r\n            <h2 class=\"title\">["
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "]"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\r\n            <div class=\"description\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.description : stack1), depth0))
    + "</div>\r\n            <ul class=\"social-number list-inline\">\r\n                <li><span title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.views : stack1), depth0))
    + " views\"><span class=\"glyphicon glyphicon-eye-open\"></span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.views : stack1), depth0))
    + "</span></li>\r\n                <li><span title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.likes : stack1), depth0))
    + " likes\"><span class=\"glyphicon glyphicon-thumbs-up\"></span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.likes : stack1), depth0))
    + "</span></li>\r\n                <li><span title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.comments : stack1), depth0))
    + " comments\"><span class=\"glyphicon glyphicon-comment\"></span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.comments : stack1), depth0))
    + "</span></li>\r\n            </ul>\r\n        </div>\r\n        <hr />\r\n        <div class=\"grid-item-user\">\r\n            <a href=\"#\">\r\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "\" class=\"img-circle\" width=\"34\" height=\"34\">\r\n                <strong>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "</strong>\r\n            </a>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿<div id=\"collra_result\" class=\"grid\">\r\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n    <nav class=\"grid-pager\" data-page=\"2\">\r\n        <a href=\"#\" class=\"btn btn-block btn-success\">Next</a>\r\n    </nav>\r\n    <div class=\"grid-spinner\">\r\n        <img src=\"img/loading.gif\" alt=\"Loading...\">\r\n        <div><strong><em>Loading next items...</em></strong></div>\r\n    </div>\r\n    <div class=\"grid-noneleft\">\r\n        <div><strong><em>You reached the end!</em></strong></div>\r\n    </div>\r\n</div>";
},"useData":true});