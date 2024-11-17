/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useContext, useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { gsapAnimation } from "../../utils/animations";
import { DarkThemeContext } from "./providers/DarkThemeProvider";
import Web from "./models/Web";
import {NavLink} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { images } from "../../utils/images";
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
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}>
                <div 
                    className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                    style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>Home</h2>
                    <p ref={textRef}>Welcome to IDEasy, an innovative web application designed to provide developers with a seamless, efficient, and user-friendly Integrated Development Environment (IDE).</p>
                    <button className="btn btn-primary">
                        <NavLink to="/editor" className="nav-link">try it</NavLink>
                    </button>
                </div>
                <div 
                    style={{
                        width: "clamp(350px,40%,50%)",
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
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>React, Vue, Angular, and Svelte</h2>
                    <p>IDEasy includes built-in templates for popular frontend frameworks like React, Vue, Angular, and Svelte. These frameworks allow developers to build modern, component-based user interfaces, and Sandpack enables live previews of code changes, perfect for rapid prototyping and interactive demos.</p>
                </div>
                <div
                    style={{
                        width: "clamp(300px,40%,450px)",
                        height: "100%",
                    }}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {images.frontend.map((img,index)=>{
                            return (
                                <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={img} alt="Frontend" style={{"width":"300px","height":"300px",mixBlendMode:"color-burn",aspectRatio:1/1,objectFit:"cover"}}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div    
                    className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                    style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>Node.js, Express, and Deno</h2>
                    <p>IDEasy enables backend developers to use Node.js, Express, and Deno for building server-side logic directly in the browser. Developers can create full-stack applications, manage APIs, and simulate microservices architecture without leaving the development environment. This feature makes it highly convenient for testing backend functionality and server-client communication in one platform.</p>
                </div>
                <div 
                    style={{
                        width: "clamp(300px,40%,450px)",
                        height: "100%",
                    }}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {images.nodeEnv.map((img,index)=>{
                            return (
                                <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={img} alt="Frontend" style={{"width":"300px","height":"300px",mixBlendMode:"color-burn",aspectRatio:1/1,objectFit:"cover"}}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div 
                    className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                    style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>Static Site Generators: Next.js, Nuxt.js, and Gatsby</h2>
                    <p>The platform supports static site generators like Next.js, Nuxt.js, and Gatsby, which allow developers to build fast, SEO-friendly web applications. Whether it’s server-side rendering with Next.js, Vue-based static generation with Nuxt.js, or React-driven Gatsby sites, CodeSandbox offers tools to build and preview static sites efficiently.</p>
                </div>
                <div 
                    style={{
                        width: "clamp(300px,40%,450px)",
                        height: "100%",
                    }}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {images.ssg.map((img,index)=>{
                            return (
                                <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={img} alt="Frontend" style={{"width":"300px","height":"300px",mixBlendMode:"color-burn",aspectRatio:1/1,objectFit:"cover"}}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div 
                    className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                    style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>Bundlers: Vite, Webpack, and Parcel</h2>
                    <p>The platform provides environments with built-in support for modern bundlers such as Vite, Webpack, and Parcel. These bundlers help developers manage dependencies and compile code seamlessly, optimizing project builds for both development and production phases.</p>
                </div>
                <div 
                    style={{
                        width: "clamp(300px,40%,450px)",
                        height: "100%",
                    }}>
                        <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {images.bundlers.map((img,index)=>{
                            return (
                                <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={img} alt="Frontend" style={{"width":"300px","height":"300px",mixBlendMode:"color-burn",aspectRatio:1/1,objectFit:"cover"}}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div 
                    className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                    style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>CSS Frameworks: TailwindCSS, Bootstrap, and Bulma</h2>
                    <p>Frontend developers can enhance their projects with pre-integrated CSS frameworks such as TailwindCSS, Bootstrap, and Bulma. These frameworks simplify styling and UI component management, enabling developers to create visually appealing interfaces with minimal effort.</p>
                </div>
                <div 
                    style={{
                        width: "clamp(300px,40%,450px)",
                        height: "100%",
                    }}>
                        <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {images.styling.map((img,index)=>{
                            return (
                                <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={img} alt="Frontend" style={{"width":"300px","height":"300px",mixBlendMode:"color-burn",aspectRatio:1/1,objectFit:"cover"}}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div 
                    className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                    style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>Package Management and Dependencies</h2>
                    <p>IDEasy offers robust package management, allowing developers to import and configure dependencies from npm within their projects. This flexibility means you can easily extend your projects by adding libraries and tools as required.</p>
                </div>
                <div 
                    style={{
                        width: "clamp(300px,40%,450px)",
                        height: "100%",
                    }}>
                    <Swiper 
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper">
                            {images.package.map((img,index)=>{
                                return (
                                    <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                        <img src={img} alt="Frontend" style={{"width":"300px","height":"300px",mixBlendMode:"color-burn",aspectRatio:1/1,objectFit:"cover"}}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div 
                    className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                    style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>Console and Debugging Tools</h2>
                    <p>Sandpack features a console that captures logs, errors, and custom messages, making it easy to debug and monitor code execution in real-time. Developers can also execute terminal-like commands to test scripts and manage project workflows within the browser.</p>
                </div>
                <div 
                    style={{
                        width: "clamp(300px,40%,450px)",
                        height: "100%",
                    }}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {images.debug.map((img,index)=>{
                            return (
                                <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={img} alt="Frontend" style={{"width":"300px","height":"300px",mixBlendMode:"color-burn",aspectRatio:1/1,objectFit:"cover"}}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div 
                    className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                    style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>
                        Python and Ruby
                    </h2>
                    <p>
                    Although primarily JavaScript-centric, CodeSandbox also provides containerized support for other languages like Python and Ruby. This capability broadens its applicability beyond frontend and full-stack development, allowing developers to experiment with backend technologies, scripting, and web services in a familiar environment.
                    </p>
                </div>
                <div
                    style={{
                        width: "clamp(300px,40%,450px)",
                        height: "100%",
                    }}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {images.others.map((img,index)=>{
                            return (
                                <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={img} alt="Frontend" style={{"width":"300px","height":"300px",mixBlendMode:"color-burn",aspectRatio:1/1,objectFit:"cover"}}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
            <section
                className="w-100 d-flex flex-row justify-content-center align-items-center flex-wrap"
                style={{
                    minHeight:"100vh",
                    backdropFilter:"blur(10px)",
                }}
            >
                <div 
                    className="d-flex flex-column justify-content-center align-items-center p-4 home" 
                    style={{
                        width: "clamp(300px,40%,450px)",
                    }}>
                    <h2>
                        Markdown and MDX Support
                    </h2>
                    <p>
                        This supports Markdown and MDX, enabling developers to build content-focused projects with ease. This is particularly useful for documentation, blogs, or technical articles that combine code snippets with rich text. MDX’s integration with React components allows dynamic, interactive content creation.
                    </p>
                </div>
                <div
                    style={{
                        width: "clamp(300px,40%,450px)",
                        height: "100%",
                    }}>
                        <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {images.md.map((img,index)=>{
                            return (
                                <SwiperSlide key={index} className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={img} alt="Frontend" style={{"width":"300px","height":"300px",mixBlendMode:"color-burn",aspectRatio:1/1,objectFit:"cover"}}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
        </main>
    )
}
