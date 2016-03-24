var loadedDice = [];
function randomRoll() {
    return Math.floor(Math.random() * 6 + 1);
}
var Die = (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.addEventListener('click', function () {
            _this.roll();
        });
    }
    Die.prototype.insert = function () {
        var diceContainer = document.getElementById('dice-container');
        diceContainer.appendChild(this.div);
        this.roll();
    };
    Die.prototype.roll = function () {
        var num = randomRoll();
        this.value = num;
        this.div.innerText = String(num);
    };
    return Die;
}());
function make() {
    var dice = new Die();
    dice.insert();
    loadedDice.push(dice);
}
function rollDice() {
    for (var i = 0; i < loadedDice.length; i++) {
        loadedDice[i].roll();
    }
}
function sumDice() {
    var total = 0;
    for (var i = 0; i < loadedDice.length; i++) {
        total += loadedDice[i].value;
    }
    alert("The sum of the dice is " + total);
}
