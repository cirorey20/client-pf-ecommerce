export function redirectionByRol (navigate) {
    //manejo de rol por localstorage
    let rol = localStorage.getItem('rol');
    if(rol === "admin") {
        return navigate("/admin/home");
    } 
    else if (rol === "user" ) {
        return navigate("/home");
    } 
    return
}