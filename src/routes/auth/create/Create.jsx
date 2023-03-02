import React, { useState } from 'react';
import instanse from "../../../api/instanse"
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../../../firebase/firebaseconfig';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Create = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    })

    const createUserWithEmail = (e) => {
        e.preventDefault();
         instanse.post("/users", formData)
         .then(res => {
            if(res.data.email){
              dispatch({
                email: res.data.email,
                 type: "CREATE_USER"
                })
                history.push("/")
            }
          })
          .catch(err => console.log(err))
    }

    const createAccountWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    return (
        <div className='auth-create'>
            <button onClick={createAccountWithGoogle} className='auth-google-btn'> <FcGoogle /> Google bilan hisob yaratish</button>
            <form className='auth-form' onSubmit={createUserWithEmail}>
                <input type="text" placeholder='Name' onChange={e => setFormData({ ...formData, name: e.target.value })} />
                <input type="url" placeholder='Avatar' onChange={e => setFormData({ ...formData, avatar: e.target.value })} />
                <input type="text" placeholder='email' onChange={e => setFormData({ ...formData, email: e.target.value })} />
                <input type="password" placeholder='Password' onChange={e => setFormData({ ...formData, password: e.target.value })} />
                <button type='submit'>Xisob yaratish</button>
            </form>
        </div>
    );
}

export default Create
