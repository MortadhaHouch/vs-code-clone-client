/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import {emmetCSS,emmetHTML,expandAbbreviation} from "emmet-monaco-es"
import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaHtml5,FaCss3,FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DarkThemeContext } from './providers/DarkThemeProvider';
function CodeEditor(props,ref) {
    const disposeEmmetHTMLRef = useRef();
    const disposeEmmetCSSRef = useRef();
    let themeContext = useContext(DarkThemeContext);
    let languageIcon = null;
    switch (props.language) {
        case "html":
            languageIcon = <FaHtml5 color="#FF4C4C"/>
            break;
        case "css":
            languageIcon = <FaCss3 color='#4B70F5'/>
            break;
        case "javascript":
            languageIcon = <IoLogoJavascript color="#FFDE4D"/>
            break;
        case "python":
            languageIcon = <FaPython color="#FFDE4D"/>
            break;
        default:
            break;
    }
    const handleEditorWillMount = (monaco) => {
        if(props.language == "html"){
            disposeEmmetHTMLRef.current = emmetHTML(monaco);
        }else if(props.language == "css"){
            disposeEmmetCSSRef.current = emmetCSS(monaco);
        }
    };
    useEffect(() => {
        return () => {
            disposeEmmetHTMLRef.current ? disposeEmmetHTMLRef.current() : null;
            disposeEmmetCSSRef.current ? disposeEmmetCSSRef.current() : null;
        };
    }, []);
    return (
        <div
            className="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
        >
            <p
                className={themeContext.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}
                style={{
                    width:"100%",
                }}
            >
                {languageIcon}
                <span className="m-2">{props.language}</span>
            </p>
            <Editor
                {...props}
                height={400}
                width={400}
                language={props.language}
                defaultValue=""
                theme= 'vs-dark' // Set the theme here: 'vs', 'vs-dark', 'hc-black', or 'hc-light'
                // onChange={handleEditorChange}
                // onMount={handleEditorDidMount}
                beforeMount={handleEditorWillMount}
                // onValidate={handleEditorValidation}
                onChange={(v)=>{
                    switch (props.language) {
                        case "html":
                            props.setHtml(v);
                            break;
                        case "css":
                            props.setCss(v);
                            break;
                        case "javascript":
                            props.setJs(v);
                            break;
                        default:
                            break;
                    }
                }}
            />
        </div>
    );
}
export default React.forwardRef(CodeEditor);