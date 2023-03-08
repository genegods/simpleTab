import React, { useState } from "react";
import { TabsData } from "../data/TabsData";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  }

  


  return (
    <React.Fragment>
      <main>
        <div className="mx-5 mt-20 md:w-5/12 md:mx-auto">
          {/* tabs header section */}
          <div className=" h-20 bg-green-400 grid grid-cols-4 place-content-center">
            {TabsData.map((item, index) => {
              return (
                <div key={index}>
                  <div 
                  onClick={() =>handleClick(index)}
                  className={`border border-b-0 h-20 centered ${activeTab === index? 'bg-white':''}`}>
                    <p className="text-2xl capitalize">{item.title}</p>
                  </div>

              
                </div>
              );
            })}
          </div>

              {/* content section */}
              <div className='px-3 w-full h-80 bg-white centered'>
               
               
               <p className='text-5xl'>{TabsData[activeTab].content}</p>
               
              </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
