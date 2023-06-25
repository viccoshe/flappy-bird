import Bird from "./Bird";
import Pipe from "./Pipe";

const GameBox = ( props ) => {


    return ( 
        <div 
            style={{ 
                height: `${props.height}px`,
                width: `${props.width}px`,
                backgroundColor: 'aquamarine',
                position: 'relative',
                //overflow: 'hidden'
                
            }}>
            <span style= {{position: 'absolute'}}>{props.score}</span>
            <Bird size={props.birdSize} top={props.birdPosition}/>
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