var currentPlayer = "X";
var gameActive = true;
var cells = document.getElementsByClassName("cell");

function makeMove(row, col) {
  if (gameActive && cells[row * 3 + col].textContent === "") {
    cells[row * 3 + col].textContent = currentPlayer;
    cells[row * 3 + col].classList.add(currentPlayer);
    
    if (checkWin()) {
      announceWinner(currentPlayer);
      gameActive = false;
    } else if (checkTie()) {
      announceTie();
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  var winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (var combination of winningCombinations) {
    if (
      cells[combination[0]].textContent !== "" &&
      cells[combination[0]].textContent === cells[combination[1]].textContent &&
      cells[combination[1]].textContent === cells[combination[2]].textContent
    ) {
      return true;
    }
  }

  return false;
}

function checkTie() {
  for (var cell of cells) {
    if (cell.textContent === "") {
      return false;
    }
  }

  return true;
}

function announceWinner(winner) {
  alert("Player " + winner + " wins!");
}

function announceTie() {
  alert("It's a tie!");
}

function resetGame() {
  for (var cell of cells) {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  }
  
  currentPlayer = "X";
  gameActive = true;
}
