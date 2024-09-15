import React from "react";
import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";
import grid5 from "../assets/grid5.jpg";
import grid6 from "../assets/grid6.jpg";
import grid7 from "../assets/grid7.jpg";
import grid8 from "../assets/grid8.jpg";

function GridSeller() {
  return (
    <div>
      <h2>Best Seller</h2>
      <p>
        Shop the Latest Styles: Stay ahead of the curve with our newest arrivals
      </p>
     <div className="grid grid-cols-4 gap-4">
      {/* card 1 */}
      <div>
        <div>
          <img src={grid1} alt="grid1" />
        </div>
        <div>
          <p>Ribbed Tank Top</p>
          <p>$16.95</p>
          <div className="flex gap-2">
            <span className="bg-yellow-400 rounded-full p-2 border"></span>
            <span className="bg-black rounded-full p-2 border"></span>
            <span className="bg-white rounded-full p-2 border"></span>
          </div> 
     
        </div>
      </div>

      {/* card 2 */}
      <div>
        <div>
          <img src={grid2} alt="grid1" />
        </div>
        <div>
          <p>Ribbed Tank Top</p>
          <p>$16.95</p>
          <div className="flex gap-2">
            <span className="bg-yellow-800 rounded-full p-2 border"></span>
            <span className="bg-purple-700 rounded-full p-2 border"></span>
            <span className="bg-green-200 rounded-full p-2 border"></span>
          </div> 
     
        </div>
      </div>

       {/* card 3 */}
       <div>
        <div>
          <img src={grid3} alt="grid1" />
        </div>
        <div>
          <p>Ribbed Tank Top</p>
          <p>$16.95</p>
          <div className="flex gap-2">
            
          </div> 
     
        </div>
      </div>

       {/* card 4 */}
       <div>
        <div>
          <img src={grid4} alt="grid1" />
        </div>
        <div>
          <p>Ribbed Tank Top</p>
          <p>$16.95</p>
          <div className="flex gap-2">
          <span className="bg-white rounded-full p-2 border"></span>
            <span className="bg-purple-700 rounded-full p-2 border"></span>
            <span className="bg-black rounded-full p-2 border"></span>
          </div> 
     
        </div>
      </div>

       {/* card 5 */}
       <div>
        <div>
          <img src={grid5} alt="grid1" />
        </div>
        <div>
          <p>Ribbed Tank Top</p>
          <p>$16.95</p>
          <div className="flex gap-2">
            <span className="bg-yellow-400 rounded-full p-2 border"></span>
            <span className="bg-black rounded-full p-2 border"></span>
            <span className="bg-white rounded-full p-2 border"></span>
          </div> 
     
        </div>
      </div>

       {/* card 6 */}
       <div>
        <div>
          <img src={grid6} alt="grid1" />
        </div>
        <div>
          <p>Ribbed Tank Top</p>
          <p>$16.95</p>
          <div className="flex gap-2">
            <span className="bg-yellow-400 rounded-full p-2 border"></span>
            <span className="bg-black rounded-full p-2 border"></span>
            <span className="bg-white rounded-full p-2 border"></span>
          </div> 
     
        </div>
      </div>

       {/* card 7 */}
       <div>
        <div>
          <img src={grid7} alt="grid1" />
        </div>
        <div>
          <p>Ribbed Tank Top</p>
          <p>$16.95</p>
          <div className="flex gap-2">
            <span className="bg-yellow-400 rounded-full p-2 border"></span>
            <span className="bg-black rounded-full p-2 border"></span>
            <span className="bg-white rounded-full p-2 border"></span>
          </div> 
     
        </div>
      </div>

       {/* card 8 */}
       <div>
        <div>
          <img src={grid8} alt="grid1" />
        </div>
        <div>
          <p>Ribbed Tank Top</p>
          <p>$16.95</p>
          <div className="flex gap-2">
            <span className="bg-yellow-400 rounded-full p-2 border"></span>
            <span className="bg-black rounded-full p-2 border"></span>
            <span className="bg-white rounded-full p-2 border"></span>
          </div> 
     
        </div>
      </div>

     </div>
    </div>
  );
}

export default GridSeller;
