import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProblemDes } from "../services/problems/problem";
import Body from "./Body";

export const SolveProblem = () => {
  const [problem, setProblem] = useState(null);
  const location = useLocation();
  const path = location.pathname;
  const name = path.split("/").slice(-1)[0];

  const getProblemDetails = async () => {
    const data = await getProblemDes(name);
    // console.log("data: ",data)
    setProblem(data);
  };
  useEffect(() => {
    getProblemDetails();
  }, []);
  return <Body problem={problem}/>;
};
