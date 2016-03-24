let loadedDice: Array<Die> = [];

function randomRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

class Die {
    value: number;
    div: HTMLDivElement;
    
    constructor() {
         this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.addEventListener('click', () => {
            this.roll();
    })
    }
    insert(): void {
        let diceContainer = document.getElementById('dice-container');
        diceContainer.appendChild(this.div);
        this.roll();
    }

    roll(): void {
        let num = randomRoll();
        this.value = num;
        this.div.innerText = String(num);
    }
}

function make() {
    let dice = new Die();
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