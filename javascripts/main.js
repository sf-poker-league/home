// An array of seasons
// Each season is array of tournament objects, in chronological order
var seasons =
  [
    [
      {"Gregarious Narain": 265, "Charlie Ansanelli": 265, "Brett Suwyn": 140, "Romy Mancini": 80, "Chris Burkhart": 30},
      {"David Selle": 290, "Scott Waugaman": 190, "Sam Wyman": 130, "Justin Bailey": 70, "Jim Greer": 40 },
      {"Jim Greer": 185, "Sam Wyman": 185, "Unni Narayanan": 90, "Aaron Wasserman": 50,  "Romy Mancini": 30 },
      {"Jim Greer": 210, "Tim Conkling": 140, "Brett Suwyn": 90, "Bill Sandberg":50, "Justin Bailey":30},
      {"Ernie Hernandez": 130, "Alex St John": 90, "David Selle": 50, "Bill Sandberg": 30, },
      {"Matthieu Laporte": 30, "Charlie Ansanelli": 60, "Ian Chan": 110, "Bill Sandberg": 160, "Brett Suwyn": 230},
      {"Bill Sandberg": 30, "Aaron Wasserman": 60, "Jean Teather": 90, "Romy Mancini": 120, "Jim Greer": 200},
      {"Sam Wyman": 175, "Gregarious Narain": 175, "Aaron Wasserman": 100, "Jean Teather": 60, "Brett Suwyn": 30},
      {"Jean Teather": 40, "Romy Mancini": 60, "David Selle": 90, "Aaron Wasserman": 130}
    ],
    [
      {"Dana Wagner": 220, "Jim Meenan": 150, "Jeff Gurian": 100, "Jim Greer": 60, "Tyler Breisch": 30},
      {"Sam Wyman": 350, "Unni Narayanan": 230, "Dave Bogaty": 150, "Jason Pump": 90,  "Pablo Jablonski": 50, "Calvin Chan": 30},
      {"Bill Sandberg": 240, "Jim Greer": 160, "Unni Narayanan": 110, "Pablo Jablonski": 60, "Calvin Chan": 30},
      {"Sam Wyman": 190, "Justin Bailey": 130, "Jinfull Jeng": 90, "Jim Greer": 50, "Romy Mancini": 30},
      {"Dave Bogaty": 160, "Tim Conkling": 100, "Jim Greer": 60},
      {"Dave Bogaty": 190, "Curt Geen": 120, "Jean Teather": 90, "Paul Preece": 50, "Stephen Chyau": 30},
      {"Guy Argo": 230, "David Selle": 160, "Dave Bogaty": 90, "Pablo Jablonski": 50, "Jim Greer": 30},
      {"Curt Geen": 235, "Ernie Hernandez": 235, "Daniel Hunnicutt": 130, "David Selle": 70, "Brett Suwyn": 50}
    ],
    [
      {"Dana Wagner": 220, "Bill Sandberg": 150, "Christophe Thibault": 100, "Ike Jose": 60, "Jean Teather": 30},
      {"Jim Greer": 220, "Dave Bogaty": 150, "Alex Gudich": 100, "Ernie Hernandez": 60, "Pablo Jablonski": 30},
      {"Brett Suwyn": 30, "Tim Conkling": 60, "Jim Meenan": 220, "Christophe Thibault": 100, "Gvir Aviv": 150},
      {"Bill Sandberg": 30, "Mike Shriver": 80, "Unni Narayanan": 110, "Sam Wyman": 180},
      {"Tim Conkling": 30, "Pablo Jablonski": 70, "Brett Suwyn": 120, "Alex Gudich": 180, "Mike Shriver": 280},
      {"Amar Anand": 30, "Christophe Thibault": 60, "Bill Sandberg": 110, "David Selle": 170, "Jim Greer": 250},
      {"John Huang": 190, "Mike Shriver": 120, "Sam Wyman": 80, "David Selle": 60, "Jim Meenan": 30},
      {"Alex Gudich": 30, "Mike Shriver": 50, "Christophe Thibault": 90, "Brett Suwyn": 150, "Sam Wyman": 220},
      {"Guy Argo": 200, "Jim Greer": 140, "Sam Wyman": 80, "John Huang": 40},
      {"Jim Greer": 30, "Alex Gudich": 70, "Christophe Thibault": 120, "Bob Ippolito": 180, "Ian Chan": 270},
      {"Martin Welker": 30, "Brett Suwyn": 160, "David Selle": 60,"Tim Conkling": 230, "John Huang":100},
      {"Sam Wyman": 30, "Ralph Marx": 50, "Ian Chan": 80, "John Huang": 158, "David Selle": 162}
    ],
    [
      {"Nick Stuart": 40, "Jim Greer": 80, "Mike Shriver": 150, "Sam Wyman": 220, "John Huang": 330},
      {"Bill Sandberg": 40, "Tyler Breisch": 70, "Sam Wyman": 130, "Brian Jou": 200, "Curt Geen": 300},
    ]
  ]
;


// champions for each season, in chronological order
// null if the season is still in progress
var champions =
  [
    ["Charlie Ansanelli", "Gregarious Narain", "David Selle"],
    ["Ernie Hernandez", "Curt Geen", "Dave Bogaty", "Sam Wyman", "Guy Argo"],
    ["Ian Chan", "Jim Greer", "John Huang", "Mike Shriver"],
  ]
;

function get_current_season() {
  return seasons[seasons.length - 1];
}

function current_season_number() {
  return seasons.length;
}

var affilliations = {
  "Aaron Wasserman": "Blackboard Mobile",
  "Alex Gudich": "PPR Worldwide",
  "Amar Anand": "Twitter",
  "Bill Sandberg": "Zedo",
  "Bob Ippolito": "Mission Bit",
  "Brett Suwyn": "Grand Rounds",
  "Brian Jou": "Twitter",
  "Calvin Chan": "Making Fun",
  "Charlie Ansanelli": "Treasure Island Flea",
  "Chris Burkhart": "Chute",
  "Christophe Thibault": "Cockos, Inc",
  "Curt Geen": "Kongregate",
  "Dana Wagner": "Square",
  "Dave Bogaty": "Periscope",
  "Daniel Hunnicutt": "Electronic Arts",
  "David Selle": "CashBet",
  "Ernie Hernandez": "Chute",
  "Gvir Aviv": "Moishe House",
  "Gregarious Narain": "Chute",
  "Guy Argo": "Net2TV",
  "Ian Chan": "Twitter",
  "Ike Jose": "Zynga",
  "Jason Pump": "Loggly",
  "Jean Teather": "Meez",
  "Jeff Gurian": "Kongregate",
  "Jim Greer": "Kongregate",
  "Jim Meenan": "Kongregate",
  "Jinfull Jeng": "Blackboard Mobile",
  "Justin Bailey": "Double Fine",
  "Matthieu Laporte": "Twitter",
  "Nick Stuart": "Salesforce",
  "Pablo Jablonski": "Blackboard Mobile",
  "Paul Preece": "Kixeye",
  "Sam Wyman": "Crowdtilt",
  "Scott Waugaman": "Capcom",
  "Stephen Chyau": "Blackboard Mobile",
  "Tyler Breisch": "YouTube",
  "Unni Narayanan": "Mind Pirate",
};

function season_in_progress() {
  return seasons.length > champions.length;
}

function flatten(arr) {
  var result = [];

  for(var i = 0; i < arr.length; i++){
    var current_array = arr[i];
    for(var j = 0; j < current_array.length; j++) {
      var obj = current_array[j];
      result.push(obj);
    }
  }

  return result;
}

function get_point_totals(season) {
  // determine overall standings
  // add up all cashes for each player
  var totals = {};
  var tournaments = season;

  // if no season is passed, do all-time
  if (typeof(season)==="undefined") {
    tournaments = flatten(seasons);
  }

  for(var i = 0; i < tournaments.length; i++) {
    tournament = tournaments[i];

    for(var player in tournament) {
        var points = totals[player] || 0;
        points += tournament[player];
        totals[player] = points;
    }
  }

  return sort_results(totals);
}

// used as a tiebreaker when two players are equal in points
// we use alphabetical order as a tiebreaker
function string_sort_key(s) {
  return s[0].toLowerCase().charCodeAt(0) / -1000;
}

function sort_results(totals) {
  // sort players (need to convert from object to array)
  var sorted =[];
  for(var player in totals) {
    sorted.push([player, totals[player]]);
  }

  return sorted.sort(function(a, b) {return (b[1] + string_sort_key(b[0])) - (a[1] + string_sort_key(a[0]));});
}

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

function get_total_points(season) {
  var total = 0;

  for(var i=0; i<season.length; i++) {
    var tournament = season[i];

    for(var player in tournament) {
      total += tournament[player];
    }
  }

  return total;
}

function total_points() {
  var season = get_current_season();
  return numberWithCommas(get_total_points(season));
}

function cash_value_of_point(season, cash_total) {
  return 0.80*cash_total/get_total_points(season);
}

function dollar_totals(season, cash_total) {
  cash_value = cash_value_of_point(season, cash_total);

  results = get_point_totals(season);
  cash_results = [];

  for(var i=0; i<results.length; i++ ) {
    var current_player = results[i];
    cash_result = current_player[1]*cash_value;
    console.log(current_player[0] + " $" + Math.round(cash_result*100)/100.0);
  }

  return cash_results;
}

function getOrdinal(n) {
    if((parseFloat(n) == parseInt(n)) && !isNaN(n)){
        var s=["th","st","nd","rd"],
        v=n%100;
        return n+(s[(v-20)%10]||s[v]||s[0]);
    }
    return n;
}

function season_ordinal() {
  return getOrdinal(current_season_number());
}

_.mixin({templateFromUrl: function (url, data, settings) {
  var templateHtml = "";
  this.cache = this.cache || {};

  if (this.cache[url]) {
      templateHtml = this.cache[url];
  } else {
      $.ajax({
          url: url,
          method: "GET",
          async: false,
          success: function(data) {
              templateHtml = data;
          }
      });

      this.cache[url] = templateHtml;
  }

  return _.template(templateHtml, data, settings);
}});


