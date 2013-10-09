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
    ]
  ]
;


// champions for each season, in chronological order
// null if the season is still in progress
var champions = 
  [
    ["Charlie Ansanelli", "Gregarious Narain", "David Selle"],
    null
  ]
;

function get_current_season() {
  return seasons[seasons.length - 1];
}

var affilliations = {
  "Aaron Wasserman": "Blackboard Mobile",
  "Bill Sandberg": "Zedo",
  "Brett Suwyn": "Chute",
  "Calvin Chan": "Making Fun",
  "Charlie Ansanelli": "Treasure Island Flea",
  "Chris Burkhart": "Chute",
  "Curt Geen": "Kongregate",
  "Dana Wagner": "Square",
  "Dave Bogaty": "Periscope", 
  "David Selle": "CashBet",
  "Ernie Hernandez": "Chute",
  "Gregarious Narain": "Chute",
  "Guy Argo": "Net2TV",
  "Ian Chan": "Twitter",
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
  "Sam Wyman": "Blackboard Mobile",
  "Scott Waugaman": "Capcom",
  "Stephen Chyau": "Blackboard Mobile",
  "Tyler Breisch": "YouTube",
  "Unni Narayanan": "Mind Pirate",
};

function write_tournament(results, tournament_number) {
  document.write("<h4>Tournament " + tournament_number + " Results</h4>");
  write_results(results);
}

function write_divider() {
  document.write("<div style=\"text-align:center\"><h1>♠♥♦♣</h1></div>");
}

function write_all_seasons() {
  for(var j=seasons.length - 1; j>=0; j--) {
    var season = seasons[j];
    var season_number = j+1;
    document.write("<h3>Season " + season_number + "</h3>");

    var season_champions = champions[j];
    if (season_champions != null) {
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
  document.write("<ol>");

  for(var i=0; i<champions.length; i++) {
    document.write("<li>");
    write_player(champions[i]);
    document.write("</li>");
  }
  document.write("</ol>");
}

function write_standings(season) {
  if (typeof(season)===undefined) {
    season = get_current_season();
  }

  // determine overall standings
  // add up all cashes for each player
  var totals = {};

  for(var i=0; i<season.length; i++) {
    tournament = season[i];
    
    for(var player in tournament) {
        var points = totals[player] || 0;
        points += tournament[player];
        totals[player] = points;
    }
  }

  document.write("<strong><span style=\"color: #303030; font-size: 16px\">Standings</span></strong>");
  write_results(totals);
}

function write_results(results) {
  results = sort_results(results);
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

    write_place(rank, current_player);
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

function write_place(rank, place) {
  var player = place[0];
  var points = place[1];
  
  var belowcut = "";

  // use lighter color for players below the cut
  if(rank > 10) {
    belowcut = " class=\"belowcut\"";
  }

  document.write("<li" + belowcut + " value=" + rank + ">");
  write_player(player);

  document.write(" - " + points + " pts");
  document.write("</li>");
}

function sort_results(totals) {
  // sort players (need to convert from object to array)
  var sorted =[];
  for(var player in totals) {
    sorted.push([player, totals[player]]);
  }    

  return sorted.sort(function(a, b) {return b[1] - a[1]});
}

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

function write_total_points() {
  var season = get_current_season();
  var total = 0;

  for(var i=0; i<season.length; i++) {
    var tournament = season[i];

    for(var player in tournament) {
      total += tournament[player];
    }
  }

  document.write(numberWithCommas(total));
}
