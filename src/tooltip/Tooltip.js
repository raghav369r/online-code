import React from "react";

export const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group">
      {children}
      <div className="hidden text-sm cursor-pointer absolute z-50 right-[0%] group-hover:block text-neutral-300 bg-neutral-500 border border-neutral-600 rounded-md p-1 whitespace-nowrap">
        {text || "Not set"}
      </div>
    </div>
  );
};
