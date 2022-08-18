const AuthContextProvider = ({ element: Element, ...res }) => {
  //logica para saber el estado del usuario

  let token = document?.cookie.split(".")[1];
  console.log(token);
  if (token) {
    let json = JSON.parse(window?.atob(token));
    console.log(json.rol);
    if (json.rol === "admin") {
      return Element;
    } else {
      return <p>No estas Autorizado</p>;
    }
  } else {
    return <p>No estas Autorizado</p>;
  }
};

export default AuthContextProvider;
