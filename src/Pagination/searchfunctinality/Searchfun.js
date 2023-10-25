import "../pages.css";
import Data from "../Page.json";
import { useEffect, useState } from "react";

const Searchfun = () => {

    const[ipData,setIpData]= useState(Data);

    const[SearchData,setSearchdata]=useState();

  const handleSearch =(event)=>{
       setSearchdata(event.target.value);
       if(event.target.value === ''){
        setIpData(Data)
       }else{
        const updatedData =  Data?.filter((val)=>{
          return val?.name?.toLowerCase()?.includes(event.target.value?.toLowerCase())
          
       })
        setIpData(updatedData)
       }
      
       console.log(SearchData)       
  };


   
  return (
    <div>
        <div>
      <h1>Pagination</h1>
     <input type="text"  onChange={handleSearch} value={SearchData} placeholder="Please Search Here...!"  />
   
        </div>
     <div>
        <div className="Capsulecards">
          {ipData?.map((element) => {
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

      </div>
    </div>
  );
};

export default Searchfun;
