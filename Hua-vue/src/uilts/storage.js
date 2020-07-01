export const setLocalStorage = (name, storage)=>{
    if(!name) return
    if(typeof storage !== 'string' ){
        storage = JSON.stringify(storage)
    }
    window.localStorage.setItem(name,storage)
}
export const getLocalStorage = (name)=>{
    if(!name) return
    
   return window.localStorage.getItem(name)
}
export const removeLocalStorage = (name) =>{
    if(!name) return
    window.localStorage.removeItem(name)
}
export const getToken = (name)=>{
    if(!name) return
    
   return window.localStorage.getItem(name)
}