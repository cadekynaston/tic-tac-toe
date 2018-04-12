window.onload = () => {
  let players = [
    {
      name: "O player",
      sign: "O"
    },
    {
      name: "X player",
      sign: "X"
    }
  ];

  let cPlayer = 1;
  let board = [[], [], []];
  let winner = false;
  let count = 0;

  let list = document.querySelectorAll(".square");
  list.forEach(x => {
    x.addEventListener("click", elm => {
      makeMove(elm.target.dataset.board);
    });
  });

  let makeMove = location => {
    if (winner) return;
    let xy = location.split("");
    if (board[xy[0]][xy[1]] === undefined) {
      cPlayer = cPlayer == 1 ? 0 : 1;
      let sign = players[cPlayer].sign;
      board[xy[0]][xy[1]] = sign;
      document.querySelector(`[data-board='${location}']`).innerHTML = sign;
      checkForWinner();
    }
  };

  let checkForWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] !== undefined ) {
        winner = true;
      }

      if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] !== undefined) {
        winner = true;
      }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0] !== undefined) {
      winner = true;
    }

    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] !== undefined) {
      winner = true;
    }

    count++;

    if (winner) {
      document.querySelector(".info").innerHTML = `${players[cPlayer].name} wins!`;
      return;
    }

    if (count == 9) {
      winner = true;
      document.querySelector(".info").innerHTML = `It's a draw`;
    }
  };
};
