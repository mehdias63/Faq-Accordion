import { useState } from "react";

export default function Accordion({ text, title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border-b-[0.0625rem] border-light-pink p-4 last:border-b-0"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-14 items-center justify-center md:gap-10 lg:gap-2">
        <h1 className="text-base font-semibold lg:text-lg text-dark-purple my-4 hover:text-pink cursor-pointer">
          {title}
        </h1>
        <img
          src={`/images/icon-${isOpen ? "minus" : "plus"}.svg`}
          className="ml-auto"
          alt="plus"
        />
      </div>
      {isOpen && (
        <div className="text-sm font-normal leading-[1.3125rem] lg:leading-6 lg:text-base text-pale-purple">
          {text}
        </div>
      )}
    </div>
  );
}
