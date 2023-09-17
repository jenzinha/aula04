import '@/global.css'

export default async function ListUsers({users}){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return(
        <div className='divUsers'>
            <h2>Lista de Usuários:</h2>
           
                {users?.map((user, index) => (
                    <p className='users' key= {index}>{user.name}, {user.email}</p>
                ))}
        </div>
    )
}