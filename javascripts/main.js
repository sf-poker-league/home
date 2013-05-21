// One object per tournmanent, in chronological order
var results = 
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
    ]
;

var affilliations = {
  "Aaron Wasserman": "Blackboard Mobile",
  "Bill Sandberg": "Zedo",
  "Brett Suwyn": "Chute",
  "Charlie Ansanelli": "Treasure Island Flea",
  "Chris Burkhart": "Chute",
  "David Selle": "Nukotoys",
  "Ernie Hernandez": "Chute",
  "Gregarious Narain": "Chute",
  "Jim Greer": "Kongregate",
  "Justin Bailey": "Double Fine",
  "Sam Wyman": "Blackboard Mobile",
  "Scott Waugaman": "Capcom",
  "Unni Narayanan": "Mind Pirate",
  "Matthieu Laporte": "Twitter",
  "Ian Chan": "Twitter",
  "Jean Teather": "Meez"
};

function write_tournament(results, week_number) {
  document.write("<h4>Week " + week_number + " Results</h4>");
  write_results(results);
}

function write_all_tournaments() {
  for(var i=0; i<results.length; i++) {
    write_tournament(results[i], i+1)
  }
}

function write_standings() {
  // determine overall standings
  // add up all cashes for each player
  var totals = {};
  for(var i=0; i<results.length; i++) {
    tournament = results[i];
    
    for(var player in tournament) {
        var points = totals[player] || 0;
        points += tournament[player];
        totals[player] = points;
    }
  }

  document.write("<strong><span style=\"color: #303030; font-size: 16px\">Standings</span></strong> <em>(top 10 make playoffs)</em>");
  write_results(totals);
}

function write_results(results) {
  results = sort_results(results);
  document.write("<ol>");

  var rank = 1;
  for(var i=0; i<results.length; i++ ) {
    var current_player = results[i];

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

function write_place(rank, place) {
  var player = place[0];
  var points = place[1];
  
  var style = "";

  // use lighter color for players below the cut
  if(rank > 10) {
    style = " style=\"color: #aaaaaa\"";
  }

  document.write("<li" + style + " value=" + rank + ">");
  document.write(player);

  var affiliation = affilliations[player];
  if (affiliation) {
    document.write(" (" + affiliation + ")");
  }

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
  total = 0;

  for(var i=0; i<results.length; i++) {
    tournament = results[i];

    for(var player in tournament) {
      total += tournament[player];
    }
  }

  document.write(numberWithCommas(total));
}
