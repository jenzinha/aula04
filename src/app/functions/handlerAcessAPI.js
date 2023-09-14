'use server'
   
const users = [
   {
      name: "jenzinha",
      email: "jen@gmail.com",
      password: "123",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
   }
  ];

const getUserAuthenticated = (user) => { 
   let userAuth = {}
   users.map(u => {
   if (u.email === user.email && u.password === user.password){
      userAuth = u
   }});
   return userAuth
}
const getUsers = () =>{
      return users
}
export { getUsers, getUserAuthenticated};