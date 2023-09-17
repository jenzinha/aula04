'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import {ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export default function RegisterUsers() {
    const route = useRouter();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const registrar = (e) => {
        e.preventDefault()

        const user = {
            name: name,
            password: password,
            email: email
        }
        toast.success('Usuário cadastrado com sucesso!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
        });
    }

    return (
        <div className='container'>
            <h3 className='conta'>Registrar usuarios</h3>
            
            <form className='contact_form' onSubmit={registrar}>
                
                <div className='nome'> 
                <input required id='texto' placeholder='digite seu nome' type="text" name="name" value={name}
                onChange={e => setName(e.target.value)}/>  
                </div>

                <div className='email'>
                <input required placeholder='digite seu email' type="email" name="email" value={email}
                onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='password'>
                <input required id='texto' placeholder='digite uma senha' type="password" name="password" value={password}
                onChange={e => setPassword(e.target.value)}/> 
                </div>


                <div className='submit'> 
                <button id="form_button" type='submit'>Registrar</button>
                </div>   
            </form>
            <ToastContainer/>
            </div>
    );
}