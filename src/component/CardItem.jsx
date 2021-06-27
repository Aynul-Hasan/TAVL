import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
    const{src,text,path,title,btn}=props
    return (
        <>
         <div className="card">
                <img src={src}  className="card-img-top img-fluid"/>
                <div className="card-body">
                    <h5 NclassName="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <Link to={path} className="btn btn-primary">{btn}</Link>
                </div>
                </div>

        </>
    )
}

export default CardItem;
