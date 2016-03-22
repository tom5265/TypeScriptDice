let loadedDice: Array<Die> = [];

function randomRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

class Die {
    constructor(public value, public div) {
        this.value;
        this.div;
    }
    insert() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.onclick = function (e) {
            deleteDie(e);
        }
        this.roll();
        document.getElementById('dice-container').appendChild(this.div);
    }

    roll() {
        let num = randomRoll();
        this.value = num;
        this.div.innerText = num;
    }
}

function deleteDie(e) {
    console.log('hello');
    console.log(e.target);
    let element = e.target;
    element.remove();
}

function make() {
    let dice = new Die(randomRoll(), HTMLDivElement);
    dice.insert();
    loadedDice.push(dice);
}

function rollDice() {
    for (let i = 0; i < loadedDice.length; i++) {
        loadedDice[i].roll();
    }
}

function sumDice() {
    let total = 0;
    for (let i = 0; i < loadedDice.length; i++) {
        total += loadedDice[i].value;
    }
    alert(`The sum of the dice is ${total}`);
}