import React, { useState, useEffect } from "react"

export default function Project02() {
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(0);

  useEffect(()=>{
    switch(count){
      case 1:
        setWidth(0);
        break;
      case 2:
        setWidth(33.3333);
        break;
      case 3:
        setWidth(66.6667);
        break;
      case 4:
        setWidth(100);
        break;
    }
  },[count])

  return(
    <div className="flex flex-row justify-center items-center min-h-screen overflow-hidden m-0">
      <div className="text-center block">
        <div className="progress-container">
          <div className="progress" style={{width: `${width}%`}}></div>
          <div className="circle active">1</div>
          {
            count >= 2 ?
            <div className="circle active">2</div>
            :
            <div className="circle">2</div>
          }
          {
            count >= 3 ?
            <div className="circle active">3</div>
            :
            <div className="circle">3</div>
          }
          {
            count >= 4 ?
            <div className="circle active">4</div>
            :
            <div className="circle">4</div>
          }
        </div>
        {
          count === 1 ?
          <button className="text-white border-0 rounded-[6px] px-[30px] py-[8px] m-[5px] text-sm bg-[#e0e0e0]" disabled>Prev</button>
          :
          <button className="text-white border-0 rounded-[6px] px-[30px] py-[8px] m-[5px] text-sm bg-[#3498db]" onClick={()=>setCount(count-1)}>Prev</button>
        }
        {
          count === 4 ?
          <button className="text-white border-0 rounded-[6px] px-[30px] py-[8px] m-[5px] text-sm bg-[#e0e0e0]" disabled>Next</button>
          :
          <button className="text-white border-0 rounded-[6px] px-[30px] py-[8px] m-[5px] text-sm bg-[#3498db]" onClick={()=>setCount(count+1)}>Next</button>
        }
      </div>
      
      {/* <div className="text-center block">
        <div className="progress-container">
          <div className="progress" style={{ width: `${width}`}}></div>
          <div className="circle active">1</div>
          {
            count >= 2 ?
            <div className="circle active">2</div>
            :
            <div className="circle">2</div>
          }
           {
            count >= 3 ?
            <div className="circle active">3</div>
            :
            <div className="circle">3</div>
          }
           {
            count >= 4 ?
            <div className="circle active">4</div>
            :
            <div className="circle">4</div>
          }
        </div>
        {
          count === 1 ? 
          <button className="bg-[#e0e0e0] cursor-not-allowed rounded-md py-[8px] px-[30px] m-[5px] text-sm text-white" disabled>Prev</button>
          :
          <button className="bg-[#3498db] text-white border-0 rounded-md cursor-pointer py-[8px] px-[30px] m-[5px] text-sm" onClick={() => setCount(count-1)}>Prev</button>
        }
        {
          count === 4 ? 
          <button className="bg-[#e0e0e0] cursor-not-allowed rounded-md py-[8px] px-[30px] m-[5px] text-sm text-white" disabled>Next</button>
          :
          <button className="bg-[#3498db] text-white border-0 rounded-md cursor-pointer py-[8px] px-[30px] m-[5px] text-sm" onClick={() => setCount(count+1)}>Next</button>
        }
        
      </div> */}
    </div>
  )
}