/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import {DarkThemeContext} from "./providers/DarkThemeProvider";
import {LoginContext} from "./providers/LoginProvider";
import Logo from "./Logo";
export default function Header() {
    let themeContext = useContext(DarkThemeContext);
    let loginContext = useContext(LoginContext);
    useEffect(()=>{
        console.log(themeContext);
        console.log(loginContext);
    },[])
    return (
        <header style={{
            backgroundColor: themeContext.isDark||JSON.parse(localStorage.getItem("isDark"))||JSON.parse(localStorage.getItem("isDark"))? "rgba(23, 21, 59, 0.75)" : "rgba(200, 172, 214, 0.75)",
        }}>
            <div>
                <Logo/>
            </div>
            <nav
                className="navbar navbar-expand-sm navbar-light"
            >
                <div className="container">
                    <NavLink 
                        className="navbar-brand" 
                        to="/">
                    <h1
                        style={{
                            color:themeContext.isDark||JSON.parse(localStorage.getItem("isDark"))?"#FAF0E6":""
                        }}>IDEasy</h1>
                    </NavLink>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0 d-flex flex-row justify-content-center align-items-center">
                            <li className="nav-item">
                                <NavLink 
                                    className="nav-link active" 
                                    to="/home" 
                                    aria-current="page"
                                    style={{
                                        color:themeContext.isDark||JSON.parse(localStorage.getItem("isDark"))?"#3DC2EC":""
                                    }}
                                >Home
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className="nav-link active" 
                                    to="/editor" 
                                    aria-current="page"
                                    style={{
                                        color:themeContext.isDark||JSON.parse(localStorage.getItem("isDark"))?"#3DC2EC":""
                                    }}
                                >editor
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className="nav-link active" 
                                    to="/login" 
                                    aria-current="page"
                                    style={{
                                        color:themeContext.isDark||JSON.parse(localStorage.getItem("isDark"))?"#3DC2EC":""
                                    }}
                                >login
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" 
                                    to="/signup" 
                                    aria-current="page"
                                    style={{
                                        color:themeContext.isDark||JSON.parse(localStorage.getItem("isDark"))?"#3DC2EC":""
                                    }}
                                >signup
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn btn-dark d-flex justify-content-center align-items-center p-2" 
                                    onClick={()=>{
                                        themeContext.setIsDark((val)=>{
                                            localStorage.setItem("isDark",!val);
                                            return !val;
                                        });
                                    }}>
                                    {
                                        themeContext.isDark||JSON.parse(localStorage.getItem("isDark"))?(
                                            <FaMoon/>
                                        ):(
                                            <FiSun />
                                        )
                                    }
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </header>
    )
}
