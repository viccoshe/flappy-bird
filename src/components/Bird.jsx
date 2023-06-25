import { useEffect, useState } from "react";
import img from "../img/bird.png";
import styles from "./Bird.css";

const Bird = ( props ) => {

    return ( 
        <div
            className={!props.gameHasStarted ? "bird" : null}
            style={{ 
                height: `${props.size}px`,
                width: `${props.size}px`,
                position: 'relative',
                top: `${props.top}px`,
                backgroundImage: `url(${img})`,
                backgroundSize: '160%',
                backgroundPosition: 'center',
                marginLeft: '2rem',
                transform: props.birdState? 'rotate(0.03turn)' :  'rotate(-0.03turn)',
                transition: 'transform 0.7s ease',
            }}
        >
        </div>
     );
}
 
export default Bird;