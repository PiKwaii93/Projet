import React from "react";

export default function Card({cookie}) {


    if(cookie==true){
        const handleSubmit = (e) => {
            e.preventDefault();
            document.cookie = "connexion= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
            location.reload();
    
        }

        return (

            <form className="my-5 mx-auto" style={{maxWidth: '600px'}}  onSubmit={handleSubmit}>
                <button type='submit' className='btn btn-primary'>Se déconnecter</button>
            </form>
        )

    }else{
        return(
            <></>
        )
    }

}