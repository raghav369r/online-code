import { useState } from "react";
import { Link } from "react-router-dom";

function Join() {
  const [url, setUrl] = useState("");
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="bg-white shadow-xl flex flex-col min-w-[400px] p-4">
        <input
          className="m-4 p-2 bg-slate-600"
          placeholder="Enter Contest id to Join"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Link className="" to={url}>
          <button className="bg-green-900 p-2 m-4 w-11/12 text-white">Join</button>
        </Link>
      </form>
    </div>
  );
}

export default Join;
