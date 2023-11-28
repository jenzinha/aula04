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
    const responseOfApi = await fetch(url + "/users", {
    next: {revalidate: 1},
    method: "GET",
    headers: { "Content-Type": "application/json" }
 });

  const users = await responseOfApi.json();
  return users;
}

const postUsers = async (user) => {
  try{
    const responseOfApi = await fetch(url + "/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user) 
    })
    const useSave = await responseOfApi.json();
    return useSave;
  } catch {
    return null;
  }
}
const updateUsers = async (user, id) => {
  try{
    const responseOfApi = await fetch(url + "/user/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user) 
    })
    const userUpdate = await responseOfApi.json();
    return userUpdate;
  } catch {
    return null;
  }
}
export { getUsers, getUserAuthenticated, postUsers, updateUsers};