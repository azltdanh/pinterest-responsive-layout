var detail = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, blockHelperMissing=helpers.blockHelperMissing, buffer = "    <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n            <div class=\"grid-item\" id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n                <div class=\"grid-item-photo\">\r\n                    <!--<a href=\"#"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">-->\r\n                        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.img : stack1), depth0))
    + "\">\r\n                    <!--</a>-->\r\n                    <div class=\"glyphicon rating\">\r\n                        <div>\r\n                            <span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.rating : stack1), depth0))
    + "</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"grid-item-info\">\r\n                    <h2 class=\"title\">["
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "]"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\r\n                    <div class=\"description\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.description : stack1), depth0))
    + "</div>\r\n                    <ul class=\"social-number list-inline\">\r\n                        <li><span title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.views : stack1), depth0))
    + " views\"><span class=\"glyphicon glyphicon-eye-open\"></span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.views : stack1), depth0))
    + "</span></li>\r\n                        <li><span title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.likes : stack1), depth0))
    + " likes\"><span class=\"glyphicon glyphicon-thumbs-up\"></span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.likes : stack1), depth0))
    + "</span></li>\r\n                        <li><span title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.comments : stack1), depth0))
    + " comments\"><span class=\"glyphicon glyphicon-comment\"></span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.statistic : depth0)) != null ? stack1.comments : stack1), depth0))
    + "</span></li>\r\n                    </ul>\r\n                </div>\r\n                <hr />\r\n                <div class=\"grid-item-user\">\r\n                    <a href=\"#\">\r\n                        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "\" class=\"img-circle\" width=\"34\" height=\"34\">\r\n                        <strong>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "</strong>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-7\">\r\n            <div class=\"grid-item\">\r\n                <div class=\"grid-item-attributes\">\r\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.attributes : stack1), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n";
  stack1 = ((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helperMissing),(options={"name":"comments","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.comments) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div class=\"grid-item\">\r\n                <div class=\"grid-item-user\">\r\n                    <a href=\"#\">\r\n                        <img src=\"img/user/user.png\" alt=\"Az Ltdanh\" class=\"img-circle\" width=\"34\" height=\"34\">\r\n                        <strong>Az Ltdanh</strong>\r\n                    </a>\r\n                </div>\r\n                <div class=\"grid-item-user-comment\">\r\n                    <form>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"sr-only\" for=\"exampleInputEmail3\">Email address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" placeholder=\"Add a comment...\"></textarea>\r\n                        </div>\r\n                    </form>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Comment</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <dl class=\"dl-horizontal\">\r\n                        <dt>"
    + escapeExpression(lambda((data && data.key), depth0))
    + ":</dt>\r\n                        <dd>"
    + escapeExpression(lambda(depth0, depth0))
    + "</dd>\r\n                    </dl>\r\n                    <div><strong></strong> </div>\r\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "            <div class=\"grid-item\">\r\n                <div class=\"grid-item-user\">\r\n                    <a href=\"#\">\r\n                        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "\" class=\"img-circle\" width=\"34\" height=\"34\">\r\n                        <strong>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "</strong>\r\n                    </a>\r\n                </div>\r\n                <div class=\"grid-item-user-comment\">"
    + escapeExpression(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"comment","hash":{},"data":data}) : helper)))
    + "</div>\r\n            </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿<div id=\"collra_result\" class=\"grid-item-detail\">\r\n    <a class=\"btn btn-default close-detail-view\" data-spy=\"affix\" data-offset-top=\"92\"><span class=\"glyphicon glyphicon-arrow-left\"></span></a>\r\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});