'use server'
const url ="https://aula-17-10-6fsno1gqs-jenzinha.vercel.app";
const getUserAuthenticated = async (user) => { 
   const responseOfApi = await fetch (url + "/user/authenticated",
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user) 
    }
   )
   const userAuth = await responseOfApi.json();
   return userAuth;
}
const getUsers = async () =>{
//fazer negocio get
}
export { getUsers, getUserAuthenticated};