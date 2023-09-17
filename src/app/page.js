'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../global.css'



export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth =  await handlerAcessUser(user);
      if(userAuth.token === undefined){
      toast.error("erro no email ou senha")
     }
      push('/pages/dashboard');
    } catch {
     toast.error("erro na aplicação")
    }
  }
  return (
    <div>
      <h1>Login</h1>
    <div className="mainDiv">
    <form onSubmit={handlerLogin}>
      <input
       required
        placeholder='E-mail'
        type="email"
        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
      </input>
      <input
        required
        placeholder='Senha'
        type='password'
        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
      </input>
      <button className="botao">Entrar</button>
    </form>
    <ToastContainer/>
    </div>
    </div>
  )
}
