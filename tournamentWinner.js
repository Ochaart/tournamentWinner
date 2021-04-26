// O(n^2) | O(n)

function tournamentWinner(competitions, results) {
  // Write your code here.
	const teams = {};
	for (let i = 0; i < results.length; i++) {
		let winningTeam = results[i] === 0 ? 1 : 0;
		if (teams[competitions[i][winningTeam]] === undefined) {
			teams[competitions[i][winningTeam]] = 3;
		} else {
			teams[competitions[i][winningTeam]] += 3;
		}
	}
	let highestScore = 0;
	let teamName = '';
	for (let team in teams) {
		if (teams[team] > highestScore) {
			highestScore = teams[team];
			teamName = team;
		}
	}
  return teamName;
}

// O(n) | O(k+1)
function tournamentWinner(competitions, results) {
  // Write your code here.
  let bestTeam = '';
	const teams = {[bestTeam]: 0};
	for (let i = 0; i < results.length; i++) {
		let winningTeam = results[i] === 0 ? 1 : 0;
		if (teams[competitions[i][winningTeam]] === undefined) {
			teams[competitions[i][winningTeam]] = 3;
		} else {
			teams[competitions[i][winningTeam]] += 3;
		}
    if (teams[competitions[i][winningTeam]] > teams[bestTeam]) {
      bestTeam = competitions[i][winningTeam];
    }
	}
  return bestTeam;
}

