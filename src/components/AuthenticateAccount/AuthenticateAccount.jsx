import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { sendAuthenticate } from "../../redux/actions/auth";
import Swal from "sweetalert2";


function AuthenticateAccount() {
    const { idUser, code } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function autenticate() {
        dispatch(sendAuthenticate(idUser, code));
        Swal.fire({
            icon: "success",
            title: "Auth",
            text: "El usuario fue autenticado con exito",
        });
        navigate('/login');
    }


    return (
        <div className="flex justify-center align-center h-full">
            <button onClick={autenticate} className="bg-blue-600 p-6 text-white rounded-full">ACTIVATE YOUR AACCOUNT NOW </button>
            {/* <p>{idUser}-{code}</p> */}
        </div>
    );
}



export default AuthenticateAccount;