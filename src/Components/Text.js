function Text() {
  const text = "one\ntwo\nthree";
  const arr = text.split("\n");
  return (
    <div>
     { arr.map((ele,ind)=><p key={ind}>ele</p>)}
    </div>
  );
}

export default Text;
