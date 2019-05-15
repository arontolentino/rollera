var randomNumber1, randomImageSource1, dice1, randomNumber2, randomImageSource2, dice2, option1, option2;

document.querySelector('.roll').addEventListener('click', function() {
    randomNumber1 = Math.floor(Math.random() *6) + 1;
    randomImageSource1 = 'img/dice-' + randomNumber1 + '.png';
    dice1 = document.querySelector('.dice1').setAttribute('src', randomImageSource1);

    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    randomImageSource2 = 'img/dice-' + randomNumber2 + '.png';
    dice2 = document.querySelector('.dice2').setAttribute('src', randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = 'Player 1 Wins!';
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector('h1').innerHTML = 'Player 2 Wins!';
    } else {
        document.querySelector('h1').innerHTML = 'Draw!';
    };
});


document.querySelector('.set-options').addEventListener('click', function() {
    document.querySelector('.modal').classList.toggle('is-active');
});

document.querySelector('.delete').addEventListener('click', function() {
    document.querySelector('.modal').classList.toggle('is-active');
});
