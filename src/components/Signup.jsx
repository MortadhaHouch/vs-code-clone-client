import { useContext } from "react";
import { DarkThemeContext } from "./providers/DarkThemeProvider";
import Logo from "./Logo";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Signup() {
    let themeContext = useContext(DarkThemeContext);
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
                className="d-flex flex-column justify-content-center align-items-center gap-2 shadow-lg"
            >
                <Logo size={100}/>
                <div className="w-100">
                    <label className={`${themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-light"}`} htmlFor="firstName">first name</label>
                    <input type="text" placeholder="first name" id="firstName" className="form-control"/>
                </div>
                <div className="w-100">
                    <label className={`${themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-light"}`} htmlFor="lastName">last name</label>
                    <input type="text" placeholder="last name" id="lastName" className="form-control"/>
                </div>
                <div className="w-100">
                    <label className={`${themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-light"}`} htmlFor="email">email</label>
                    <input type="email" placeholder="email" id="email" className="form-control"/>
                </div>
                <div className="w-100">
                    <label className={`${themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-light"}`} htmlFor="password">password</label>
                    <input type="password" placeholder="password" id="password" className="form-control"/>
                </div>
                <button className="btn btn-primary w-100"><FiLogIn/> singup</button>
                <p className={`${themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>already a member?</p>
                <NavLink to="/login" className="btn btn-secondary w-100">login</NavLink>
            </form>
        </main>
    )
}
