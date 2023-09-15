'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function AlterarUsers() {
    const route = useRouter();
    const [nameAlter, setnameAlter] = useState("");
    const [passwordAlter, setpasswordAlter] = useState("");
    const [emailAlter, setEmailAlter] = useState("");


    const alterar = (e) => {
        e.preventDefault()

        const user = {
            nameAlter: nameAlter,
            passwordAlter: passwordAlter,
            emailAlter: emailAlter
        }
    }

    return (
        <div className='container'>
            <h3 className='conta'>Alterar usuario</h3>
            
            <form className='contact_form' onSubmit={alterar}>
                
                <div className='nome'> 
                <input id='texto' placeholder='digite seu nome' type="text" name="name" value={nameAlter}
                onChange={e => setnameAlter(e.target.value)}/>  
                </div>

                <div className='email'>
                <input placeholder='digite seu email' type="email" name="email" value={emailAlter}
                onChange={e => setEmailAlter(e.target.value)}/>
                </div>

                <div className='password'>
                <input id='texto' placeholder='digite uma nova senha' type="text" name="password" value={passwordAlter}
                onChange={e => setpasswordAlter(e.target.value)}/> 
                </div>


                <div className='submit'> 
                <button id="form_button" type='submit'>Atualizar</button>
                </div>   
            </form>
            </div>
    );
}