window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const restartBtn = document.querySelector('#restart');
    const announcer = document.querySelector('.announcer');


    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'O';
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

    function validateResults() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
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


        if (roundWon) {
            announce(currentPlayer === 'O' ? playerO_won : playerO_won)
            isGameActive = false;
            return;
        }

        if (!board.includes(''))
            announce(Tie);
    }

    const announce = (type) => {

        switch (type) {
            case playerO_won:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case playerX_won:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
            case Tie:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');

        setTimeout(() => {
            announcer.classList.add('hide');
            // restartBoard();
        }, 2000)
        
    };

    const isValidAction = (tile) => {
        if(tile.innerText === 'O' || tile.innerText === 'X'){
            return false;
        }
        return true;
    };

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive){
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            validateResults();
            changePlayer();
        }
    }

    const restartBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if(currentPlayer === 'X') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerO');
            tile.classList.remove('playerX');
        });
    }

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    restartBtn.addEventListener('click', restartBoard);
})




