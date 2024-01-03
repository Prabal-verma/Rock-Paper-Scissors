let score= JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScoreElements();

function compMovee(){ 
  randomNum = Math.random();
  if(randomNum>=0 && randomNum <1/3){
    return'rock';
  }
  else if(randomNum>=1/3 && randomNum<2/3){
    return'paper';
  }
  else if(randomNum>=2/3 && randomNum<1){
    return'scissors';
  }
}

let isAutoPlay = false;
let intervalId;
function autoPlay(){
  if(!isAutoPlay){
    intervalId=setInterval(function (){
      const plrMove = compMovee();
      playGame(plrMove);
    },500);
    isAutoPlay=true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlay=false;
  }
  
}

function playGame(plrMove){
  const compMove = compMovee();
  if(plrMove === 'rock'){
    if(compMove === 'rock'){
      result = 'Tie';
    }
    else if(compMove === 'paper'){
      result = 'You lose';
    }
    else{
      result = 'You win';
    }
  }
  else if(plrMove === 'paper'){
    if(compMove === 'rock'){
      result = 'You win';
    }
    else if(compMove === 'paper'){
      result = 'Tie';
    }
    else{
      result = 'You lose';
    }
  }
  else{
    if(compMove === 'rock'){
      result = 'You lose';
    }
    else if(compMove === 'paper'){
      result = 'You win';
    }
    else{
      result = 'Tie';
    }
  }
  if(result === 'You win'){
    score.wins += 1 ;
  }else if(result === 'You lose'){
    score.losses += 1 ;
  }
  else{
    score.ties += 1 ;
  }

  localStorage.setItem('score',JSON.stringify(score));
  updateScoreElements();
  document.querySelector('.js-result').innerHTML = result ;

  document.querySelector('.js-result-moves').innerHTML = `You <img src="${plrMove}-emoji.png" class = "move-image"> <img src="${compMove}-emoji.png" class="move-image"> computer`

}

function updateScoreElements(){
  document.querySelector('.js-scores').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}
