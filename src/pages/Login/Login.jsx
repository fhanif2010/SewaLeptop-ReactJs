import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase";
import './Login.css';
import Ilust from '../../assets/ilus.png';
import { MdOutlineMail } from "react-icons/md";
import { PiLockKey } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleSignIn = async () => {
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password)
                setIsSignUp(true);
            }else {
                await signInWithEmailAndPassword(auth, email, password)
                navigate('/')
                   
            }
        } catch (err) {
            setError(err.massage);
        }
    }

    const handleSignUp = () => {
        setIsSignUp(true);
        
    }

    return (
        <div className="container-login">
            <div className="content-login">
                <div className="animation-login">
                    <img src={Ilust} alt="Illustration" />
                </div>
                <div className="form-login">
                    {!isSignUp ? (
                        <SignIn
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            error={error}
                            handleSignIn={handleSignIn}
                            handleSignUp={handleSignUp}
                        />
                    ) : (
                        <SignUp
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            error={error}
                            handleSignIn={handleSignIn}
                            handleSignUp={handleSignUp}
                        />
                    )}
                    
                </div>
            </div>
        </div>
    );
};

const SignIn = ({ email, setEmail, password, setPassword, error, handleSignIn, handleSignUp }) => {
    return (
        <div className="input-login">
            <div className="text-login">
                <h2>Welcome Back!</h2>
                <p>To keep connected with us please login with your personal information by email address and password</p>
            </div>
            <div className="inputtext-login">
                <div className="icon-login">
                    <MdOutlineMail />
                </div>
                <input 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="inputtext-login">
                <div className="icon-login">
                    <PiLockKey />
                </div>
                <input 
                    type="password" 
                    placeholder="At least 8 characters" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            {error && <p className="error-message">{error}</p>}
                    <div className="button-login">
                        <button onClick={handleSignIn}>Login Now</button>
                        <button style={{ backgroundColor: 'whitesmoke', color: 'gray' }} onClick={handleSignUp}>Create Account</button>
                    </div>
        </div>
    );
};

const SignUp = ({ email, setEmail, password, setPassword, error, handleSignIn, handleSignUp}) => {
    return (
        <div className="input-login">
            <div className="text-login">
                <h2>Create Your Account!</h2>
            </div>
            <div className="inputtext-login">
                <div className="icon-login">
                    <MdOutlineMail />
                </div>
                <input 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="inputtext-login">
                <div className="icon-login">
                    <PiLockKey />
                </div>
                <input 
                    type="password" 
                    placeholder="At least 8 characters" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            {error && <p className="error-message">{error}</p>}
                    <div className="button-login">
                        <button onClick={handleSignIn}>SignUp Now</button>
                        <button style={{ backgroundColor: 'whitesmoke', color: 'gray' }} onClick={handleSignUp}>Back to Login</button>
                    </div>
        </div>
    );
};

export default Login;
