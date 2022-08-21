import Error from "../components/Error/Error";
const AuthContextProvider = ({ user: setRol, element: Element, ...res }) => {
  //logica para saber el estado del usuario
  // Ahora en cada propiedad user se le va a setear el rol del usuario admin o user
  //si ambos pueden acceder al elemento se debe setear un array con los dos roles

  let token = document?.cookie.split(".")[1];
  // console.log(token);
  // console.log("AUTHCONTEX",setRol);
  if (token) {
    let json = JSON.parse(window?.atob(token));
    // console.log(json.rol);

    if( setRol.length > 1 ) {
      if (json.rol === setRol[0] || json.rol === setRol[1]) {
        return Element;
      }
    }

    if (json.rol === setRol) {
      return Element;
    } else {
      return <Error />
    }
  } else {
    return <Error />
  }
};

export default AuthContextProvider;
