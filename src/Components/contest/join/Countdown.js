import React, { useState, useEffect } from "react";

const Countdown = ({ start }) => {
  const startTime = new Date(start).getTime();
  const [timeRemaining, setTimeRemaining] = useState("");
  const [morethan12, setMorethan12] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = startTime - currentTime;

      if (!difference) window.location.reload();
      if (difference <= 12 * 60 * 60 * 1000) {
        // Calculate hours, minutes, and seconds
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining(`,${hours}:${minutes}:${seconds}`);
      } else {
        setMorethan12(true);
        // If the difference is more than 12 hours, just display the start time
        const formattedStartTime = new Date(startTime).toLocaleString();
        setTimeRemaining(formattedStartTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className="">
      <h1 className="text-xl text-violet-950 font-semibold">{morethan12 ? "Contest will start At: " : "Contest will start In: "}</h1>
      <div className="flex gap-1 mx-auto">
        {morethan12 && <h1 className=" text-white bg-green-800 p-4 my-4 text-2xl">{timeRemaining?.split(',')[0]}</h1>}
        <h1 className=" text-white bg-green-800 p-4 my-4 text-2xl">{timeRemaining?.split(',')[1]?.split(':')[0]+" Hr"}</h1>
        <h1 className=" text-white bg-green-800 p-4 my-4 text-2xl">{timeRemaining?.split(',')[1]?.split(':')[1]+" Min"}</h1>
        <h1 className=" text-white bg-green-800 p-4 my-4 text-2xl">{timeRemaining?.split(',')[1]?.split(':')[2]+" Sec"}</h1>
      </div>
    </div>
  );
};

export default Countdown;
