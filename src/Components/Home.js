import Header from "./Header";
function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-2xl p-2">welcome to codee</h1>
          <h2 className="text-xl p-2">
            Come, Code, Practice, Participate, Play
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
