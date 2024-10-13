import  { useContext, useEffect, useRef, useState } from "react";
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { DarkThemeContext } from "./providers/DarkThemeProvider";
import CodeEditor from "./Editor";
import {FileTabs, Sandpack,SandpackConsole,SandpackFileExplorer} from "@codesandbox/sandpack-react";
import { amethyst,aquaBlue,atomDark,cobalt2 ,cyberpunk,dracula,ecoLight,freeCodeCampDark,githubLight,gruvboxDark,gruvboxLight,levelUp,monokaiPro,neoCyan,nightOwl,sandpackDark } from "@codesandbox/sandpack-themes";
export default function Playground() {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'unique-id',
    });
    const style = {
        transform: CSS.Translate.toString(transform),
    };
    const themeContext = useContext(DarkThemeContext);
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const iframeRef = useRef(null);
    const [isShown, setIsShown] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            const srcDoc = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <style>${css}</style>
                </head>
                <body>
                ${html}
                <script>
                ${js}
                window.onerror = function(message, source, lineno, colno, error) {
                    console.log(\`Error: \${message} at \${source}:\${lineno}:\${colno}\`);
                    };
                    </script>
                    </body>
                    </html>`;
                    iframeRef.current.srcdoc = srcDoc;
                },500)
            }, [html, css, js]);

    return (
        <main 
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
                backgroundColor: themeContext.isDark || JSON.parse(localStorage.getItem("isDark")) ? "#03346E" : "#F8EDED",
                height: "200vh",
                width: "100vw"
            }}
        >
            <Sandpack template="react"
                theme="dark"
                options={{
                    showConsole:true,
                    showConsoleButton:true,
                    showInlineErrors:true,
                    showLineNumbers:true,
                    showNavigator:true,
                    showRefreshButton:true,
                    showTabs:true,
                    wrapContent: true, // default - false
                    editorHeight: 400,
                    editorWidthPercentage:100,
                    autorun: false,
                    autoReload: false,
                    recompileMode: "delayed",
                    recompileDelay: 300,
                    resizablePanels: false
                }}  
            >
                <FileTabs/>
                <SandpackFileExplorer/>
                <SandpackConsole/>
            </Sandpack>
        </main>
    );
}