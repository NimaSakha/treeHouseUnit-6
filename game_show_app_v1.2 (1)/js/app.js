const overlay = document.querySelector('.start');
const startBTN = document.querySelector('.btn__reset');
const keyBoard = document.querySelector("#qwerty");
const button  = document.getElementsByTagName('button');
const section = document.querySelector('#phrase')
const win = document.querySelector('.win');
const phrase = ['world', 'guest', 'magic', 'green', 'juice'];
let missed = 0;

const num = Math.floor(Math.random()*5);

const letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let word = "";
let letterVal = -1;

const guess = phrase[num];

console.log(guess);


startBTN.addEventListener('click', () =>{
    event.preventDefault();
    overlay.style.display = 'none';
});

// function key(key){
//     key.addEventListener('click', () => {
//         word += key;
//     });
// }
console.log(guess.length);
keyBoard.addEventListener('click', (e) =>{
    
    for (let i = 0; i < letter.length; i ++){
        if( e.target.textContent === letter[i] ){
            word += letter[i];
            letterVal ++;
            if (letter[i] === guess[letterVal]){
            } else{
                missed ++;
                console.log("die");
            }
            section.textContent = word;
            console.log(missed);
        }
    }
    if(word.length === guess.length){
        if (section.textContent === guess){
            console.log("you win");
        }
    }
    if (missed === 5){
        console.log("dead");
    }
    win.style.display = "flex";
});









