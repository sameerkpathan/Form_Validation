import { createContext } from "react";
// import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";


const FirstName = createContext();

const ComponentA = ()=>{


    return(
        <div>
          <FirstName.Provider value={"Sameer"}>
         <ComponentC/>
          </FirstName.Provider>
          {/* <h1>Comp A</h1>
          <ComponentB Name="Context Data"/> */}
        </div>
    );
};

export default ComponentA;

export { FirstName };