import React from 'react'
// import { useTranslation } from 'react-i18next';
// import i18n from '../../../language/i18next';
import {FcGoogle} from "react-icons/fc"

const Login = () => {
        // const createAccountWithGoogle = () => {
    //     auth.signInWithPopup(provider)
    //     .then(response => console.log(response))
    // }
    // const {t} = useTranslation();
  return (
    <div className='auth-create'>
      <button onClick="createAccountWithGoogle" className='auth-google-btn'> <FcGoogle/> Google bilan qirish</button>
      <form className='auth-form'>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Parol'/>
        <button>Kirish</button>
      </form>
    </div>
  )
}

export default Login

