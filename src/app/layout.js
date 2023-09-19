'use client'
import Link from "next/link" 
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const metadata = {
  title: 'Register users',
  description: 'Project for class PTAC',
}
//função de componente que representa o layout raiz da aplicação
export default function RootLayout({ children }) {
  const { push } = useRouter();

    const logout = (e) => {
    e.preventDefault()
    Cookies.remove('token');
    push('/');
  }
  return (
    <html lang="pt-br">
      <body>
      <header>
        <div>
        <Link href="/pages/dashboard/register"> registrar </Link>
        <Link href="/pages/dashboard/alter"> alterar </Link>
        <Link href="/pages/dashboard"> lista de usuários </Link>
        </div>
        <button onClick={logout}>  sair </button>
        </header>
        <div>{children} </div>
        </body>
    </html>
  )
}
