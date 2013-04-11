
function write_results(results) {
  results = sort_results(results);
  document.write("<ol>");

  var rank = 0;
  for(var i=0; i<results.length; i++ ) {
                    
    if(i > 0 && results[i-1][1] == results[i][1]) {
      // if the player before me has the same total, my rank is the same as theirs                
      // rank = rank; // no-op
    }
    else {
      // otherwise, rank is equal to my place in the list
      rank = i + 1;
    }
    write_place(rank, results[i]);
  }
  document.write("</ol>");
}

function write_place(rank, place) {
  player = place[0];
  points = place[1];
  affiliation = affilliations[player];

  var style = "";

  // use lighter color for players below the cut
  if(rank > 10) {
    style = " style=\"color: #aaaaaa\"";
  }

  document.write("<li" + style + " value=" + rank + ">");
  document.write(player);
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

function write_standings() {
	// write most recent tournament's results
	most_recent_results = results[results.length - 1];
	document.write("<h4>Week " + results.length + " Results</h4>");
	write_results(most_recent_results);

	// determine overall standings
	// add up all cashes for each player
	totals = {};
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

function write_all_tournaments() {
  for(var i=0; i<results.length; i++) {
    document.write("<h4>Week " + (i+1) + "</h4>");

    write_results(results[i]);
  }
}