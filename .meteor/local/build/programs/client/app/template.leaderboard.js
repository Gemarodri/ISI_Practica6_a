(function(){Meteor.startup(function(){document.body.appendChild(Spark.render(Template.__define__(null,Package.handlebars.Handlebars.json_ast_to_func(["<div id=\"outer\">\r\n    ",[">","leaderboard"],"\r\n  </div>"]))));});Template.__define__("leaderboard",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"leaderboard\">\r\n    ",["#",[[0,"each"],[0,"players"]],["\r\n      ",[">","player"],"\r\n    "]],"\r\n  </div>\r\n\r\n  ",["#",[[0,"if"],[0,"selected_name"]],["\r\n  <div class=\"details\">\r\n    <div class=\"name\">",["{",[[0,"selected_name"]]],"</div>\r\n    <input type=\"button\" class=\"inc\" value=\"Give 5 points\" />\r\n  </div>\r\n  "]],"\r\n\r\n  ",["#",[[0,"unless"],[0,"selected_name"]],["\r\n  <div class=\"none\">Click a player to select</div>\r\n  "]],"\r\n  ",[">","new_leader"],"\r\n  <div class=\"sort\">\r\n    <input type=\"button\" class=\"sortByName\" value=\"Sort By name\" />\r\n    <input type=\"button\" class=\"sortByScore\" value=\"Sort By score\" />\r\n\t<input type=\"button\" class=\"randomScore\" value=\"Random Score\" /> \r\n  </div>"]));
Template.__define__("player",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"player ",["{",[[0,"selected"]]],"\">\r\n\t<input type=\"button\" value=\"X\" class=\"delete\" />\r\n    <span class=\"name\">",["{",[[0,"name"]]],"</span>\r\n    <span class=\"score\">",["{",[[0,"score"]]],"</span>\r\n  </div>"]));
Template.__define__("new_leader",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"new_leader\">\r\n    <input id=\"new_leader\" type=\"text\" />\r\n    <input type=\"button\" class=\"add\" value=\"Add Leader\" />\r\n  </div>"]));

})();
