import Header from "./Header";
import CodeEditor from "./CodeEditor";
import Split from "react-split";
import { useState } from "react";

function PlayGround() {
  const [output, setOutput] = useState({ output: "", error: "" });
  const [loading, setLoading]=useState(false);
  return (
    <div className="">
      <Header />
      <Split className="split" gutterSize={5} minSize={0}>
        <div className="">
          <CodeEditor setOutput={setOutput} setLoading={setLoading} loading={loading}/>
        </div>
        <div>
          <div className="flex flex-row border-b-2 h-7 justify-between">
            <p>Output</p>
            {loading && <p>exicuting...</p>}
          </div>
          <div style={{ overflowWrap: "break-word" }}>{output.stdout}</div>
          <div style={{ overflowWrap: "break-word" }}>{output.stderr}</div>

        </div>
      </Split>
    </div>
  );
}

export default PlayGround;
