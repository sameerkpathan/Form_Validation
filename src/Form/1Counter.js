import { useState } from "react";
import OneCounterData from "../OneCounterData.json";

const Counter = () => {
  let [count, setcount] = useState(0);
  let [Data, setData] = useState(OneCounterData);
  console.log(OneCounterData);

  function handleClick() {
    setcount((count) => count + 1);
  }

  function handleclickdec() {
    if (count > 0) {
      setcount((count) => count - 1);
    }
  }
  let handleRemove =(ItemId)=>{
    setData(Data.filter((Item)=>(

        Item.id !== ItemId
        )
    ));

  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleClick}>Inc</button>
      <h1>{count}</h1>
      <button onClick={handleclickdec}>Dec</button>
      <button onClick={() => setcount((count = 0))}>Clear</button>
      <ul>
        {Data.map((elm) => (<>
          <li key={elm.id}>{elm.name}</li>
          <button  onClick={()=>handleRemove(elm.id)}>
           Remove
          </button>
        </>
        ))}
      </ul>
      <button onClick={() => setData([])}>Clear Data</button>
    </div>
  );
};

export default Counter;
