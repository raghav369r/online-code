import { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import InputQuestion from "./InputQuestion";
import { useSelector } from "react-redux";
import { registerContest } from "../../../services/auth";
import { validate_contest } from "./validate";

function Create() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const urlRef = useRef(null);
  const nameRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const { _id: userid } = useSelector((store) => store?.user?.user);

  const handleAdd = () => {
    let ques = [
      ...questions,
      { title: "", question: "", exampleip: [""], exampleop: [""] },
    ];
    setQuestions(ques);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      url: urlRef.current.value,
      start: new Date(startRef.current.value),
      end: new Date(endRef.current.value),
      questions: questions,
      owner: userid,
    };
    const validation_error = validate_contest(data);
    if (validation_error.error) {
      setError(validation_error.error.details[0].message);
      return;
    }
    const res = await registerContest(data);
    if (res.error) setError(res.error);
    else {
      setError("");
      setSuccess(res);
    }
  };

  return (
    <div className="p-[5%]">
      <form className="flex flex-col bg-white w-full md:w-1/2 mx-auto md:p-4">
        <h1 className="m-4 text-center text-green-900 text-xl font-semibold">
          Create Contest
        </h1>
        <input
          ref={urlRef}
          type="text"
          className="p-2 m-2 border border-gray-200"
          placeholder="custom url"
          name="url"
        />
        <input
          ref={nameRef}
          type="text"
          className="p-2 m-2 border border-gray-200"
          placeholder="name of your contest"
          name="name"
        />
        <div
          onClick={handleAdd}
          className="flex justify-between m-2 p-2 text-xl hover:cursor-pointer"
        >
          <h1>questions</h1>
          <IoMdAdd className="" />
        </div>
        {questions.map((ele, ind) => (
          <div key={ind} className="m-2 p-2">
            <InputQuestion
              ind={ind}
              questions={questions}
              setQuestions={setQuestions}
            />
          </div>
        ))}
        <div className="flex">
          <label className="text-gray-400 p-2 m-2">Start time: </label>
          <input
            ref={startRef}
            type="datetime-local"
            className="p-2 m-2 border border-gray-200"
            placeholder="start date with time"
            name="start"
          />
        </div>
        <div className="flex">
          <label className="text-gray-400 m-2 p-2">End time: </label>
          <input
            ref={endRef}
            type="datetime-local"
            className="p-2 m-2 border border-gray-200"
            placeholder="end date with time"
            name="end"
          />
        </div>
        <p className="text-red-800 p-2">{error}</p>
        <p className="text-green-800 font-semibold p-2">{success}</p>
        <button className="bg-green-600 p-2 m-2" onClick={handleCreate}>
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
