import { useState } from "react";
import useNight from "../services/useNight";
import CodeEditor from "./CodeEditor";
import Header from "./Header";
import Problem from "./Problem";
import Split from "react-split";

function Body() {
  const [output, setOutput] = useState(null);
  const night = useNight();
  const cls = night ? "bg-gray-950 text-white h-[100vh]" : "h-[100vh]";
  return (
    <div className={cls}>
      <Split className="split" gutterSize={5} minSize={0}>
        <div className="p-3 pb-0 border-r-2">
          <Problem output={output}/>
        </div>
        <div>
          <CodeEditor setOutput={setOutput}/>
        </div>
      </Split>
    </div>
  );
}

export default Body;
