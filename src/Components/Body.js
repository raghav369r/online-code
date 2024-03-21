import { useState } from "react";
import useNight from "../services/useNight";
import CodeEditor from "./CodeEditor";
import Header from "./Header";
import Problem from "./Problem";
import Split from "react-split";

function Body() {
  const [output, setOutput] = useState(null);
  const [loading, setLoading]=useState(false);
  const night = useNight();
  const cls = night ? "bg-dark-bg text-white h-[100vh]" : "h-[100vh]";
  return (
    <div className={cls}>
      <Split className="split" gutterSize={5} minSize={0}>
        <div className="p-3 pb-0 border-r-2">
          <Problem output={output} loading={loading}/>
        </div>
        <div>
          <CodeEditor setOutput={setOutput} setLoading={setLoading} loading={loading}/>
        </div>
      </Split>
    </div>
  );
}

export default Body;
