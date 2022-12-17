//init array of teams with data
const teams = [
  ["Toronto Maple Leaf", 5, 1, 0],
  ["Philadelphia Flyers", 2, 2, 2],
  ["New York Rangers", 3, 1, 2],
  ["Boston Bruins", 4, 1, 1],
  ["Vancouver Canucks", 1, 3, 2],
];
//loop through teams array  to calculate the number of points gained by teams, a win is worth 3 points, a draw 1 point, and no points for a lost game.
for (let i = 0; i < teams.length; i++) {
  //calc wins
  const wins = teams[i][1] * 3;
  //results[1] will store draw
  const draws = teams[i][2];
  //results[2] will store lost games
  const lost = teams[i][3];
  const totalScore = wins + draws;
  teams[i][4] = totalScore;
}
//create table
for (let i = 0; i < teams.length; i++) {
  // create a new row
  let newRow = table.insertRow(table.length);
  for (let j = 0; j < teams[i].length; j++) {
    // create a new cell
    let cell = newRow.insertCell(j);

    // add value to the cell
    cell.innerHTML = teams[i][j];
  }
}
