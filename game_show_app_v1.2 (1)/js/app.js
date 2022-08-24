const overlay = document.querySelector('.start');
const startBTN = document.querySelector('.btn__reset');
const keyBoard = document.querySelector("#qwerty");
const button  = document.getElementsByTagName('button');
const section = document.querySelector('.word')
const phrase = ['world', 'guest', 'magic', 'green', 'juice'];
let lives = 5;

const num = Math.floor(Math.random()*5);

const letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let word = "";

const guess = phrase[num];

console.log(guess);


startBTN.addEventListener('click', () =>{
    event.preventDefault();
    overlay.style.display = 'none';
});

function key(key){
    key.addEventListener('click', () => {
        word += key;
    });
}
console.log(guess.length);
keyBoard.addEventListener('click', (e) =>{
    let letterVal = 0;
    for (let i = 0; i < letter.length; i ++){
        if( e.target.textContent === letter[i] ){
            
    
            const letters = guess.charAt(letterVal) ;
            if (letters === letter[i]){
                word += letter[i];
                
            }
            section.textContent = word;
            if(word.length === guess.length){
                if (section.textContent === guess){
                    console.log("you win");
                } else{
                    lives -= 1;
                }
                function die(){
                    
                }
            }
            
        }
        
    }
    letterVal += 1;
});







