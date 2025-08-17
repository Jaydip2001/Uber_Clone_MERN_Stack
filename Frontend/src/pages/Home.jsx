import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../components/LocationSearchPanel.jsx";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)
  const [vehiclepanel, setvehiclepanel] = useState('')
  
  const vehiclepanelRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current, {
        rotate: 0,
        duration: 0.5,
        ease: "power2.out",

      });
  

    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(panelCloseRef.current, {
        rotate: 180,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [panelOpen]);

  useGSAP(function() {
  if (vehiclepanel) {
    gsap.to(vehiclepanelRef.current,{
transform: "translateY(0)",
    })
  }else{
    gsap.to(vehiclepanelRef.current,{
      transform: "translateY(100%)",
    })
  }
  }, [vehiclepanel]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
        alt=""
      />
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://blog.olacabs.com/wp-content/uploads/2024/07/image3-473x1024.png"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
         <h5 ref={panelCloseRef} onClick={()=>{
          setPanelOpen(!panelOpen);
         }} className=" absolute right-6 top-6 text-2xl"><i className="ri-arrow-down-wide-line"></i></h5> 
          <h4 className="text-2xl font-semibold">Find A Trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[42%] left-10 bg-gray-500 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-b-lg w-full mt-5"
              type="text"
              placeholder="Add pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-b-lg w-full mt-2"
              type="text"
              placeholder="Add pick-up destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel vehiclepanel={vehiclepanel} setvehiclepanel={setvehiclepanel}/>
        </div>
      </div>
<div ref={vehiclepanelRef} className="fixed z-10 bottom-0 translate-y-full left-0 w-full bg-white p-4 shadow-2xl rounded-t-2xl">
  <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
  
  {/* Container for multiple rides */}
<div className="space-y-3 max-h-60 overflow-y-auto">
  {/* Ride Card */}
  <div className="flex  border-2  active:border-black bg-gray-100 rounded-xl  items-center justify-between p-2">
    <img
      className="h-16 w-16 object-contain"
      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
      alt="Uber Car"
    />
    <div className="ml-3 flex-1">
      <h4 className="text-lg font-semibold flex items-center">
        UberGo <span className="ml-1 text-gray-600"><i className="ri-user-3-fill">4</i></span>
      </h4>
      <h5 className="text-sm text-green-600 font-medium">3 min away</h5>
      <p className="text-xs text-gray-500">Affordable rides</p>
    </div>
    <h2 className="text-xl font-bold text-gray-800">₹150</h2>
  </div>

  {/* Another Ride Card */}
  <div className="flex  border-2  active:border-black bg-gray-100 rounded-xl  items-center justify-between p-2">
    <img
      className="h-16 w-16 object-contain"
      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
      alt="Uber Car"
    />
    <div className="ml-3 flex-1">
      <h4 className="text-lg font-semibold flex items-center">
        UberXL <span className="ml-1 text-gray-600"><i className="ri-user-3-fill">6</i></span>
      </h4>
      <h5 className="text-sm text-green-600 font-medium">5 min away</h5>
      <p className="text-xs text-gray-500">Spacious rides</p>
    </div>
    <h2 className="text-xl font-bold text-gray-800">₹250</h2>
  </div>

  {/* Add more rides here */}
</div>

</div>

    </div>
  );
}

export default Home;
