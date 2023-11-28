import '@/global.css'
import { getUsers } from '../functions/handlerAcessAPI';
import Link from 'next/link';

export default async function ListUsers(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
   const users = await getUsers()
    return(
        <div className='divUsers'>
            <h2>Lista de Usuários:</h2>
           
                {users?.map((user, index) => (
                     <Link href={`/pages/dashboard/alter/${user.id}`}>
                    <p className='users' key= {index}>{user.name}, {user.email}</p>
                    </Link>
              ))}
        </div>
    )
}