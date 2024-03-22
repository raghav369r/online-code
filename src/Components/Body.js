import { useState } from "react";
import CodeEditor from "./CodeEditor";
import Problem from "./Problem";
import Split from "react-split";

function Body() {
  const [output, setOutput] = useState(null);
  const [loading, setLoading]=useState(false);
  return (
    <div>
      <Split className="split" gutterSize={5} minSize={0}>
        <div className="">
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
