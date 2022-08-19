export function redirectionByRol (navigate) {
    
    let rol = localStorage.getItem('rol');
    if(rol === "admin") {
        return navigate("/admin/home");
    } 
    else if (rol === "user" ) {
        return navigate("/home");
    } 
    return
}