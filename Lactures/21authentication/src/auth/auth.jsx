export const setFormDataFromLocalStorage = (user)=>{
    const users = JSON.parse(localStorage.getItem('users')) || []
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
}

export const getFormDataFromLocalStorage = (email)=>{
    const users = JSON.parse(localStorage.getItem('users')) || [];
   const user =  users.find(user=> user.email === email)
   return user;
}