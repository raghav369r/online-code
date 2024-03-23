import Header from "./Header";
import CodeEditor from "./CodeEditor";
import Split from "react-split";
import { useState } from "react";

function PlayGround() {
  const [output, setOutput] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(output);
  return (
    <div className="">
      <Header />
      <Split className="split" gutterSize={5} minSize={0}>
        <div className="">
          <CodeEditor
            setPlaygroundOutput={setOutput}
            setPlaygroundLoading={setLoading}
          />
        </div>
        <div className="border m-2 rounded-xl  overflow-x-scroll overflow-y-scroll h-[95vh] scroll-smooth">
          <div className="flex flex-row border-b-2 h-7 justify-between">
            <p>Output</p>
            {loading && <p>exicuting...</p>}
          </div>
          <div className="px-4 py-2">
            <div style={{ overflowWrap: "break-word" }}>{output?.stdout?.split('\n').map((ele,ind)=><p key={ind}>{ele}</p>)}</div>
            <div style={{ overflowWrap: "break-word" }}>{output?.stderr?.split('\n').map((ele,ind)=><p key={ind}>{ele}</p>)}</div>
          </div>
        </div>
      </Split>
    </div>
  );
}

export default PlayGround;
