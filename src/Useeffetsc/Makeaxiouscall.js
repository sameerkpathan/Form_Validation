import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Makeaxiouscall = () => {
  const [num, setNum] = useState(1);
  const [name, setName] = useState();
  const [move, setmove] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      console.log(response.data);
      const names = response.data.name;
      const moves = response.data.moves.length;
      setName(names);
      setmove(moves);
    };
    getData();
  }, [num]);
  return (
    <div>
      <h1>Make Axious Call</h1>
      <h1>
        You Choose these <span style={{ color: "red" }}>{num}</span> Value
      </h1>
      <h1>
        My Name is <span style={{ color: "red" }}>{name}</span>
      </h1>
      <h1>
        I have <span style={{ color: "red" }}>{move}</span>
      </h1>

      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value={1}> 1 </option>
        <option value={25}> 25 </option>
        <option value={3}> 3 </option>
        <option value={4}> 4 </option>
        <option value={5}> 5 </option>
      </select>
    </div>
  );
};

export default Makeaxiouscall;
