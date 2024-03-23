import Editor from "@monaco-editor/react";
import Timer from "./Timer";
import { useState, useRef, useEffect } from "react";
import { GrPlayFill } from "react-icons/gr";
import useNight from "../services/useNight";
import { MdFullscreen, MdFullscreenExit, MdOutlineTimer } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";

import { useLocation } from "react-router-dom";
import { run } from "../services/run/run";

function CodeEditor({setPlaygroundOutput, setPlaygroundLoading}) {
  const [language, setLanguage] = useState("cpp");
  const [fullScreen, setFullscreen] = useState(false);
  const [timerexpand, setTimerexpand] = useState(false);
  const [output, setOutput]=useState({});
  const locataion = useLocation();
  const night = useNight();
  const editorRef = useRef(null);
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
      editorRef.current?.setValue(localStorage.getItem(path + "/" + language));
  };

  const handleLanguageChange = (e) => {
    const code = editorRef?.current?.getValue();
    localStorage.setItem(path + "/" + language, code);

    const lang = e.target.value;
    monaco.editor.setModelLanguage(editorRef?.current?.getModel(), lang);
    setLanguage(lang);
    localStorage.getItem(path + "/" + lang) &&
      editorRef.current?.setValue(localStorage.getItem(path + "/" + lang));
  };

  const handleRun = async () => {
    // setLoading(true);
    setPlaygroundLoading && setPlaygroundLoading(true);
    const code = editorRef?.current?.getValue();
    console.log(code);
    var res = await run(language, code);
    // setLoading(false);
    setPlaygroundLoading && setPlaygroundLoading(false);
    setOutput({
      ...res.data,
    });
    if(setPlaygroundOutput) setPlaygroundOutput({...res.data});
  };

  handleSettimer = () => {
    setTimerexpand(!timerexpand);
  };

  return (
    <div
      className={
        (fullScreen ? "absolute top-0 left-0 w-[calc(100%-30px)] " : "") +
        "m-2 border rounded-xl overflow-x-hidden"
      }
    >
      <div className="flex mx-2 justify-between">
        <select
          className="font-semibold w-24 mb-2 bg-slate-100 duration-300 focus:ring-0"
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

        <div className="my-auto font-bold flex">
          {!timerexpand && (
            <MdOutlineTimer
              className="mt-1 hover:cursor-pointer"
              onClick={handleSettimer}
            />
          )}
          {timerexpand && (
            <div className="flex my-auto">
              <FaAngleLeft
                className="mt-1 hover:cursor-pointer"
                onClick={handleSettimer}
              />
              <Timer closeTimer={handleSettimer} />
            </div>
          )}
        </div>
        <div className="my-auto" onClick={() => setFullscreen(!fullScreen)}>
          {fullScreen ? (
            <MdFullscreenExit className="mr-2 w-5 h-5 cursor-pointer" />
          ) : (
            <MdFullscreen className="mr-2 w-5 h-5 cursor-pointer" />
          )}
        </div>
      </div>
      <div className="">
        <Editor
          width="100%"
          height="83vh"
          defaultLanguage="cpp"
          defaultValue="// Write your code here"
          onMount={handleEditorDidMount}
          // theme="light-dark"
        />
        <div className="h-[6%] border-t px-2 flex justify-between">
          <div className="">
            <button className="my-2 ">Console</button>
          </div>
          <div className="flex gap-3">
            <button
              className="my-2 px-4 rounded-md font-semibold text-white bg-gray-400 hover:bg-gray-500"
              onClick={handleRun}
            >
              Run
            </button>
            <button className="px-4 my-2 rounded-md font-semibold text-white bg-green-600 hover:bg-green-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;

// {loading && <p>Running...</p>}
//                 {!loading && (
//                     <button
//                         className="px-2 flex align-middle justify-between"
//                         onClick={handleRun}
//                     >
//                         <GrPlayFill className="mt-1 pr-2" />
//                         Run
//                     </button>
//                 )}
