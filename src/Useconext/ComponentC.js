import { useContext } from "react";
import { FirstName } from "./ComponentA";


const ComponentC = ()=>{
    // return(
    //     <>
    //         <FirstName.Consumer>       
    //             {
    //                 (value)=>{
    //                  return(
    //                     <>
    //                     <h1>Hello Guy's My Name is {value} </h1>
    //                     </>
    //                  )
    //                 }
    //             }
    //         </FirstName.Consumer>
    //         {/* <h1>Comp C</h1>
    //     <h1>{Name}</h1> */}
    //     </>
    // );
   
    const fName = useContext(FirstName);
    console.log(fName);
    return(
        <>
        <h1>Hi Guy's My Name is {fName}</h1>
        </>
    )
};

export default ComponentC;