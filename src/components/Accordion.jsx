import { useState } from "react";

export default function Accordion({ text, title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border-b-[0.0625rem] border-Light-Pink p-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-14 items-center justify-center md:gap-10 lg:gap-2">
        <h1 className="text-base font-semibold lg:text-lg text-Dark-Purple my-4">
          {title}
        </h1>
        <img
          src={`/images/icon-${isOpen ? "minus" : "plus"}.svg`}
          className="ml-auto"
        />
      </div>
      {isOpen && (
        <div className="text-sm font-normal leading-[1.3125rem] lg:leading-6 lg:text-base text-Pale-Purple">
          {text}
        </div>
      )}
    </div>
  );
}
