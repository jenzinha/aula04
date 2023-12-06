'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import {ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import '@/global.css'
import { updateUsers } from "@/app/functions/handlerAcessAPI";

export default function AlterarUsers({params}) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const {push} = useRouter()
  
    const handlerFormSubmit = async(event) =>{
        event.preventDefault();
            try{
            await updateUsers(user, params.id);
            await new Promise((resolve) => {
            toast.success ('Usuário atualizado com sucesso!');
            setTimeout(resolve, 5000);
            });
            return push("/pages/dashboard");
        }catch{
            return toast.error('erro');
        }
    };

    return (
        <div>
            <h1 className='conta'>Alterar Usuário</h1>
            <div className='container'>
            <form className='contact_form' onSubmit={handlerFormSubmit}>
                
                <div className='nome'> 
                <input  type="text" id="name" value={user.name}
                 onChange={(e) => { setUser({ ...user, name: e.target.value }) }}/> 
                </div>

                <div className='email'>
                <input  type="email" id="email" value={user.email}
                onChange={(e) => { setUser({ ...user, email: e.target.value }) }}/>
                </div>

                <div className='password'>
                <input type="password" id="password" value={user.password}
                onChange={(e) => { setUser({ ...user, password: e.target.value }) }}/>
                </div>


                <div className='submit'> 
                <button className="botao" type='submit'>Atualizar</button>
                </div>  
               
            </form>
            <ToastContainer/>
            </div>
            </div> 
    );
}