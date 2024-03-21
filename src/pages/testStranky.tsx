import { NextPage } from "next";
import { useState } from "react";

const TestStranky: NextPage = () => {
  const [cislo, setCislo] = useState(4);

  let cisloDruhe = 32;

  return (
    <div className="flex h-full min-h-full w-full flex-col items-center justify-center bg-gray-800 text-white">
      <h1>Test stránky</h1>
      <button
        onClick={() => {
          cisloDruhe++;
          console.log(cisloDruhe);
          setCislo(cislo + 1);
        }}
      >
        + přičíst 1
      </button>
      <button
        onClick={() => {
          cisloDruhe--;
          setCislo(cislo - 1);
        }}
      >
        {" "}
        - odečíst 1
      </button>
      <br />
      <br />
      {cislo}
      <br />
      {cisloDruhe}
    </div>
  );
};

export default TestStranky;
