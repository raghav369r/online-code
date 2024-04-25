import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContest } from "../../../services/auth";
import { MdExpandMore } from "react-icons/md";
import { Editor } from "@monaco-editor/react";
import { TiRefresh } from "react-icons/ti";
import { FaRegFileCode } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Tooltip } from "../../../tooltip/Tooltip";

export const Solve = () => {
  const { contestId, slug } = useParams();
  const [data, setData] = useState("");
  const [language, setLanguage] = useState("cpp");
  useEffect(() => {
    const getdata = async () => {
      const res = await getContest(contestId);
      setData(res?.questions[parseInt(slug)]);
    };
    getdata();
    // console.log(data);
  }, []);

  return (
    <div className="md:m-20 ">
      <h1 className="text-3xl font-semibold m-4 ml-0">{data?.title}</h1>
      <p className="m-2">{data.question}</p>
      {data?.exampleip?.map((ele, ind) => (
        <div className="m-2 bg-white bg-opacity-30 rounded-sm p-2">
          <h1 className="font-semibold text-lg my-2">
            Example: {" " + (ind + 1)}
          </h1>
          <div className="border-l-4 border-gray-400 px-4">
            <div className="flex">
              <h1>Input: </h1>
              <p>{ele}</p>
            </div>
            <div className="flex">
              <h1>Output: </h1>
              <p>{data?.exampleop?.[ind]}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="m-2 mt-8 flex justify-between border p-1">
        <select
          className="appearance-none font-semibold min-w-40 border p-2 rounded-md focus:outline-none bg-white bg-opacity-30"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="cpp" className="flex justify-center">
            <h1>C++</h1>
            <MdExpandMore />
          </option>
          <option className="flex justify-center" value="java">
            <h1>Java</h1>
            <MdExpandMore />
          </option>
          <option className="flex justify-center" value="c">
            <h1>C</h1>
            <MdExpandMore />
          </option>
          <option className="flex justify-center" value="python">
            <h1>Python</h1>
            <MdExpandMore />
          </option>
          <option className="flex justify-center" value="r">
            <h1>R</h1>
            <MdExpandMore />
          </option>
          <option className="flex justify-center" value="ruby">
            <h1>Ruby</h1>
            <MdExpandMore />
          </option>
          <option className="flex justify-center" value="swift">
            <h1>Swift</h1>
            <MdExpandMore />
          </option>
        </select>
        <div className="flex gap-3">
          <Tooltip text={"Set to default Code"}>
            <TiRefresh className="mt-1 bg-white border rounded-md shadow-md size-8 p-1 cursor-pointer" />
          </Tooltip>
          <Tooltip text={"retrive last submitted code"}>
            <FaRegFileCode className="mt-1 bg-white border rounded-md shadow-md size-8 p-1 cursor-pointer" />
          </Tooltip>
          <Tooltip text={"settings"}>
            <IoSettingsOutline className="mt-1 bg-white border rounded-md shadow-md size-8 p-1 cursor-pointer" />
          </Tooltip>
        </div>
      </div>
      <div className="m-2 border">
        <Editor
          width="100%"
          height="80vh"
          defaultLanguage="cpp"
          defaultValue="// Write your code here"
          // onMount={handleEditorDidMount}
          // theme="light-dark"
        />
      </div>
      <div className="flex flex-row-reverse gap-4 m-2">
        <button className="py-1.5 px-8 bg-blue-800 text-white">Submit</button>
        <button className="py-1.5 px-8 bg-white">Run</button>
      </div>
    </div>
  );
};
