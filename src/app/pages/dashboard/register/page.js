'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';

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
    }

    return (
        <div className='container'>
            <h3 className='conta'>Registrar usuarios</h3>
            
            <form className='contact_form' onSubmit={registrar}>
                
                <div className='nome'> 
                <input id='texto' placeholder='digite seu nome' type="text" name="name" value={name}
                onChange={e => setName(e.target.value)}/>  
                </div>

                <div className='email'>
                <input placeholder='digite seu email' type="email" name="email" value={email}
                onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='password'>
                <input id='texto' placeholder='digite uma senha' type="text" name="password" value={password}
                onChange={e => setPassword(e.target.value)}/> 
                </div>


                <div className='submit'> 
                <button id="form_button" type='submit'>Registrar</button>
                </div>   
            </form>
            </div>
    );
}