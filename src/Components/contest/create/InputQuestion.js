import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdExpandLess, MdExpandMore } from "react-icons/md";


function InputQuestion({ questions, setQuestions, ind }) {
    const [open, setOpen]=useState(true);
  const handleDelete = () => {
    const newqestions = questions.filter((ele, cind) => cind != ind);
    setQuestions(newqestions);
  };
  const handleChange = (e) => {
    let newqestions = [...questions];
    newqestions[ind][e.target.name] = e.target.value;
    setQuestions(newqestions);
  };
  const handleChangeArray = (e) => {
    let newqestions = [...questions];
    newqestions[ind][e.target.name][0] = e.target.value;
    setQuestions(newqestions);
  };
  return (
    <div className="p-2">
      <div className="flex justify-between hover:cursor-pointer" onClick={()=>setOpen(!open)}>
        {"question " + (ind + 1)} <MdDelete onClick={handleDelete} />
      </div>
      {open && <form className="">
        <CusInput
          type={"text"}
          placeholder={"enter title"}
          name={"title"}
          value={questions[ind].title}
          onChange={handleChange}
        />
        <textarea
          className="w-full m-2 p-2 min-h-20 border border-gray-200"
          placeholder="enter Problem"
          name="question"
          onChange={handleChange}
        />
        <CusInput
          type={"text"}
          placeholder={"enter example input"}
          name={"exampleip"}
          value={questions[ind].exampleip[0]}
          onChange={handleChangeArray}
        />
        <CusInput
          type={"text"}
          placeholder={"enter example output"}
          name={"exampleop"}
          value={questions[ind].exampleop[0]}
          onChange={handleChangeArray}
        />
      </form>}
    </div>
  );
}

export default InputQuestion;

const que = {
  title: "output",
  question: "print world",
  exampleip: "123",
  exampleop: "Hello world",
};

const CusInput = ({ placeholder, type, name, value, onChange }) => {
  return (
    <input
      className="p-2 m-2 border border-gray-200 w-full"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
