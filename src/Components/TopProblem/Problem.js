import React from "react";

export const TopProblem = () => {
  const Problem = {
    name: "Check for palindrome",
    description:
      "Given a String `s` check if the string is palindrome. return `true` if the string is plaindrome else `false`.",
    exip: ["aba", "abcdc", "aabbaa"],
    exop: ["true", "false", "true"],
    solCode_py: `    return s[-1:]==s`,
    difficulty: "easy",
    company_tags: ["amezon", "swiggy", "ola"],
    topic_tags:["string", "array"],
    slug:"check-palindrome",

  };
  return(null
  );
};
