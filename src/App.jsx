import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <main className="bg-[url(/images/background-pattern-mobile.svg)] bg-no-repeat bg-contain px-6 py-[8rem] md:py-8 lg:py-16 md:bg-[url(/images/background-pattern-desktop.svg)] min-h-screen font-work flex justify-center items-center bg-Light-Pink">
      <Card />
    </main>
  );
}

export default App;
