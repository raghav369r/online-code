// import { useEffect } from "react";
// import Codemirror from "codemirror";
// import "codemirror/lib/codemirror.css";
// import "codemirror/theme/dracula.css";
// import "codemirror/mode/javascript/javascript";
// import "codemirror/mode/python/python";
// import "codemirror/addon/edit/closebrackets";
// import "codemirror/addon/edit/closetag";

// function Editor() {
//     useEffect(()=>{
//         async function init(){
//             Codemirror.fromTextArea(document.getElementById("editor-area"),{
//                 mode:{name: "python", json:true},
//                 theme:"dracula",
//                 autoCloseTags:true,
//                 autoCloseBrackets:true,
//                 lineNumbers:true,
//                 value:"console.log(Hlo world)"
//             });
//         }
//         init();
//     },[]);

//     return (    
//         <textarea id="editor-area"></textarea>
//     );
// }

// export default Editor;