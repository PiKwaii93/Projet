import React, {useEffect, useState} from "react";
import {Buffer} from "buffer";



const Inscription = ({setUserNameInscription, setPasswordInscription, cookie}) => {

    if(cookie==false){
        const [newUserNameInscription, setNewUserNameInscription] = useState()
        const [newPasswordInscription, setNewPasswordInscription] = useState()
    
    
        const handleChangeUserNameInscription = (e)=>{
            setNewUserNameInscription(e.target.value)
        }
    
        const handleChangePasswordInscription =(e) =>{
            setNewPasswordInscription(e.target.value)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setUserNameInscription(newUserNameInscription);
            setPasswordInscription(newPasswordInscription);
            setNewUserNameInscription("");
            setNewPasswordInscription("");
    
        }
    
        return (
             <div>
                <h1 className='text-center'>Formulaire d'inscription</h1>
                <form className="my-5 mx-auto" style={{maxWidth: '600px'}}  onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="userNameInscription" className='form-label'> UserName </label>
                        <input type="text" className='form-control' id='userNameInscription' required="required" onChange={handleChangeUserNameInscription}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInscription" className='form-label'> Password </label>
                        <input type="password" className='form-control' id='passwordInscription' required="required" onChange={handleChangePasswordInscription}/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Inscription</button>
                </form>
            </div>
    
                
        )
    }else{
        return(
            <></>
        )
    }

    
}

export default Inscription