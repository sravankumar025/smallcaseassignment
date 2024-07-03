import React, { useEffect, useState } from "react";
import "./AccordionComponent.css";
import plusicon from "./plusicon.svg";
import minusicon from "./minusicon.svg";
const Accordion=({dummyData,selectedOption})=>{
    const[accordionData,setAccordionData]=useState(dummyData);
    const[accordionOpen,setAccordionOpen]=useState([]);
    
    useEffect(()=>{
        setAccordionOpen([]);
    },[selectedOption])
      const handleToggle = (index) => {
        if (selectedOption === "All open accordion") {
          return;
        }
    
        if (selectedOption === "One open at a time") {
          setAccordionOpen(accordionOpen[0] === index ? [] : [index]);
        }
    
        if (selectedOption === "Multiple Open") {
          setAccordionOpen(accordionOpen.includes(index)
            ? accordionOpen.filter((i) => i !== index)
            : [...accordionOpen, index]);
        }
      };
    
    console.log(selectedOption,accordionOpen);
    return(
        <div className="accordion">
           <div className="accordion_1">
           {accordionData.map((e, index) => {
          const isAccordionOpen = selectedOption === "All open accordion" || accordionOpen.includes(index);
          return (
            <div key={index}>
             <div className="accordion_parent" onClick={() => handleToggle(index)}> <li>{e.stage}</li> 
             {isAccordionOpen?<img src={minusicon}/>:<img src={plusicon}/>
}
             </div>
             {isAccordionOpen?
              <div className={`accordion-content ${isAccordionOpen ? "open" : ""}`}>
              {e.subStage}<br/>
            </div>:<></>}
            </div>
          );
        })}
           </div>
        </div>
    )
}
export default Accordion;