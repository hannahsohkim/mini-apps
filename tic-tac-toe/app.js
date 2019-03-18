

const boxes = document.getElementsByClassName('box');

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', addMove)
  }


function addMove (event) {
  const player1 = true;
  const player2 = false;

  for (let i = 1; i <= 9; i++) {
    if (player1 === true && player2 === false) {
      if (event.target.innerHTML.length === 0) {
        event.target.innerHTML = 'X';
        player1 = false;
        player2 = true;
        i++;
      } else {
        event.target.innerHTML = 'O';
        i++;
      }
    }
  }
}