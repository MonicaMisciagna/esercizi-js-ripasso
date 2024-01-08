import React from 'react'
function ButtonComp(props){
    return(
        <React.Fragment>
           <button>{props.title}</button>
        </React.Fragment>
    )
}
export default ButtonComp;