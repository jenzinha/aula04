'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import {ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import '@/global.css'
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
        <div>
            <h1 className='conta'>Registrar Usuário</h1>
            <div className='container'>
            <form className='contact_form' onSubmit={registrar}>
                
                <div className='nome'> 
                <input required placeholder='Digite seu nome' type="text" name="name" value={name}
                onChange={e => setName(e.target.value)}/>  
                </div>

                <div className='email'>
                <input required placeholder='Digite seu email' type="email" name="email" value={email}
                onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='password'>
                <input required placeholder='Digite uma senha' type="password" name="password" value={password}
                onChange={e => setPassword(e.target.value)}/> 
                </div>


                <div className='submit'> 
                <button className="botao" type='submit'>Registrar</button>
                </div>   
            </form>
            <ToastContainer/>
            </div>
            </div>
    );
}