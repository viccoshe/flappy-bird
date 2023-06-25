import styles from "./ScoreModal.css";

const ScoreModal = ( props ) => {

    const highScore = JSON.parse(localStorage.getItem('highScore'));
    return ( 
        <div
            className="modal" 
            style={{
                width: props.GAME_WIDTH / 2.5,
                height: props.GAME_HEIGHT / 2.5,
            }}
        >
            <div className="score-title">Score</div>
            <div className="high-score" >{ props.score }</div>
            <div className="score-title">Best</div>
            <div className="high-score">{ highScore ? highScore : '0' }</div>
        </div>
        
     );
}
 
export default ScoreModal;