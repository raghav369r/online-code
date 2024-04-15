import { useRef, useState } from "react";
import CodeEditor from "./CodeEditor";
import Problem from "./Problem";
import Split from "react-split";
import Header from "./Header";

function Body({problem}) {
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fullscreenEditor, setfullscreenEditor] =useState(false);
  const splitRef=useRef(null);
  
  setEditorFullscreen=()=>{
    if(fullscreenEditor) splitRef.current.split.setSizes([50,50]);
    else splitRef.current.split.setSizes([0,100]);
    // if (!expand) splitRef.current.split.setSizes([50, 50]);
    // else splitRef.current.split.setSizes([100, 0]);
    setfullscreenEditor(!fullscreenEditor);
  }

  return (
    <>
      <Header/>
      <div className="bg-light-bg">
        <Split ref={splitRef} className="split" gutterSize={5} minSize={0}>
          <div className="m-1 mr-0">
            <Problem problem={problem} output={output} loading={loading} />
          </div>
          <div className="m-1 ml-0">
            <CodeEditor
              setOutput={setOutput}
              setLoading={setLoading}
              loading={loading}
              setEditorFullscreen={setEditorFullscreen}
            />
          </div>
        </Split>
      </div>
    </>
  );
}

export default Body;
