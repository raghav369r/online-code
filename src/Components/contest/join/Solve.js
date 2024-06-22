import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getContest } from "../../../services/auth";
import { MdExpandMore } from "react-icons/md";
import { Editor } from "@monaco-editor/react";
import { TiRefresh } from "react-icons/ti";
import { FaRegFileCode } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Tooltip } from "../../../tooltip/Tooltip";
import { run } from "../../../services/run/run";

export const Solve = () => {
  const { contestId, slug } = useParams();
  const [data, setData] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState({});
  useEffect(() => {
    const getdata = async () => {
      const res = await getContest(contestId);
      setData(res?.questions[parseInt(slug)]);
    };
    getdata();
    // console.log(data);
  }, []);

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  const handleRun = async () => {
    setOutput({ loading: true });
    const code = editorRef.current.getValue();
    console.log(code);
    const res = await run("cpp", code);
    console.log(res);
    setOutput(res);
  };
  return (
    <div className="container mx-auto ">
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
          <option
            value="cpp"
            className="flex justify-center appearance-none w-full"
          >
            <h1>C++</h1>
          </option>
          <option className="flex justify-center" value="java">
            <h1>Java</h1>
          </option>
          <option className="flex justify-center" value="c">
            <h1>C</h1>
          </option>
          <option className="flex justify-center" value="python">
            <h1>Python</h1>
          </option>
          <option className="flex justify-center" value="r">
            <h1>R</h1>
          </option>
          <option className="flex justify-center" value="ruby">
            <h1>Ruby</h1>
          </option>
          <option className="flex justify-center" value="swift">
            <h1>Swift</h1>
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
          onMount={handleEditorDidMount}
          // theme="light-dark"
        />
      </div>
      <div className="flex flex-row-reverse gap-4 m-2">
        <button className="py-1.5 px-8 bg-blue-800 text-white">Submit</button>
        <button className="py-1.5 px-8 bg-white" onClick={handleRun}>
          {output.loading ? "Running" : "Run"}
        </button>
      </div>
      {output.data && <h1 className="text-3xl mx-10">Output</h1>}
      {output?.data?.stderr && (
        <div className="p-4 rounded-lg mx-10 bg-neutral-300">
          <h1 className="text-red-600">{output.data.stderr}</h1>
        </div>
      )}
      {output?.data?.stdout && (
        <div className="p-4 rounded-lg m-10 bg-neutral-300">
          <h1 className="text-green-600">{output.data.stdout}</h1>
        </div>
      )}
    </div>
  );
};
