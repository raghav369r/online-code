import axios from "axios";
import { Run_Backend } from "../../config/constants";

export const run = async (language, code) => {
  let output={stderr:"Network error"};  
  try {
        output= await axios.post(Run_Backend, {
            language: language,
            code: code,
        });
        return output;
    } catch (ex) {
        return output;
    }
};
