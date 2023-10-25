import "./pages.css";
import Data from "./Page.json";
import { useState } from "react";

const Pagination = () => {

  //pagination 

  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(6);

  const lastpostIndex = currentpage * postperpage;
  const firstpostIndex = lastpostIndex - postperpage;

  const currentpost = Data.slice(firstpostIndex, lastpostIndex);

  let pages = [];
  for (let i = 1; i <= Math.ceil(Data.length / postperpage); i++) {
    pages.push(i);
  }

  
  console.log(pages);
  return (
    <div>
      <h1>Pagination</h1>
     <div>
        <div className="Capsulecards">
          {currentpost.map((element, index) => {
            return (
              <div key={element.id} className="capsuleInfo">
                <div className="fcol">
                  <h3>No:{element.id}</h3>
                  <p>Reentered after three weeks in orbit</p>
                </div>

                <div className="scol">
                  <p>
                    <em className="subheading">Mission Name:</em> COTS1
                  </p>
                  <p>
                    <em className="subheading">Mission Flight:</em> Flight 8
                  </p>
                  <p>
                    <em className="subheading">Mission Slot:</em> 2010-12-08
                  </p>
                </div>

                <div className="tcol">
                  <p>
                    <em className="subheading">type:</em> Dreagon1.0
                  </p>
                  <p>
                    <em className="subheading">Landing:</em> 1{" "}
                  </p>
                  <p>
                    <em className="subheading">Mission Time:</em> T15:43:00.000Z
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {pages.map((pagenumber,index)=>{
            return(
                <button className={pagenumber === currentpage ? "active" : "buttons"} key={index} onClick={()=>setCurrentpage(pagenumber)} >
                     {pagenumber}
                    </button>
            )
        })}
      </div>
    </div>
  );
};

export default Pagination;
