import { useState } from 'react';
import Accordion from './AccordionComponent';
import './App.css';

function App() {
  const dummyData=[
    {'stage':'What is ReactJS?','subStage':'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.'},
    {'stage':'What are SmallCases?','subStage':'smallcases are modern investment products that help you build a low-cost, long-term & diversified portfolio easily. Created by professionals, each smallcase is a ready-made basket of stocks/ETFs that reflects a theme, strategy or objective. '},
    {'stage':'Fees and Taxes','subStage':`The charges for investing in smallcases are as per the broker’s guidelines and only apply when you transact.Visit the help page on your broker platform for more information.
For smallcases of stocks, the taxes are the same as equities - Long-Term Capital Gains (> 1 year of holding) are 10% of the total gains (if gains for the year exceed ₹1 lakh) and Short-Term Capital Gains (< 1 year of holding) are 15% of the total gains.
For ETF smallcases, each ETF has its own taxation. Check the smallcase FAQs on your broker platform for a breakdown of the ETF taxes.`},
    {'stage':'Orders and History','subStage':'Order history is a list of all the orders you’ve received from customers in the past. It includes the specific items they purchased and how much each costs, along with information about the customer and when they bought the products.'},
    {'stage':'About Development','subStage':'Development is the process of growth, or changing from one condition to another. In economics, development is change from a traditional economy to one based on technology. A traditional economy usually centers on individual survival.'}
  ]
  const[accordionOption,setAccordionOption]=useState('One open at a time');
  return (
    <div className="App">
        <div style={{height:"11%",textAlign:"center", fontFamily:"sans-serif",fontSize:"20px"}}>Select the Accordion Style :<br/>
         <select onChange={(e)=>{setAccordionOption(e.target.value)}}>
          <option>One open at a time</option>
          <option>All open accordion</option>
          <option>Multiple Open</option>
         </select>
        </div>
        <div style={{height:"89%"}}>
        <Accordion dummyData={dummyData} selectedOption={accordionOption}/>
        </div>
    </div>
  );
}

export default App;
