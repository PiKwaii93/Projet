import React from "react";

export default function Card() {


        const handleSubmit = (e) => {
            e.preventDefault();
            location.reload();
    
        }

        return (

            <form className="my-5 mx-auto" style={{maxWidth: '600px'}}  onSubmit={handleSubmit}>
                <button type='submit' className='btn btn-primary'>Recharger la page</button>
            </form>
        )

}