import React from "react";

const IfWaiting = (props) => {

    if (props.stateOfWaitin || props.prevVal) {
        return  <button className="button col-3" value='C' onClick={props.handleClick}>C</button>
    }
    else {
        return <button className="button col-3" value='AC' onClick={props.handleClick}>AC</button>
    }
}   

const Operators =(props)=>{

    return(
        <>  
            { IfWaiting(props) }
            <button className="button col-3" value='%' onClick={props.handleClick} > % </button> 
            <button className="button col-3" value="±" onClick={props.handleClick} > ± </button>
            <button className="button col-3 orange" value='÷' onClick={props.handleClick} > ÷ </button>

        </>
    );
}

export default Operators;