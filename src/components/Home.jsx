/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import GamingPC from "./models/GamingPC";
import PYTHON from "./models/PYTHON"
import WorkStation from "./models/WorkStation"
import { Suspense, useContext, useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { gsapAnimation } from "../../utils/animations";
import { DarkThemeContext } from "./providers/DarkThemeProvider";
import Web from "./models/Web";
export default function Home() {
    let themeContext = useContext(DarkThemeContext);
    let textRef = useRef();
    useEffect(()=>{
        gsapAnimation(textRef.current,{
            x:100,
            duration:1,
            ease:"elastic.inOut",
            delay:0.5,
            stagger:0.1,
            opacity:0,
            filter:"blur(10px)"
        },{
            x:0,
            duration:1,
            ease:"elastic.inOut",
            delay:0.5,
            stagger:0.1,
            opacity:1,
            filter:"blur(0px)"
        });
    },[])
    return (
        <main style={{
            width:"100vw",
            height:"fit-content",
            minHeight:"200vh",
            backgroundColor:themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"#03346E":"#F8EDED"
        }}>
            <section 
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    height:"100vh",
                    backdropFilter:"blur(10px)",
                }}>
                <div 
                    className="d-flex flex-column justify-content-center align-items-center p-4 home">
                    <h1>Home</h1>
                    <p ref={textRef}>Welcome to IDEasy, an innovative web application designed to provide developers with a seamless, efficient, and user-friendly Integrated Development Environment (IDE). IDEasy combines powerful coding tools, intuitive interfaces, and collaborative features to enhance the productivity and creativity of developers at all levels. Whether you&apos;re a beginner learning the ropes or an experienced professional looking for a versatile and customizable environment, IDEasy offers the perfect platform to write, test, and deploy your code with ease. Explore our advanced debugging tools, real-time collaboration capabilities, and extensive language support to take your development experience to the next level.</p>
                </div>
                <div 
                    style={{
                        width: "50vw",
                        height: "100%",
                    }}>
                    <Canvas 
                        style={{
                        width: "100%",
                        height: "100%",
                    }}>
                        <Suspense fallback={"loading..."}></Suspense>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1.5}/>
                        <GamingPC/>
                    </Canvas>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    height:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div className="d-flex flex-column justify-content-center align-items-center p-4 home">
                    <h1>Web integration</h1>
                    <p>a cutting-edge web application designed to streamline and enhance the web development process. WebSync offers seamless integration with various development tools and platforms, providing developers with a unified workspace to code, collaborate, and deploy their projects efficiently. With intuitive interfaces, real-time collaboration features, and robust support for multiple programming languages, WebSync empowers developers to build and maintain high-quality web applications with ease. Whether you&apos;re working on a personal project or part of a large development team, WebSync is your go-to solution for a smooth and productive web development experience.</p>
                </div>
                <div
                    style={{
                        width: "50vw",
                        height: "100%",
                    }}>
                    <Canvas
                        style={{
                            width: "100%",
                            height: "100%",
                            cursor:"grabbing"
                        }}
                    >
                        <Suspense fallback={"loading..."}></Suspense>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1.5}/>
                        <directionalLight intensity={1.5}/>
                        <Web/>
                    </Canvas>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    height:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div
                    style={{
                        width: "50vw",
                        height: "100%",
                    }}>
                    <Canvas
                        style={{
                            width: "100%",
                            height: "100%",
                            cursor:"grabbing"
                        }}
                    >
                        <Suspense fallback={"loading..."}></Suspense>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1.5}/>
                        <PYTHON/>
                    </Canvas>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    height:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div
                    style={{
                        width: "50vw",
                        height: "100%",
                    }}>
                    <Canvas
                        style={{
                            width: "100%",
                            height: "100%",
                            cursor:"grabbing"
                        }}
                    >
                        <Suspense fallback={"loading..."}></Suspense>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1.5}/>
                        <WorkStation/>
                    </Canvas>
                </div>
            </section>
        </main>
    )
}
