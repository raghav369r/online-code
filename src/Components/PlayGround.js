import Header from "./Header";
import CodeEditor from "./CodeEditor";
import Split from "react-split";
import { useState } from "react";

function PlayGround() {
  const [output, setOutput] = useState({ output: "", error: "" });
  return (
    <div className="">
      <Header />
      <Split className="split" gutterSize={5} minSize={0}>
        <div className="">
          <CodeEditor setOutput={setOutput}/>
        </div>
        <div>
          <div className="border-b-2 h-7">Console</div>
          <div style={{ overflowWrap: "break-word" }}>{output.stdout}</div>
          <div style={{ overflowWrap: "break-word" }}>{output.stderr}</div>

        </div>
      </Split>
    </div>
  );
}

export default PlayGround;
