import React from 'react'
const UtentiVideo = ({title, list}) => {
    return (
        <div>
            <h1>{title}</h1>
            {list.map(ele => <p>{ele.name} {ele.lastName} - {ele.city}</p> )}
            <strong>Tot. {list.length}</strong>
        </div>
    )
    
}

export default UtentiVideo;