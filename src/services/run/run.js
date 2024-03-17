import axios from "axios";

export const run = async (language, code) => {
  const output=await axios.post("http://localhost:3000/run",{language:language, code:code});
  return output;
};