// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Players = new Meteor.Collection("players");

if (Meteor.isClient) {
  Template.leaderboard.players = function () {
    return Players.find({}, {sort: {score: -1, name: 1}});
  };
 Validation = {
  name_OK: function (name) {
    if (name.length == 0) {
		alert("Name is empty! Try again" )
      return false;
    } else if (this.name_exists(name)) {
		alert(name+ " already exists! Try again" )
      return false;
    } else {
      return true;
    }
  },
  name_exists: function(name) {
    return Players.findOne({name: name});
  }
};

  Template.leaderboard.players = function () {
     if (Session.get("sortByName")) {
    return Players.find({}, {sort: {name: 1, score: -1}});    
  } else {
    return Players.find({}, {sort: {score: -1, name: 1}});
  }
  };

  Template.leaderboard.selected_name = function () {
    var player = Players.findOne(Session.get("selected_player"));
    return player && player.name;
  };

  Template.player.selected = function () {
    return Session.equals("selected_player", this._id) ? "selected" : '';
  };

  Template.leaderboard.events({
    'click input.inc': function () {
      Players.update(Session.get("selected_player"), {$inc: {score: 5}});
    },
	'click input.sortByName': function () {
    Session.set("sortByName", true);
	},
	'click input.sortByScore': function () {
    Session.set("sortByName", false);
	},
	'click input.randomScore': function () {
	 Players.update(Session.get("selected_player"), {$inc: {score:Math.floor(Random.fraction()*20)*3}});
	}
  });
   Template.new_leader.events = {
  'click input.add': function () {
    var new_leader = document.getElementById("new_leader").value.trim();
	if (Validation.name_OK(new_leader)) {
      Players.insert({name: new_leader, score: 0});
    } 
  }
};

  Template.player.events({
  'click input.delete': function () { 
    Players.remove(this._id);
  },
    'click': function () {
      Session.set("selected_player", this._id);
    }
  });
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Players.find().count() === 0) {
      var names = ["Ada Lovelace",
                   "Grace Hopper",
                   "Marie Curie",
                   "Carl Friedrich Gauss",
                   "Nikola Tesla",
                   "Claude Shannon"];
      for (var i = 0; i < names.length; i++)
        Players.insert({name: names[i], score: Math.floor(Random.fraction()*10)*5});
    }
  });
}