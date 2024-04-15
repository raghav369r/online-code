import axios from "axios";
import { Run_Backend } from "../../config/constants";

export const run = async (language, code) => {
  try {
        const output= await axios.post(Run_Backend, {
            language: language,
            code: code,
        });
        return output;
    } catch (ex) {
        if(ex?.response?.status==404) {data:{stderr:'Network Error'}}
        else return {data:{stderr:'Server Down, Try again later!!'}};
    }
};
