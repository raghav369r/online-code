import { useRef } from "react";
import Split from "react-split";
import Header from "./Header";

function Com() {
  const splitRef=useRef(null);
  return (
    <div >
      <Header/>
      <Split
        ref={splitRef}
        className="h-[90vh]"
        direction="vertical"
        gutterSize={5}
        sizes={[50, 50]}
        minSize={0}
      >
        <div className="bg-zinc-600">cecee</div>
        <div className="bg-slate-600">eqceqcq</div>
      </Split>
    </div>
  );
}

export default Com;
