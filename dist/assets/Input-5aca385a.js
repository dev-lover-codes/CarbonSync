import{j as e}from"./index-66c1c1e5.js";const d=({label:l,error:s,icon:t,className:r="",...a})=>e.jsxs("div",{className:`flex flex-col gap-1.5 w-full ${r}`,children:[l&&e.jsx("label",{className:"text-sm font-semibold text-gray-700 ml-1",children:l}),e.jsxs("div",{className:"relative",children:[t&&e.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",children:e.jsx(t,{size:20})}),e.jsx("input",{className:`
            w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none
            ${t?"pl-11":""}
            ${s?"border-red-300 focus:border-red-500 bg-red-50":"border-gray-100 focus:border-primary focus:bg-white bg-gray-50"}
          `,...a})]}),s&&e.jsx("span",{className:"text-xs text-red-500 font-medium ml-1",children:s})]}),n=d;export{n as I};
