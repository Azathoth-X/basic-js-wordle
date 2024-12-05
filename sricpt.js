function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

// document.querySelector('.tester-input').addEventListener('keypress', function(e) {
//   if (!isLetter(e.key)) {
//     e.preventDefault();
//   }
// });
const ANSWER_LEN= 5;

const letters = document.querySelectorAll('.score-letter');

const loading= document.querySelector('.cry');


async function init(){


    let curGuess='';

    function remove(){
        if(curGuess.length>0){
            letters[curGuess.length-1].innerHTML='';
            curGuess=curGuess.substring(0,curGuess.length-1);

        }
        else{
            //do nothing 
        }
    }

    function addLetter(letter){

        if(curGuess.length<ANSWER_LEN){
            curGuess+=letter;
        
        }
        else{
            curGuess=curGuess.substring(0,curGuess.length-1);
            curGuess+=letter;
        }
        letters[curGuess.length-1].innerHTML=letter;

    }
    document.addEventListener('keydown',function handleKey(event){
        
        const action = event.key;
        
        if(action==='Enter'){
            commit();
        }
        else if(action==='Backspace'){
            remove();
        }
        else if(isLetter(action)){
            addLetter(action.toUpperCase());
        }
        else{
            //do nothing
            console.log('Invalid input');
        }
    })
}
init();