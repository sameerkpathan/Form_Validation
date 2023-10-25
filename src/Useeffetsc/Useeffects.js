import { useEffect } from "react";
import { useState } from "react";

const Useeffecthook = () => {
  const [count, setcount] = useState(0);
  const [counts,setcounts]=useState(0);

  useEffect(() => {
    if (count>0)document.title= `React App ${count}`;
  },[count]);

  return (
    <div>
      <h1>UseEffects</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click Here
      </button>
      <button
        onClick={() => {
          setcounts(counts + 1);
        }}
      >
        Click Here{counts}
      </button>
    </div>
  );
};

export default Useeffecthook;
