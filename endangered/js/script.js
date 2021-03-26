// make classes for the players
class redPanda {
    constructor(name) {
        this.name = name;
        this.exp = 0;
        this.health = 40;
        this.attack = 5;
    }
    fight(target) {
        target.health -= this.attack;
        // this.exp = this.exp += 5;
    }
    greet() {
        console.log('Hello darkness, my old friend');
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

// make a factory for to generate enemies after a round?

class enemy {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
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

// const nmePower = [3, 4, 5]

const franco = new enemy('Franco', 15, 5)
const goebbels = new enemy('Goebbels', 20, 6)
const pinochet = new enemy('Pinochet', 25, 7)
const creatures = [];
const names = [franco, goebbels, pinochet]
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

// franco.generateEnemy();

// const showStatsEnemy = () => {
//     document.getElementById('enemyName').innerHTML = franco.name;
//     document.getElementById('enemyHP').innerHTML = franco.health;
//     document.getElementById('enemyAtk').innerHTML = franco.attack;
// }
// showStatsEnemy();

const btnContainer = document.querySelector('#btnContainer')

const start = () => {
    let hello = document.getElementById('hello');
    let greeting = document.createElement('p');
    let background = document.querySelector('body')
    background.style.backgroundImage = "url('https://wallpapercave.com/wp/wp1879949.png')"
    greeting.setAttribute("class", "greeting");
    greeting.innerText = 'Let us not, however, flatter ourselves overmuch on account of our human victories over nature. For each such victory nature takes its revenge on us. You can choose to begin your journey or run like a yellow belly coward. Once you begin, you cannot run!';
    hello.prepend(greeting)
    let attack = document.getElementById('attackButton')
    attack.style.visibility = 'visible'
    let run = document.getElementById('runButton')
    run.style.visibility = 'visible'
    // hello.appendChild(attack)
}
// start();
    

const run = () => {
    let blank = document.querySelector('.greeting')
    blank.innerHTML = ""
    let hello = document.getElementById('hello')
    let greeting = document.createElement('p')
    // greeting.setAttribute("class", "greeting");
    greeting.innerText = ('GAME OVER!')
    hello.prepend(greeting)
}

// make game logic

// have player gain experience through each fight, once it reaches a certain exp, it moves on to next level, when experience reaches 15, it wins the game

// round 1: have red pandads fight an enemy, when they defeated an enemy they will gain experience of 5 and they will be able to move on to next level.
const roundOne = () => {
    let greeting = document.querySelector('.greeting')
    greeting.innerText = "";
    let background = document.querySelector('body')
    background.style.backgroundImage = "url('https://wallpapercave.com/wp/wp1879953.png')"
    // background.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/8-Bit-Backgrounds.jpg')"
    let run = document.getElementById('runButton')
    run.style.visibility = 'hidden'
    fanon.fight(franco)
    if (franco.health >= 0) {
        // franco.fight(fanon)
        franco.fight(fanon)
        huey.fight(franco)
    } if (franco.health <= 0) {
        fanon.gainExp();
        huey.gainExp();
        let hello = document.getElementById('hello');
        let text1 = document.querySelector('#hello p');
        text1.innerText = 'Easy fight, but we must not hang around. We have to seek shelter and keep it moving.'
        let shelter = document.getElementById('shelterButton')
        shelter.style.visibility = 'visible'
        hello.appendChild(text1)
        showStatsHuey();
        showStatsFanon();
        document.getElementById('enemyName').innerHTML = franco.name;
        document.getElementById('enemyHP').innerHTML = franco.health;
        document.getElementById('enemyAtk').innerHTML = franco.attack;
        // showStatsEnemy();
    } else {
        let hello = document.getElementById('hello');
        let text1 = document.querySelector('#hello p');
        text1.innerText = 'That didn\'t even make a scratch. Attack back!'
        // hello.prependChild(text1)
        hello.appendChild(text1)
        showStatsHuey();
        showStatsFanon();
        document.getElementById('enemyName').innerHTML = franco.name;
        document.getElementById('enemyHP').innerHTML = franco.health;
        document.getElementById('enemyAtk').innerHTML = franco.attack;
        // showStatsEnemy();
    }
}

// find shelter round 2: find shelter, have red pandas fight another enemy, when they defeated an enemy they will gain experience of 5 and they will be able to move on to the last level
const roundTwo = () => {
    let greeting = document.querySelector('.greeting')
    greeting.innerText = "";
    let run = document.getElementById('runButton')
    run.style.visibility = 'hidden'
    let background = document.querySelector('body')
    background.style.backgroundImage = "url('https://wallpapercave.com/wp/wp1879961.png')"
    // let begin = document.getElementById('attackButton')
    // begin.style.visibility = 'none'
    fanon.fight(goebbels)
    if (goebbels.health >= 0) {
        // franco.fight(fanon)
        goebbels.fight(huey)
        huey.fight(goebbels)
    } if (goebbels.health <= 0) {
        fanon.gainExp();
        huey.gainExp();
        fanon.eat(fanon);
        huey.eat(huey);
        document.querySelectorAll('.round2').forEach(element => element.style.display = 'none')
        let hello = document.getElementById('hello');
        let text2 = document.querySelector('#hello p');
        text2.setAttribute('class', 'round2')
        text2.innerText = 'Safety! Rest up friend, big day tomorrow. *head to oasis*'
        let oasis = document.getElementById('oasisButton')
        oasis.style.visibility = 'visible'
        hello.appendChild(text2)
        showStatsHuey();
        showStatsFanon();
        document.getElementById('enemyName').innerHTML = goebbels.name;
        document.getElementById('enemyHP').innerHTML = goebbels.health;
        document.getElementById('enemyAtk').innerHTML = goebbels.attack;
    } else {
        let hello = document.getElementById('hello');
        // let text2 = document.querySelector('#hello p');
        let text2 = document.createElement('p');
        text2.setAttribute('class', 'round2')
        text2.innerText = 'This one is a lot tougher than the last! Double Team!'
        hello.appendChild(text2)
        showStatsHuey();
        showStatsFanon();
        document.getElementById('enemyName').innerHTML = goebbels.name;
        document.getElementById('enemyHP').innerHTML = goebbels.health;
        document.getElementById('enemyAtk').innerHTML = goebbels.attack;
    }
}
// round 3: oasis, last enemy, when red pandas reaches experience of 15 they will win the game and live happily ever after
const roundThree = () => {
    let greeting = document.querySelector('.round2');
    // greeting.classList.remove('.round2')
    greeting.style.visibility = 'hidden';
    let run = document.getElementById('runButton')
    run.style.visibility = 'hidden'
    let background = document.querySelector('body')
    background.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/8-Bit-Backgrounds.jpg')"
    // let begin = document.getElementById('attackButton')
    // begin.style.visibility = 'none'
    fanon.fight(pinochet)
    if (pinochet.health >= 0) {
        franco.fight(fanon)
        pinochet.fight(huey)
        huey.fight(pinochet)
    } if (pinochet.health <= 0) {
        fanon.gainExp();
        huey.gainExp();
        fanon.eat(fanon);
        huey.eat(huey);
        // let greeting = document.querySelector('.round2');
        // use for loop/use innerHTML
        // greeting.classList.remove('.round2')
        // greeting.style.display = 'none';
        // document.querySelector('.round2').innerHTML = ""
        // let background = document.querySelector('body')
        // background.style.backgroundImage = "url('https://wallpapercave.com/wp/wp1879965.png')"
        document.querySelectorAll('.round2').forEach(element => element.style.display = 'none')
        // greeting.innerText = "";
        let hello = document.getElementById('hello');
        let text3 = document.querySelector('#hello p');
        text3.innerText = 'Alas, Oasis! Our long journey has come to an end.'
        hello.appendChild(text3)
        showStatsHuey();
        showStatsFanon();
        document.getElementById('enemyName').innerHTML = pinochet.name;
        document.getElementById('enemyHP').innerHTML = pinochet.health;
        document.getElementById('enemyAtk').innerHTML = pinochet.attack;
    } else {
        // let greeting = document.querySelector('.round2');
        // greeting.classList.remove('.round2')
        // greeting.style.visibility = 'none';
        document.querySelectorAll('.round2').forEach(element => element.style.display = 'none')
        // greeting.innerText = "";
        let hello = document.getElementById('hello');
        // let text3 = document.querySelector('#hello p');
        let text3 = document.createElement('p');
        text3.innerText = 'He\'s a tough one! His health is at ' + pinochet.health + '! Hyper Beam!'
        hello.appendChild(text3)
        showStatsHuey();
        showStatsFanon();
        document.getElementById('enemyName').innerHTML = pinochet.name;
        document.getElementById('enemyHP').innerHTML = pinochet.health;
        document.getElementById('enemyAtk').innerHTML = pinochet.attack;
    }
}

// get gifs for rounds to show up at bottom
// fit in more stories
// change background with every round

// figure out how to update each enemy stat!!