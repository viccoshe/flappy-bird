const Pipe = ( props ) => {
    return ( 
        <div 
            style={{
                boxSizing: 'border-box',
                width: `${props.width}px`,
                height: `${props.height}px`,
                backgroundColor: '#558021',
                top: `${props.top}px`,
                position: 'relative',
                left: `${props.left}px`,
                border: '5px outset  #674c59',
            }}    
        >
            <div 
                style={{
                    boxSizing: 'border-box',
                    position: 'relative',
                    bottom: 0,
                    width: '80%',
                    height: '100%',
                    backgroundColor: '#73BF2E',
                    borderLeft: '5px solid #9BE658',
                    borderTop: '5px solid #E3FC8A',
                    borderBottom: '5px solid #E3FC8A',
                }}/>

        </div>
     );
}
 
export default Pipe;