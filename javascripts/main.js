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
    ]
  ]
;


// champions for each season, in chronological order
// null if the season is still in progress
var champions =
  [
    ["Charlie Ansanelli", "Gregarious Narain", "David Selle"],
    ["Ernie Hernandez", "Curt Geen", "Dave Bogaty", "Sam Wyman", "Guy Argo"]
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
  "Brett Suwyn": "Chute",
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

function write_tournament(results, tournament_number) {
  document.write("<h4>Tournament " + tournament_number + " Results</h4>");
  write_results(sort_results(results));
}

function write_divider() {
  document.write("<div style=\"text-align:center\"><h1>♠♥♦♣</h1></div>");
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

function write_all_seasons() {
  document.write("<h3>All-time Leaders</h3>");
  write_standings();
  document.write("<p><a href='index.html' style='color: #aa0000'>Home</a></p>")

  for(var j=seasons.length - 1; j>=0; j--) {
    var season = seasons[j];
    var season_number = j+1;
    document.write("<h3>Season " + season_number + "</h3>");

    var season_champions = champions[j];
    if (season_champions) {
      write_champions(season_champions);
    }
    write_standings(season);

    for(var i=season.length - 1; i>=0; i--) {
      var tournament_number = i+1;
      write_tournament(season[i], tournament_number, season_number);
    }

    write_divider();
  }
}

function write_champions(champions) {
  document.write("<h4>Season Champions</h4>");
  document.write("<ul>");

  for(var i=0; i<champions.length; i++) {
    document.write("<li>");
    write_player(champions[i]);

    if (i == champions.length - 1) {
      document.write(" - runner up");
    }
    document.write("</li>");
  }
  document.write("</ul>");
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

function write_standings(season) {
  var point_totals;

  point_totals = get_point_totals(season);

  document.write("<strong><span style=\"color: #303030; font-size: 16px\">Point Standings</span></strong>");

  var cutoff = 10;

  // no cutoff for all-time leader list
  if (typeof(season) === "undefined") {
    cutoff = Number.MAX_VALUE;
  }

  write_results(point_totals, cutoff);
}

function write_results(results, cutoff) {
  document.write("<ol>");

  var rank = 1;
  for(var i=0; i<results.length; i++ ) {
    var current_player = results[i];

    // check for ties
    if(i > 0) {
      var last_player = results[i-1];

      var current_points = current_player[1];
      var last_points = last_player[1];

      if(current_points != last_points) {
        // if the player before me has the same total, my rank is the same as theirs
        // so don't increment
        rank = i + 1;
      }
    }

    write_place(rank, current_player, cutoff);
  }
  document.write("</ol>");
}

function write_player(player) {
  document.write(player);

  var affiliation = affilliations[player];
  if (affiliation) {
    document.write(" (" + affiliation + ")");
  }
}

function write_place(rank, place, cutoff) {
  var player = place[0];
  var points = place[1];

  var belowcut = "";

  // use lighter color for players below the cut
  if(rank > cutoff) {
    belowcut = " class=\"belowcut\"";
  }

  document.write("<li" + belowcut + " value=" + rank + ">");
  write_player(player);

  document.write(" - " + points + " pts");
  document.write("</li>");
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

function write_total_points() {
  var season = get_current_season();
  document.write(numberWithCommas(get_total_points(season)));
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

function write_season_ordinal() {
  document.write(getOrdinal(current_season_number()));
}
