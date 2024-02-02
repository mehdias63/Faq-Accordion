import React from "react";
import Accordion from "./Accordion";

export default function Card() {
  return (
    <div className="bg-white w-[37.5rem] p-8 rounded-lg lg:rounded-2xl shadow-[0_32px_56px_0px_rgba(80,0,118,0.10)]">
      <div className="flex items-center gap-4 ">
        <img src="/images/icon-star.svg" className="w-6 lg:w-10" />
        <h1 className="text-[2rem] font-bold lg:text-[3.5rem] text-Dark-Purple">
          FAQs
        </h1>
      </div>
      <Accordion
        title="What is Frontend Mentor, and how will it help me?"
        text="Frontend Mentor offers realistic coding challenges to help
        developers improve their frontend coding skills with projects in
        HTML, CSS, and JavaScript. It's suitable for all levels and
        ideal for portfolio building."
      />
      <Accordion
        title="Is Frontend Mentor free?"
        text="The majority of our challenges are free, yes. We do have some that
        are premium and require a Pro subscription to access. It will say
        on each challenge whether they are free or premium, so it's
        easy to tell the difference."
      />
      <Accordion
        title="Can I use Frontend Mentor projects in my portfolio?"
        text="Definitely! Please do feel free to use whatever you build in your
        portfolio. Helping developers add professional-looking projects to
        their portfolio was one of the reasons we created this platform!"
      />
      <Accordion
        title="How can I get help if I'm stuck on a challenge?"
        text="The best (and quickest) way to get help on a challenge is in our
        Discord server. There are thousands of other developers in there,
        so it's a great place to ask questions. We even have a
        dedicated &quot;help&quot; channel! If you haven't joined
        yet, you can get an invite to our Discord server here."
      />
    </div>
  );
}
