import Bird from "./Bird";
import Pipe from "./Pipe";
import bc from '../img/bcg.png';
import { useState } from "react";

const GameBox = ( props ) => {

    return ( 
        <div 
            style={{ 
                height: `${props.height}px`,
                width: `${props.width}px`,
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${bc})`,
                
            }}>
            <span 
                style= {{
                    fontFamily: 'Press Start 2P, cursive',
                    fontSize: '3.5em',
                    color: '#fff',
                    position: 'absolute',
                    left: '45%',
                    top: '16%',
                    WebkitTextStroke: '3px #543846',
                    zIndex: '1',
                }}>
                    {props.score}
            </span>
            <Bird 
                size={props.birdSize} 
                top={props.birdPosition}
                gameHasStarted={props.gameHasStarted}
                birdState={props.birdState}
            />
            <Pipe 
                top={-props.birdSize}
                width={props.pipeWidth} 
                left={props.pipeLeft}
                height={props.pipeHeight}
            />
            <Pipe  
                top={props.pipeGap}
                width={props.pipeWidth} 
                left={props.pipeLeft}
                height={props.bottomPipeHeight}
            />
        
        </div>
     );
}
 
export default GameBox;