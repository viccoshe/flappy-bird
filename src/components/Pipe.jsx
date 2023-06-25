const Pipe = ( props ) => {
    return ( 
        <div 
            style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
                backgroundColor: 'green',
                top: `${props.top}px`,
                position: 'relative',
                left: `${props.left}px`
            }}    
        >

        </div>
     );
}
 
export default Pipe;