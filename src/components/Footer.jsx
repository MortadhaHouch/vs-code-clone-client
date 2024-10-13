import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { DarkThemeContext } from "./providers/DarkThemeProvider";
export default function Footer() {
    let themeContext = useContext(DarkThemeContext)
    return (
        <footer style={{
            backgroundColor: themeContext.isDark||JSON.parse(localStorage.getItem("isDark"))? "rgba(23, 21, 59, 0.75)" : "rgba(200, 172, 214, 0.75)",
        }}>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <button className="btn btn-outline-info" style={{margin:5,padding:5}}>
                    <FaFacebook size={35} style={{margin:5}} color={themeContext.isDark?"#F8EDED":"#03346E"}/>
                </button>
                <button className="btn btn-outline-info" style={{margin:5,padding:5}}>
                    <FaDiscord size={35} style={{margin:5}} color={themeContext.isDark?"#F8EDED":"#03346E"}/>
                </button>
                <button className="btn btn-outline-info" style={{margin:5,padding:5}}>
                    <BsInstagram size={35} style={{margin:5}} color={themeContext.isDark?"#F8EDED":"#03346E"}/>
                </button>
                <button className="btn btn-outline-info" style={{margin:5,padding:5}}>
                    <FaSquareXTwitter size={35} style={{margin:5}} color={themeContext.isDark?"#F8EDED":"#03346E"}/>
                </button>
                <button className="btn btn-outline-info" style={{margin:5,padding:5}}>
                    <FaReddit size={35} style={{margin:5}} color={themeContext.isDark?"#F8EDED":"#03346E"}/>
                </button>
                <button className="btn btn-outline-info" style={{margin:5,padding:5}}>
                    <FaLinkedin size={35} style={{margin:5}} color={themeContext.isDark?"#F8EDED":"#03346E"}/>
                </button>
            </div>
            <button 
                className="button position-absolute" 
                style={{
                    right:20,
                    bottom:10,
                }}
                onClick={()=>{
                    window.scrollTo({
                        top:0,
                        left:0,
                        behavior:"smooth"
                    })
                }}
            >
                <svg className="svgIcon" viewBox="0 0 384 512">
                    <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
        </footer>
    )
}
