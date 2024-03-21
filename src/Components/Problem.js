import { useState, useRef, useEffect } from "react";
import Split from "react-split";
import {
  MdExpandLess,
  MdExpandMore,
  MdFullscreen,
  MdFullscreenExit,
} from "react-icons/md";

const Problem = ({ output, loading }) => {
  const [expand, setExpand] = useState(false);
  const [fullScreen, setFullscreen] = useState(false);
  const splitRef = useRef(null);

  useEffect(() => {
    if (output) !expand && handleExpand(true);
  }, [output]);

  const handleExpand = () => {
    setExpand(!expand);
    if (splitRef.current) {
      if (!expand) {
        splitRef.current?.split?.setSizes([50, 50]);
      } else {
        splitRef.current.split.setSizes([90, 10]);
        // console.log("sizes ", splitRef.current.split.getSizes());
      }
    }
  };

  const handlefullscreen = () => {
    setFullscreen(!fullScreen);
  };
  // console.log(output?.stdout);

  return (
    <>
      <Split
        ref={splitRef}
        className="h-[98vh]"
        direction="vertical"
        gutterSize={5}
        sizes={[90, 10]}
        minSize={0}
      >
        <div className="w-full overflow-y-auto">
          <h1 className="text-4xl m-2 font-sans">2402.Meeting-rooms-iii</h1>
          <p>
            You are given an integer n. There are n rooms numbered from 0 to n -
            1. You are given a 2D integer array meetings where meetings[i] =
            [starti, endi] means that a meeting will be held during the
            half-closed time interval [starti, endi). All the values of starti
            are unique. Meetings are allocated to rooms in the following manner:
          </p>
          <p>
            1. Each meeting will take place in the unused room with the lowest
            number.
          </p>
          <p>
            2. If there are no available rooms, the meeting will be delayed
            until a room becomes free. The delayed meeting should have the same
            duration as the original meeting.
          </p>
          <p>
            3. When a room becomes unused, meetings that have an earlier
            original start time should be given the room.
          </p>
          <p>
            Return the number of the room that held the most meetings. If there
            are multiple rooms, return the room with the lowest number. A
            half-closed interval [a, b) is the interval between a and b
            including a and not including b.
          </p>
        </div>

        <div
          className={`${
            fullScreen
              ? "bg-white z-10 top-0 right-0 absolute w-full h-[100vh] border-b-2"
              : ""
          }`}
        >
          <div className="flex justify-between p-2 shadow-lg">
            <p>Output</p>
            {loading && <p>exicuting...</p>}
            {output && output.error!='' && <p className="text-red-900">ERROR</p>} 
            {output && output.stdout!='' && <p className="text-green-700">Code Exicuted</p>}
            <div className="flex ">
              <div
                onClick={handlefullscreen}
                className="mr-2 w-5 h-5 cursor-pointer"
              >
                {fullScreen ? <MdFullscreenExit /> : <MdFullscreen />}
              </div>
              {!fullScreen && (
                <div onClick={handleExpand} className="w-5 h-5 cursor-pointer">
                  {expand ? <MdExpandMore /> : <MdExpandLess />}
                </div>
              )}
            </div>
          </div>
            {(fullScreen || expand) && (
              <div className={(fullScreen ? "h-[92vh]": "") + " bg-white"}>
                <div className="p-4" style={{ overflowWrap: "break-word" }}>
                  {output?.stdout.split('\n').map((ele,ind)=><p key={ind}>{ele}</p>)}
                  {output?.stderr.split('\n').map((ele,ind)=><p className="text-red-600">{ele}</p>)}
                </div>
              </div>
            )}
        </div>
      </Split>
    </>
  );
};

export default Problem;
