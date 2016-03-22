var loadedDice = [];
function randomRoll() {
    return Math.floor(Math.random() * 6 + 1);
}
var Die = (function () {
    function Die(value, div) {
        this.value = value;
        this.div = div;
        this.value;
        this.div;
    }
    Die.prototype.insert = function () {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.ondblclick = function (e) {
            deleteDie(e);
        };
        this.roll();
        document.getElementById('dice-container').appendChild(this.div);
    };
    Die.prototype.roll = function () {
        var num = randomRoll();
        this.value = num;
        this.div.innerText = num;
    };
    return Die;
}());
function deleteDie(e) {
    var element = e.target;
    element.remove();
}
function make() {
    var dice = new Die(randomRoll(), HTMLDivElement);
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
