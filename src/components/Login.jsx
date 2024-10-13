import { useContext, useState } from "react";
import Logo from "./Logo";
import { DarkThemeContext } from "./providers/DarkThemeProvider";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import Loader from "./Loader";

export default function Login() {
    let themeContext = useContext(DarkThemeContext);
    let [isLoading,setIsLoading] = useState(false);
    let [isSuccessful,setIsSuccessful] = useState(false);
    let [errorMessage,setErrorMessage] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    async function handleSubmit(e){
        e.preventDefault();
        try {
            let request = await fetchData(import.meta.env.VITE_REQUEST_URI,"POST",{
                email,
                password
            },setIsLoading);
            console.log(request);
            if(request.message){
                setIsSuccessful(true);
                if(isSuccessful){
                    location.assign("/");
                }
            }else{
                setErrorMessage(request.error);
                setIsSuccessful(false);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
                backgroundColor:themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"#03346E":"#F8EDED",
                width:"100vw",
                height:"100vh",
            }}
        >
            <form 
                onSubmit={handleSubmit}
                className="d-flex flex-column justify-content-center align-items-center gap-2 shadow-lg">
                <Logo size={100}/>
                <div className="w-100">
                    <label className={`${themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-light"}`} htmlFor="email">email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="w-100">
                    <label className={`${themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-light"}`} htmlFor="password">password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary w-100"><FiLogIn/> login</button>
                <p className={`${themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>not a member?</p>
                <NavLink to="/signup" className="btn btn-secondary w-100">signup</NavLink>
            </form>
            {
                isLoading && 
                (
                    <Loader login/>
                )
            }
            {
                errorMessage &&
                (
                    <Loader error/>
                )
            }
        </main>
    )
}
