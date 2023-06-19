// constante de prin DOM 

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const reset = document.getElementById('reset');

// alegeri jucatori

let humanOption = document.getElementById('humanOption');
let aiOption = document.getElementById('aiOption');

// resultat text afisat

let result = document.getElementById('resultDisplayedTxt');

// loc pentru scor din DOM

let humanScoreDisplay = document.getElementById('humanScore');
let aiScoreDisplay = document.getElementById('aiScore');
let finalMessage = document.getElementById('finalMessage');

// variabile alegeri

let personalWeapon = '';
let computerWeaponRandom = '';

// lista de variante

const arrayWeapons = ['rock', 'paper', 'scissors'];

// variabile scor

let humanScore = 0;
let aiScore = 0;


// butoane cu logica + stilizari 

rockBtn.addEventListener('click', function () {
    personalWeapon = 'rock'; 
    // variabila careia ii asignez un numar random inmultit cu lungimea array-ului
    const randomIndex = Math.floor(Math.random() * 3);
    // asignez stringul random variabilei goale
    computerWeaponRandom = arrayWeapons[randomIndex];
    if (computerWeaponRandom === 'paper') {
        result.innerHTML = 'AI wins';
        humanOption.innerText = '';
        aiOption.innerText = '';
        humanOption.style.backgroundImage = 'url(./rock-player.png)';
        humanOption.style.backgroundRepeat = 'no-repeat';
        humanOption.style.backgroundPosition = 'center';
        aiOption.style.backgroundImage = 'url(./paper-player.png)';
        aiOption.style.backgroundRepeat = 'no-repeat';
        aiOption.style.backgroundPosition = 'center';
        aiScore = aiScore + 1;
        aiScoreDisplay.innerHTML = aiScore;
    }
    else if (computerWeaponRandom === 'scissors') {
        result.innerHTML = 'YOU win';
        humanOption.innerText = '';
        aiOption.innerText = '';
        humanOption.style.backgroundImage = 'url(./rock-player.png)';
        humanOption.style.backgroundRepeat = 'no-repeat';
        humanOption.style.backgroundPosition = 'center';
        aiOption.style.backgroundImage = 'url(./scissors-player.png)';
        aiOption.style.backgroundRepeat = 'no-repeat';
        aiOption.style.backgroundPosition = 'center';
        humanScore = humanScore + 1;
        humanScoreDisplay.innerHTML = humanScore;
    }
    else {
        result.innerHTML = "It's a tie";
        humanOption.innerText = '';
        aiOption.innerText = '';
        humanOption.style.backgroundImage = 'url(./rock-player.png)';
        humanOption.style.backgroundRepeat = 'no-repeat';
        humanOption.style.backgroundPosition = 'center';
        aiOption.style.backgroundImage = 'url(./rock-player.png)';
        aiOption.style.backgroundRepeat = 'no-repeat';
        aiOption.style.backgroundPosition = 'center';
    }
}) 

paperBtn.addEventListener('click', function () {
    personalWeapon = 'paper';
    const randomIndex = Math.floor(Math.random() * 3);
    computerWeaponRandom = arrayWeapons[randomIndex];
    if (computerWeaponRandom === 'scissors') {
        result.innerHTML = 'AI wins';
        humanOption.innerText = '';
        aiOption.innerText = '';
        humanOption.style.backgroundImage = 'url(./paper-player.png)';
        humanOption.style.backgroundRepeat = 'no-repeat';
        humanOption.style.backgroundPosition = 'center';
        aiOption.style.backgroundImage = 'url(./scissors-player.png)';
        aiOption.style.backgroundRepeat = 'no-repeat';
        aiOption.style.backgroundPosition = 'center';
        aiScore = aiScore + 1;
        aiScoreDisplay.innerHTML = aiScore;
    }
    else if (computerWeaponRandom === 'rock') {
        result.innerHTML = 'YOU win';
        humanOption.innerText = '';
        aiOption.innerText = '';
        humanOption.style.backgroundImage = 'url(./paper-player.png)';
        humanOption.style.backgroundRepeat = 'no-repeat';
        humanOption.style.backgroundPosition = 'center';
        aiOption.style.backgroundImage = 'url(./rock-player.png)';
        aiOption.style.backgroundRepeat = 'no-repeat';
        aiOption.style.backgroundPosition = 'center';
        humanScore = humanScore + 1;
        humanScoreDisplay.innerHTML = humanScore;
    }
    else {
        result.innerHTML = "It's a tie";
        humanOption.innerText = '';
        aiOption.innerText = '';
        humanOption.style.backgroundImage = 'url(./paper-player.png)';
        humanOption.style.backgroundRepeat = 'no-repeat';
        humanOption.style.backgroundPosition = 'center';
        aiOption.style.backgroundImage = 'url(./paper-player.png)';
        aiOption.style.backgroundRepeat = 'no-repeat';
        aiOption.style.backgroundPosition = 'center';
    }
})

scissorsBtn.addEventListener('click', function () {
    personalWeapon = 'scissors';
    const randomIndex = Math.floor(Math.random() * 3);
    computerWeaponRandom = arrayWeapons[randomIndex];
    if (computerWeaponRandom === 'rock') {
        result.innerHTML = 'AI wins';
        humanOption.innerText = '';
        aiOption.innerText = '';
        humanOption.style.backgroundImage = 'url(./scissors-player.png)';
        humanOption.style.backgroundRepeat = 'no-repeat';
        humanOption.style.backgroundPosition = 'center';
        aiOption.style.backgroundImage = 'url(./rock-player.png)';
        aiOption.style.backgroundRepeat = 'no-repeat';
        aiOption.style.backgroundPosition = 'center';
        aiScore = aiScore + 1;
        aiScoreDisplay.innerHTML = aiScore;
    }
    else if (computerWeaponRandom === 'paper') {
        result.innerHTML = 'YOU win';
        humanOption.innerText = '';
        aiOption.innerText = '';
        humanOption.style.backgroundImage = 'url(./scissors-player.png)';
        humanOption.style.backgroundRepeat = 'no-repeat';
        humanOption.style.backgroundPosition = 'center';
        aiOption.style.backgroundImage = 'url(./paper-player.png)';
        aiOption.style.backgroundRepeat = 'no-repeat';
        aiOption.style.backgroundPosition = 'center';
        humanScore = humanScore + 1;
        humanScoreDisplay.innerHTML = humanScore;
    }
    else {
        result.innerHTML = "It's a tie";
        humanOption.innerText = '';
        aiOption.innerText = '';
        humanOption.style.backgroundImage = 'url(./scissors-player.png)';
        humanOption.style.backgroundRepeat = 'no-repeat';
        humanOption.style.backgroundPosition = 'center';
        aiOption.style.backgroundImage = 'url(./scissors-player.png)';
        aiOption.style.backgroundRepeat = 'no-repeat';
        aiOption.style.backgroundPosition = 'center';
    }
});

reset.addEventListener('click', function () {
    if (humanScore > aiScore) {
        alert('Congrats, ai reusit si tu sa invingi AI-ul !');
    }
    else if (humanScore < aiScore) {
        alert('Te-ai cam facut de ras, varule !');
    }
    else {
        alert('Ati pierdut vremea aiurea...');
    }
    humanScore = 0;
    humanScoreDisplay.innerHTML = 0;
    aiScore = 0;
    aiScoreDisplay.innerHTML = 0;   
});
    

    