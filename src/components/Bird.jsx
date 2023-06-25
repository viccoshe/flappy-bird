const Bird = ( props ) => {
    return ( 
        <div
            style={{ 
                height: `${props.size}px`,
                width: `${props.size}px`,
                backgroundColor: 'red',
                position: 'relative',
                borderRadius: '50%',
                top: `${props.top}px`
                
            }}
        >
        </div>
     );
}
 
export default Bird;