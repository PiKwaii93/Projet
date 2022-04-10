import React, {useEffect, useState} from "react";
import {Buffer} from "buffer";



const Connexion = ({setUserNameConnexion, setPasswordConnexion, cookie}) => {

    if(cookie == false){
        const [newUserNameConnexion, setNewUserNameConnexion] = useState()
    const [newPasswordConnexion, setNewPasswordConnexion] = useState()


    const handleChangeUserNameConnexion = (e)=>{
        setNewUserNameConnexion(e.target.value)
    }

    const handleChangePasswordConnexion =(e) =>{
        setNewPasswordConnexion(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserNameConnexion(newUserNameConnexion);
        setPasswordConnexion(newPasswordConnexion);
        setNewUserNameConnexion("");
        setNewPasswordConnexion("");

    }

    return (
         <div>
            <h1 className='text-center'>Formulaire de connexion</h1>
            <form className="my-5 mx-auto" style={{maxWidth: '600px'}}  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userNameConnexion" className='form-label'> UserName </label>
                    <input type="text" className='form-control' id='userNameConnexion' required="required" onChange={handleChangeUserNameConnexion}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordConnexion" className='form-label'> Password </label>
                    <input type="password" className='form-control' id='passwordConnexion' required="required" onChange={handleChangePasswordConnexion}/>
                </div>
                <button type='submit' className='btn btn-primary'>Connexion</button>
            </form>
        </div>

            
    )
    }else{
        return(
            <></>
        )
    }

    
}

export default Connexion