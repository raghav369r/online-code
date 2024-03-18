import Editor from "@monaco-editor/react";
import Timer from "./Timer";
import { useState, useRef, useEffect } from "react";
import { GrPlayFill } from "react-icons/gr";
import useNight from "../services/useNight";
import { MdFullscreen, MdFullscreenExit, MdOutlineTimer } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";

import { useLocation } from "react-router-dom";
import { run } from "../services/run/run";

function CodeEditor({ setOutput }) {
    const locataion = useLocation();
    const night = useNight();
    const editorRef = useRef(null);
    const [language, setLanguage] = useState("cpp");
    const [fullScreen, setFullscreen] = useState(false);
    const [timerexpand, setTimerexpand] = useState(false);
    const path = locataion.pathname;

    useEffect(() => {
        // Get the current editor instance
        //window.monaco?.editor.getModels()[0];
        const editor = editorRef?.current?.getModel();
        if (editor) {
            const theme = night ? "vs-dark" : "vs";
            monaco.editor.setTheme(theme);
        }
    }, [night]);

    useEffect(() => {
        return () => {
            const code = editorRef?.current?.getValue();
            localStorage.setItem(path + "/" + language, code);
        };
    }, []);
    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        // editor.setTheme('light-dark');
        if (night) monaco.editor.setTheme("vs-dark");
        localStorage.getItem(path + "/" + language) &&
            editorRef.current?.setValue(
                localStorage.getItem(path + "/" + language)
            );
    };

    const handleLanguageChange = (e) => {
        const code = editorRef?.current?.getValue();
        localStorage.setItem(path + "/" + language, code);

        const lang = e.target.value;
        monaco.editor.setModelLanguage(editorRef?.current?.getModel(), lang);
        setLanguage(lang);
        localStorage.getItem(path + "/" + lang) &&
            editorRef.current?.setValue(
                localStorage.getItem(path + "/" + lang)
            );
    };

    const handleRun = async () => {
        const code = editorRef?.current?.getValue();
        var output = await run(language, code);
        setOutput({
            ...output.data,
        });
    };

    handleSettimer = () => {
        setTimerexpand(!timerexpand);
    };

    return (
        <div
            className={
                (fullScreen ? "absolute top-0 left-0 w-full " : "") +
                (night ? " bg-slate-950 " : " bg-white ")
            }
        >
            <div className="flex my-1 justify-between border-b-2">
                <select
                    className={night ? "bg-gray-800" : "bg-white"}
                    value={language}
                    onChange={handleLanguageChange}
                >
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="c">C</option>
                    <option value="python">Python</option>
                    <option value="r">R</option>
                    <option value="ruby">Ruby</option>
                    <option value="swift">Swift</option>
                </select>
                <button
                    className="px-2 flex align-middle justify-between"
                    onClick={handleRun}
                >
                    <GrPlayFill className="mt-1 pr-2" />
                    Run
                </button>
                <div className="flex">
                    {!timerexpand && (
                        <MdOutlineTimer
                            className="mt-1 hover:cursor-pointer"
                            onClick={handleSettimer}
                        />
                    )}
                    {timerexpand && 
                        <div className="flex">
                            <FaAngleLeft
                                className="mt-1 hover:cursor-pointer"
                                onClick={handleSettimer}
                            />
                            <Timer closeTimer={handleSettimer} />
                        </div>
                    }
                </div>
                <div onClick={() => setFullscreen(!fullScreen)}>
                    {fullScreen ? (
                        <MdFullscreenExit className="mr-2 w-5 h-5 cursor-pointer" />
                    ) : (
                        <MdFullscreen className="mr-2 w-5 h-5 cursor-pointer" />
                    )}
                </div>
            </div>
            <Editor
                width="100%"
                height="90vh"
                defaultLanguage="cpp"
                defaultValue="// Write your code here"
                onMount={handleEditorDidMount}
                // theme="light-dark"
            />
        </div>
    );
}

export default CodeEditor;
