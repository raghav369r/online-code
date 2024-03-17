import { useNavigate } from "react-router-dom";
import { pndata } from "../data/probs";
import useNight from "../services/useNight";
import Header from "./Header";
function ProblemTable() {
  const night = useNight();
  const navigate = useNavigate();
  const thcls = "p-3 bg-white text-gray-400 font-normal m-0";
  const trcls = "odd:bg-gray-200 p-3 bg-white";
  const tdcls = "p-3";

  const handleClick = () => {
    navigate("/solve-problem");
  };

  return (
    <div className={night ? "bg-slate-950 " : "bg-white"}>
      <Header />
      <div className="md:mx-24">
        <table className="w-full">
          <thead>
            <tr className={trcls}>
              <th className={thcls + " font-"}>Status</th>
              <th className={thcls}>Title</th>
              <th className={thcls}>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {pndata.map((ele, index) => (
              <tr className={trcls} key={ele.problem_name}>
                <td className={tdcls}>{!(index % 2) ? "Done" : ""}</td>
                <td
                  className={tdcls + " cursor-pointer hover:text-blue-700"}
                  onClick={handleClick}
                > 
                  {index + 1 + ". " + ele.problem_name}
                </td>
                <td className={tdcls}>{index % 2 ? "Easy" : "Medium"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProblemTable;
