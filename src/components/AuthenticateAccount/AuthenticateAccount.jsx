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
        <div className="overflow-hidden h-screen  bg-cover bg-center bg-no-repeat .bg-opacity-25 bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0362a00e-409b-4d6b-9e49-ad465830bb34/d5wmmbd-f6c512bc-482e-47dd-8de4-1cfd8bf856a1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzNjJhMDBlLTQwOWItNGQ2Yi05ZTQ5LWFkNDY1ODMwYmIzNFwvZDV3bW1iZC1mNmM1MTJiYy00ODJlLTQ3ZGQtOGRlNC0xY2ZkOGJmODU2YTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VgAatz690GltqTS5PojI_fbc8XW_U8fQjB1fTNee-7w')]" >
            <div className="flex justify-center items-center h-full bg-transparent">
                <div className="flex justify-center items-center rounded-3xl h-[440px] w-[350px] bg-white/10 backdrop-blur-sm">
                    <button onClick={autenticate} className="bg-blue-600 p-6 text-white rounded-full">ACTIVATE YOUR ACCOUNT NOW </button>
                </div>
            </div>
            {/* <p>{idUser}-{code}</p> */}
        </div>
    );
}



export default AuthenticateAccount;