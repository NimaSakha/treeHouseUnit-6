// dom variable
const overlay = document.querySelector('.start');
const startBTN = document.querySelector('.btn__reset');
const keyBoard = document.querySelector("#qwerty");
const button  = document.getElementsByTagName('button');
const section = document.querySelector('#phrase')
const win = document.querySelector('.win');
const list = document.querySelector('.ul');

// word guess var 
const phrase = ['world', 'resting', 'magic', 'green', 'tickle'];
const num = Math.floor(Math.random()*5);
const letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const guess = phrase[num];

//lives var
let missed = 0;
let letterVal = -1;
let right = true;
//tests
console.log(guess);

//start btn 
startBTN.addEventListener('click', () =>{
    event.preventDefault();
    overlay.style.display = 'none';
});

//word display 
console.log(guess.length);
for (let i = 0; i < guess.length; i++){
    const x = document.createElement("LI");
    x.className = "letter";
    x.setAttribute('id', `h${i}`);
    list.appendChild(x);
    let t = document.createTextNode(guess[i]);
    x.appendChild(t);
}

//keyboard

keyBoard.addEventListener('click', (e) =>{
    const x = document.querySelector('.letter');
    for (let i = 0; i < guess.length; i++){
        let x = document.querySelector(`#h${i}`);
        for (let i = 0; i < letter.length; i ++){
            if(e.target.textContent === letter[i] ){;
                if (x.textContent === letter[i]){
                    x.className = "letter show";
                }
            }
        }
        if (x.className === 'letter show'){
            right = true;
        } else{
            right = false;
            console.log(right);
        }
    }
    let v = document.querySelectorAll('.letter show').length;
    console.log(v);
    if (right === false){
        missed ++;
        console.log(missed);
    }
});









