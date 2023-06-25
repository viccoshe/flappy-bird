import './App.css';
import GameBox from './components/GameBox';
import { useEffect, useState } from 'react';

function App() {
  const GAME_WIDTH = 400;
  const GAME_HEIGHT = 500;
  const BIRD_SIZE = 20;
  const GRAVITY = 3;
  const JUMP_HEIGHT = 100;
  const PIPE_WIDTH = 40;
  const PIPE_GAP = 150;

  const [ birdPosition, setBirdPosition ] = useState(250);
  const [ gameHasStarted, setGameHasStarted ] = useState(false);
  const [ pipeHeight, setPipeHeight ] = useState(
    Math.floor(Math.random() * (200 - 40 + 1) + 40)
  );
  const [ pipeLeft, setPipeLeft ] = useState(GAME_WIDTH + PIPE_WIDTH);
  const [ score, setScore ] = useState(0);

  const bottomPipeHeight = GAME_HEIGHT - pipeHeight - PIPE_GAP - BIRD_SIZE;

  useEffect(() => {
    let timeId;
    if(gameHasStarted && birdPosition <= GAME_HEIGHT - BIRD_SIZE){
      timeId = setInterval(() => {
        setBirdPosition(birdPosition + GRAVITY)
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    }
  }, [gameHasStarted, birdPosition]);

  useEffect(() => {
    let pipeId;
    if(gameHasStarted && pipeLeft >= -PIPE_WIDTH){
      pipeId = setInterval(() => {
        setPipeLeft(pipeLeft - 5)
      }, 24)
    }else{
      setPipeLeft(GAME_WIDTH - -PIPE_WIDTH);
      if(gameHasStarted){
          setScore(score => score + 1);
      }

    }
    return () => {
      clearInterval(pipeId);
    }
  }, [gameHasStarted, pipeLeft])

  useEffect(() => {
    const hasHitTopPipe = birdPosition >= 0 && birdPosition < pipeHeight;
    const hasHitBottomPipe = birdPosition <= GAME_HEIGHT && birdPosition >= GAME_HEIGHT - bottomPipeHeight;
    
    if (pipeLeft >= 0 && pipeLeft <= PIPE_WIDTH && (hasHitBottomPipe || hasHitTopPipe)){
      setGameHasStarted(false);
      console.log('end');
      setScore(0);
    }
  })

  const handleClick = () => {
    let newBirdPosition = birdPosition - JUMP_HEIGHT;
    if(!gameHasStarted){
      setGameHasStarted(true)
    }else if(newBirdPosition < 0){
      setBirdPosition(0)
    }else{
      setBirdPosition(newBirdPosition); 
    }
    // if(birdPosition >= GAME_HEIGHT - BIRD_SIZE){
    //   setGameHasStarted(false)
    // }
  }

  return (
    <div 
      onClick={() => handleClick()}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '10px',
      }}
    >
      {gameHasStarted ? console.log('has') : console.log('hasnt')}
      <GameBox 
        height={GAME_HEIGHT} 
        width={GAME_WIDTH} 
        birdPosition={ birdPosition }
        birdSize={BIRD_SIZE}
        pipeWidth={PIPE_WIDTH}
        pipeLeft={pipeLeft}
        pipeHeight={pipeHeight}
        bottomPipeHeight={bottomPipeHeight}
        pipeGap={PIPE_GAP}
        score={score}
      >
      </GameBox>
      
    </div>
  );
}


export default App;

