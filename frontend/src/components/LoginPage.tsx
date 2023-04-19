import { useNavigate } from "react-router-dom";

function LoginPage(){
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate("/register");
    }
    return(
        <>
             <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <h1>LoginPage</h1>
                    <div className="my-3">
                        <button className="btn btn-lg btn-primary me-3">Sign Up</button>
                        <button className="btn btn-lg btn-secondary" onClick={handleSignInClick}>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;