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
    topic_tags: ["string", "array"],
    slug: "check-palindrome",
  };
  return (
    <div className="h-[100vh]" style={{ "background-color": "#0a192f" }}></div>
  );
};

// background-color": "#0a192f
// #64ffda
// ccd6ff6
// 8892b0
// grayscale(100%) contrast(1) brightness(50%) --project image

{
  /* <div class="container">
  <svg id="hexagon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g>
      <g id="B" transform="translate(36, 33)" fill="#64FFDA" style="opacity: 0" font-family="system-ui,Calibre-Medium, Calibre,sans-serif" font-size="50" font-weight="400" letter-spacing="4.16666603">
        <text>
          <tspan x="0.141666985" y="33">B</tspan>
        </text>
      </g>
    <path 
      stroke="#64FFDA" 
      stroke-width="5" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      d="M 50, 5
         L 11, 27
         L 11, 72
         L 50, 95
         L 89, 73
         L 89, 28 z"
          />
      </g>
  </svg>
</div> */
}

// html {
//   box-sizing: border-box;
// }

// *,
// *:before,
// *:after {
//   box-sizing: inherit;
// }

// html,
// body {
//   width: 100%;
//   height: 100%;
// }

// body {
//   margin: 0;
//   background-color: #0a192f;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: sans-serif;
// }

// .container {
//   width: max-content;
//   max-width: 100px;
// }

// svg {
//   width: 100%;
//   height: 100%;
//   display: block;
//   margin: 0 auto;
//   fill: none;
// }

// const anim = anime.timeline({
//   loop: true,
//   direction: 'alternate',
// });

// anim
//   .add({
//     targets: '#hexagon path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutQuart',
//     duration: 2000,
//     delay: function(el, i) { return i * 250 },
//   })
//   .add({
//     targets: '#hexagon #B',
//     duration: 1000,
//     opacity: 1,
//     easing: 'easeInOutQuart'
//   });  
