"use client";

import React, { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Sidebar({}: Props) {
  return (
    <div
      onClick={() => {
        console.log(1);
      }}
      className="absolute left-0 top-0 w-screen h-full bg-black/40 backdrop-blur-sm z-[150] flex items-end"
    >
      <div className="w-96 h-full bg-gray_006"></div>
    </div>
  );
}
