// Rock Paper Scissors Game
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScoreElement();

    //    if(!score){
    //     score ={
    //         wins: 0,
    //         losses: 0,
    //         ties: 0
    //     };
    //    }


        function playGame(playerMove) {
            const compMove = pickComputerMove();
            let result = '';
            if (playerMove === 'rock') {
                if (compMove === 'rock') {
                    result = 'You tied';
                }
                else if (compMove === 'scissors') {
                    result = 'You won';
                }
                else {
                    result = 'You lost';
                }
            } else if (playerMove === 'paper') {
                if (compMove === 'paper') {
                    result = 'You tied';
                }
                else if (compMove === 'scissors') {
                    result = 'You lost';
                }
                else {
                    result = 'You won';
                }
            } else if (playerMove === 'scissors') {
                if (compMove === 'scissors') {
                    result = 'You tied';
                }
                else if (compMove === 'rock') {
                    result = 'You lost';
                }
                else {
                    result = 'You won';
                }
            }

            if(result === 'You won'){
                score.wins += 1;
            } else if (result === 'You lost'){
                score.losses += 1;
            } else if (result === 'You tied'){
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score) );

            updateScoreElement();
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `You Choose: <img src="https://supersimple.dev/projects/rock-paper-scissors/images/${playerMove}-emoji.png" alt="${playerMove}" class="move-icon">Computer choose:<img src="https://supersimple.dev/projects/rock-paper-scissors/images/${compMove}-emoji.png" alt="${compMove}" class="move-icon">
    `;



        }

        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
        }



        function pickComputerMove() {
            const randomNumber = Math.random();
            let compMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                compMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                compMove = 'paper';
            } else {
                compMove = 'scissors';
            }
            return compMove;
        }