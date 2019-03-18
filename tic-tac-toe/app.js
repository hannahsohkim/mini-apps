
const wins = [
  ['one', 'two', 'three'],
  ['four', 'five', 'six'],
  ['seven', 'eight', 'nine'],
  ['one', 'four', 'seven'],
  ['two', 'five', 'eight'],
  ['three', 'six', 'nine'],
  ['one', 'five', 'nine'],
  ['three', 'five', 'seven']
];
const boxes = document.getElementsByClassName('box');
let player1 = [];
let player2 = [];
let turn = 'X';
let player1Wins = false;
let player2Wins = false;

// Winner from last round goes first
if (player2Wins) {
  turn = 'O'
}

// Add click event listener
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', addMove)
  };

// Refresh game when button clicked
document.getElementById('refresh').addEventListener('click', function() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
  }
})

// Marks X or O
function addMove (event) {
  if (turn === 'X') {
    event.target.innerHTML = 'X';
    player1.push(event.target.id);
    checkWin(player1);
    turn = 'O'
  }
  else {
    event.target.innerHTML = 'O';
    player2.push(event.target.id);
    checkWin(player2)
    turn = 'X'
  }
}


function checkWin () {
  for (var i = 0; i < wins.length; i++) {
    let one = 0;
    let two = 0;
    for (var j = 0; j < wins[i].length; j++) {
      if (player1.includes(wins[i][j])) {
        one++;
        if (one === 3) {
          alert('Player X wins')
          player1Wins = true;
        }
      } else if (player2.includes(wins[i][j])) {
          two++;
          if (two === 3) {
            alert('Player O wins')
            player2Wins = true;
          }
      }
    }
  }
}

