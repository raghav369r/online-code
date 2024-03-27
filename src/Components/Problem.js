const Problem = () => {
  return (
    <div className="h-[92vh] border rounded-xl mb-0 pb-0 bg-white">
      <div className="font-semibold flex border-b gap-5 h-[7%] ">
        <a className="ml-2 border-b border-black mt-auto">Question</a>
        <a className="mt-auto">Solution</a>
        <a className="mt-auto">Submissions</a>
      </div>
      <div className="p-4 overflow-y-scroll h-[93%]">
        <h1 className="text-2xl mb-4 font-semibold">
          2402.Meeting-rooms-iii
        </h1>
        <p>
          You are given an integer n. There are n rooms numbered from 0 to n -
          1. You are given a 2D integer array meetings where meetings[i] =
          [starti, endi] means that a meeting will be held during the
          half-closed time interval [starti, endi). All the values of starti are
          unique. Meetings are allocated to rooms in the following manner:
        </p>
        <p>
          1. Each meeting will take place in the unused room with the lowest
          number.
        </p>
        <p>
          2. If there are no available rooms, the meeting will be delayed until
          a room becomes free. The delayed meeting should have the same duration
          as the original meeting.
        </p>
        <p>
          3. When a room becomes unused, meetings that have an earlier original
          start time should be given the room.
        </p>
        <p>
          Return the number of the room that held the most meetings. If there
          are multiple rooms, return the room with the lowest number. A
          half-closed interval [a, b) is the interval between a and b including
          a and not including b.
        </p>
      </div>
    </div>
  );
};

export default Problem;
