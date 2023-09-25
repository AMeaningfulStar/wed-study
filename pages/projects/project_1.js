import React, { useState } from "react"

export default function Project01 () {
  const [panel, setPanel] = useState('1');

  return(
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[90vw] min-h-screen flex items-center">
        { panel === '1' ?
          <div className="element_1 relative bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')]">
            <h3 className="absolute moveText text-white text-2xl left-[20px] bottom-[20px]">Explore The World</h3>
          </div>
        :
          <div className="element_2 bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')]" onClick={() => setPanel('1')}></div>
        }
        { panel === '2' ?
          <div className="element_1 relative bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')]">
            <h3 className="absolute moveText text-white text-2xl left-[20px] bottom-[20px]">Wild Forest</h3>
          </div>
        :
          <div className="element_2 bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')]" onClick={() => setPanel('2')}></div>
        }
        { panel === '3' ? 
          <div className="element_1 relative bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')]">
            <h3 className="absolute moveText text-white text-2xl left-[20px] bottom-[20px]">Sunny Beach</h3>
          </div>
        : 
          <div className="element_2 bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')]" onClick={() => setPanel('3')}></div>
        }
        { panel === '4' ?
          <div className="element_1 relative bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')]">
            <h3 className="absolute moveText text-white text-2xl left-[20px] bottom-[20px]">City on Winter</h3>
          </div>
        :
          <div className="element_2 bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')]" onClick={() => setPanel('4')}></div>
        }
        { panel === '5' ?
          <div className="element_1 relative bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')]">
            <h3 className="absolute moveText text-white text-2xl left-[20px] bottom-[20px]">Mountains - Clouds</h3>
          </div>
        :
          <div className="element_2 bg-center m-[10px] h-[80vh] rounded-[50px] bg-[url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')]" onClick={() => setPanel('5')}></div>
        }
      </div>
    </div>
  )
}