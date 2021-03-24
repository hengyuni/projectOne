// make classes for the players
class redPanda {
    constructor(name) {
        this.name = name;
        this.exp = 0;
        this.health = 20;
        this.attack = 5;
    }
    fight(target) {
        target.health -= this.attack;
        // this.exp = this.exp += 5;
    }
    greet() {
        console.log('The old world is dying, and the new world struggles to be born. Now, is time for the monsters.')
    }
    eat(person) {
        person.health = this.health += 5;
    }
    gainExp() {
        this.exp = this.exp += 5;
    }
}

const fanon = new redPanda ('Fanon')
const huey = new redPanda ('Huey')

// make a factory for to generate enemies after a round

class enemy {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.attack = nmePower[Math.floor(Math.random() * nmePower.length)]
    }
    fight(target) {
        target.health -= this.attack
    }
    greet() {
        console.log('You shall not pass our path')
    }
    generateEnemy() {
        const wildCreature = new enemy(names[i])
        creatures.unshift(wildCreature)
        i += 1
    }
}

const nmePower = [2, 3, 4]

const franco = new enemy('Franco', 10)
const goebbels = new enemy('Goebbels', 15)
const pinochet = new enemy('Pinochet', 20)
const creatures = [];
const names = ['goebbels', 'pinochet', 'batista']
let i = 0

console.log(fanon)
console.log(huey)
console.log(franco)

// show stats

const showStatsFanon = () => {
    document.getElementById('name').innerHTML = fanon.name;
    document.getElementById('experience').innerHTML = fanon.exp;
    document.getElementById('currentHP').innerHTML = fanon.health;
    document.getElementById('Atk').innerHTML = fanon.attack;
}
showStatsFanon();

const showStatsHuey = () => {
    document.getElementById('hueyName').innerHTML = huey.name;
    document.getElementById('hueyExp').innerHTML = huey.exp;
    document.getElementById('hueyCurrentHP').innerHTML = huey.health;
    document.getElementById('hueyAtk').innerHTML = huey.attack;
}
showStatsHuey();

const showStatsEnemy = () => {
    document.getElementById('enemyName').innerHTML = franco.name;
    document.getElementById('enemyHP').innerHTML = franco.health;
    document.getElementById('enemyAtk').innerHTML = franco.attack;
}
showStatsEnemy();

const btnContainer = document.querySelector('#btnContainer')

const start = () => {
    let hello = document.getElementById('hello');
    let greeting = document.createElement('p');
    greeting.setAttribute("class", "greeting");
    greeting.innerText = 'Let us not, however, flatter ourselves overmuch on account of our human victories over nature. For each such victory nature takes its revenge on us';
    hello.prepend(greeting)
    let attack = document.getElementById('attackButton')
    attack.style.visibility = 'visible'
    // hello.appendChild(attack)
}
// start();

// make game logic

// have player gain experience through each fight, once it reaches a certain exp, it moves on to next level, when experience reaches 15, it wins the game

// round 1: have red pandads fight an enemy, when they defeated an enemy they will gain experience of 5 and they will be able to move on to next level.
const roundOne = () => {
    let greeting = document.querySelector('.greeting')
    greeting.innerText = ""
    fanon.fight(franco)
    if (franco.health >= 0) {
        // franco.fight(fanon)
        huey.fight(franco)
    } if (franco.health <= 0) {
        fanon.gainExp();
        huey.gainExp();
        let hello = document.getElementById('hello');
        let text1 = document.querySelector('#hello p');
        text1.innerText = 'The enemy is deafeated! We must hurry and seek shelter!'
        let shelter = document.getElementById('shelterButton')
        shelter.style.visibility = 'visible'
        hello.appendChild(text1)
        showStatsHuey();
        showStatsFanon();
        showStatsEnemy();
    } else {
        let hello = document.getElementById('hello');
        let text1 = document.createElement('p');
        text1.innerText = 'We\'ve failed our cause, we must regain our strength'
        hello.prependChild(text1)
        showStatsHuey();
        showStatsFanon();
        showStatsEnemy();
    }
}

// find shelter round 2: find shelter, have red pandas fight another enemy, when they defeated an enemy they will gain experience of 5 and they will be able to move on to the last level
const roundTwo = () => {
    let begin = document.getElementById('attackButton')
    begin.style.visibility = 'none'
    let greeting = document.querySelector('#hello p')
    greeting.innerText = ""
    fanon.fight(goebbels)
    if (goebbels.health >= 0) {
        // franco.fight(fanon)
        huey.fight(goebbels)
    } if (goebbels.health <= 0) {
        fanon.gainExp();
        huey.gainExp();
        let hello = document.getElementById('hello');
        let text2 = document.querySelector('#hello p');
        text2.innerText = 'Alas, safety, we should eat and rest up'
        // let shelter = document.getElementById('shelterButton')
        // shelter.style.visibility = 'visible'
        hello.appendChild(text2)
        showStatsHuey();
        showStatsFanon();
        showStatsEnemy();
    } else {
        let hello = document.getElementById('hello');
        let text1 = document.createElement('p');
        text1.innerText = 'We\'ve failed our cause, we must regain our strength'
        hello.prependChild(text1)
        showStatsHuey();
        showStatsFanon();
        showStatsEnemy();
    }
}
// round 3: oasis, last enemy, when red pandas reaches experience of 15 they will win the game and live happily ever after
const roundThree = () => {
    hello.removeChild(text2)
    fanon.attack(creatures[0])
    if (creatures.health > 0) {
        creatures.attack(fanon)
        huey.attack(creatures)
    } if (creatures.health < 0) {
        gainExp();
        let hello = document.getElementById('hello');
        let text3 = document.createElement('p');
        text.setAttribute('class', 'roundThree');
        text.innerText = 'Oasis found! hopefully peace is finally attainable';
        hello.appendChild(text2)
        showStatsHuey();
        showStatsFanon();
    } else {
        let hello = document.getElementById('hello');
        let text3 = document.createElement('p');
        text.setAttribute('class', 'roundThree');
        text.innerText = 'We\'ve failed our cause, we must regain our strength';
        hello.appendChild(text3)
        showStatsHuey();
        showStatsFanon();
    }
}

// figure out modal