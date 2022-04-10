import React from "react";

export default function Card({title, content, user, date, id, cookie}) {


    if(cookie==true){
        return (

            <div className="card mb-5 mx-auto unchecked" id={id} style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Par : {user}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Le : {date}</h6>
                    <h6 className="card-subtitle mb-2 ">Card numéro : {id}</h6>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        
        )
    }else{
        return(
            <></>
        )
    }

}