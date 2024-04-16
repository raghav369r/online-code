import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoCaretBack } from "react-icons/io5";

const Problem = ({ question }) => {
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();
  const { title } = question;

  const handleClick = () => {};

  return (
    <div className="shadow-md bg-white m-4 p-2">
      <h1
        onClick={handleClick}
        className="p-2 m-2 text-lg font-semibold  hover:cursor-pointer"
      >
        {title}
      </h1>
      <div className="flex justify-between">
        {solved ? (
          <p className="text-green-900">Solved</p>
        ) : (
          <p className="text-red-900">Not Solved</p>
        )}
        <p>#solved: 0</p>
        <p className="">
          Difficulty: <strong className="text-yellow-700">medium</strong>
        </p>
      </div>
    </div>
  );
};

function Problems({ data }) {
  const navigate = useNavigate();
  const { questions, name, end, start } = data;

  return (
    <div className="md:m-20">
      <Link
        className="my-3 text-gray-400 hover:text-blue-900 flex"
        to={"/contest/join"}
      >
        <IoCaretBack className="mt-[2px]" />
        <h1>Back to Contest</h1>
      </Link>
      <h1 className="text-2xl my-4">{name}</h1>
      <h1 className="p-4 border-[1px] border-gray-300 border-l-[6px] rounded-sm bg-white">
        The contest has ended.
      </h1>
      <div className="md:flex md:gap-10 mt-10">
        <div className="w-full border border-gray-300 rounded-md md:w-2/5 shadow-md h-fit">
          <div className="flex justify-between border-b border-gray-200 bg-gray-200 p-2">
            <h1 className="">Problem list</h1>
            <h1 className="">Score</h1>
          </div>
          {questions.map((ele, ind) => (
            <div
              key={ind}
              className="flex justify-between border-b border-gray-200 bg-white p-2"
            >
              <p
                className="text-blue-800 cursor-pointer"
                onClick={() => navigate(""+ind)}
              >
                {ele.title}
              </p>
              <p className="bg-gray-300 px-2 rounded-xl">3</p>
            </div>
          ))}
        </div>
        <div className="w-full border border-gray-300 rounded-md md:w-2/5 shadow-md">
          <h1 className="border-b border-gray-200 bg-gray-200 p-2">Ranking</h1>
          <div className="flex justify-between border-b border-gray-200 bg-white p-2">
            <p className="">Rank</p>
            <p className="">Name</p>
            <p>Score</p>
            <p>finish time</p>
          </div>
          {questions.map((ele, ind) => (
            <div
              key={ind}
              className="flex justify-between border-b border-gray-200 bg-white p-2"
            >
              <p className="">{ind + 1}</p>
              <p className="bg-gray-300 px-2 rounded-xl">3</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Problems;

//   return (
//     <div className="m-10">
//       <h1 className="w-full text-2xl text-blue-700 font-bold text-center m-4">
//         {name}
//       </h1>
//       <div className="md:flex">
//         <div className="md:w-3/5">
//         <h1 className="text-xl m-4 font-semibold text-center">Problems</h1>
//           {questions.map((ele, ind) => (
//             <Problem key={ind} question={ele} />
//           ))}
//         </div>
//         <div>
//           <h1 className="text-xl m-4 font-semibold text-center">Leader Board</h1>
//         </div>
//       </div>
//     </div>
//   );

// {
//   questions: [
//     { title: "print to console" },
//     { title: "Check if the given string is palindrome" },
//     { title: "print first n prime numbers" },
//     { title: "print to console" },
//     { title: "Check if the given string is palindrome" },
//     { title: "print first n prime numbers" },
//     { title: "print to console" },
//     { title: "Check if the given string is palindrome" },
//     { title: "print first n prime numbers" },
//     { title: "print to console" },
//     { title: "Check if the given string is palindrome" },
//     { title: "print first n prime numbers" },
//     { title: "print to console" },
//     { title: "Check if the given string is palindrome" },
//     { title: "print first n prime numbers" },
//     { title: "print to console" },
//     { title: "Check if the given string is palindrome" },
//     { title: "print first n prime numbers" },
//   ],
//   name: "basic coding test Contest",
//   end: Date.now,
//   start: Date.now,
// };
