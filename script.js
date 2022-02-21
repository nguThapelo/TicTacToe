window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const restartBtn = document.querySelector('#restart');
    const announcer = document.querySelector('.announcer');


    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlaaayer = 'O';
    let isGameActive = true;

    const playerO_won = 'playerO_won';
    const playerX_won = 'playerX_won';
    const Tie = 'its a Tie';
    
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function validateResults () {
        let roundWon = false;
        for(let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];

            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
    }



})




