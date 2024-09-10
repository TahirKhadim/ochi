import React from 'react';

const Landing = () => {
  const elem = ["We create", "eye-opening", "presentations"];
  const elem1 = ["For public and private companies", "From the first pitch to IPO"];

  return (
    <div className=" bg-zinc-900 sm:h-[80vh] md:h-[65vh] lg:h-screen h-[85vh] py-1">
      <div className="md:px-10 px-5 md:mt-32 mt-20 lg:mt-20">
        {elem.map((item, key) => (
          <div key={key}>
            <h1
              className="lg:text-8xl md:text-8xl sm:text-7xl text-6xl font-lg text-white  uppercase font-['Founders-Grotesk'] font-semibold md:leading-[9.5vw] leading-[]"
            >
              {item}
            </h1>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-zinc-300 flex flex-col pt-10 gap-10 md:gap-0 md:flex-row justify-between md:px-16 md:items-center mt-20 lg:pt-3 md:mt-36 px-8">
        {elem1.map((item, i) => (
          <p key={i} className="text-zinc-200 text-sm lg:text-base  md:text-left">
            {item}
          </p>
        ))}

        <div className="flex  md:justify-end">
          <button className="px-4 py-2 bg-zinc-800 border-white border text-white rounded-full hover:bg-black hover:text-yellow-200 transition duration-300 ease-in-out uppercase text-sm lg:text-base">
            Start the project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
