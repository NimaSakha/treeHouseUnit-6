// dom variable
const overlay = document.querySelector('#overlay');
const startBTN = document.querySelector('.btn__reset');
const keyBoard = document.querySelector("#qwerty");
const button  = document.getElementsByTagName('button');
const win = document.querySelector('.win');
const list = document.querySelector('#phrase ul');

// word guess var 
const phrase = ['world', 'resting', 'magic', 'green', 'tickle'];
const num = Math.floor(Math.random()*5);
let letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const guess = phrase[num];

//lives var
let missed = 0;
let letterVal = -1;
let right = false;
let wrong = true;
let time  = 0;
let done = [];
let donei  = done;
//tests
console.log(guess);

//start btn 
startBTN.addEventListener('click', () =>{
    if(startBTN.textContent !== 'Start Game'){
        location. reload()
    }
    overlay.style.display = 'none';
});

//word display 
for (let i = 0; i < guess.length; i++){
    const x = document.createElement("LI");
    x.className = "letter";
    x.setAttribute('id', `h${i}`);
    list.appendChild(x);
    let t = document.createTextNode(guess[i]);
    x.appendChild(t);
}

//keyboard

// if letter has already been pressed
function pressed(){
    for (let i = 0; i < done.length; i++){
        donei = done[i];
    }
}

keyBoard.addEventListener('click', (e) =>{
    const x = document.querySelector('.letter');
    for (let i = 0; i < guess.length; i++){
        let x = document.querySelector(`#h${i}`);
        for (let i = 0; i < letter.length; i ++){
            if(e.target.textContent === letter[i]){
                if (x.textContent === letter[i]){
                    x.className = "letter show";
                    right = true;
                    wrong = false;
                    done.push(letter[i]);
                    console.log(done);
                 }
                console.log(`wrong: ${wrong}`);
                
            } else if (e.target.textContent === donei){
                wrong = false;
            }
        }
    }
    console.log(right);
    const heart = Array.from(document.querySelectorAll('.tries')).pop();
    if (right !== true && e.target.tagName === 'BUTTON' && wrong === false){
        missed++;
        console.log(`missed: ${missed}`);
        let dead = document.createElement('li');
        dead.innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px">'
        heart.parentNode.replaceChild(dead, heart);
        dead.className = "dead";
    }else if (e.target.tagName === 'BUTTON' && wrong === false){
        time ++;
    }
    right = false;
    wrong = true;
    if (missed === 5){
        overlay.className = 'start lose';
        overlay.style.display = 'flex';
        startBTN.textContent = 'Try Again';
    }else if (time === guess.length){
        overlay.className = 'start win';
        overlay.style.display = 'flex';
        startBTN.textContent = 'Play Again';
    } 

});









