import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListUsers from "@/app/components/ListUser";
import { Suspense } from "react";
import '@/global.css'

export default async function Dashboard() {
    const users = await getUsers();
    return (
        <div>
            <h1>Usuários</h1>
            <Suspense fallback={<p>Carregando...</p>}>
                <ListUsers users={users}/>
            </Suspense>
        </div>
        
    );
};