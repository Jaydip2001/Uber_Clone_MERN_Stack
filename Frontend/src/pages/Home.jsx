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
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState('')
  
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
  if (vehiclePanelOpen) {
    gsap.to(vehiclepanelRef.current,{
transform: "translateY(0)",
    })
  }else{
    gsap.to(vehiclepanelRef.current,{
      transform: "translateY(100%)",
    })
  }
  }, [vehiclePanelOpen]);

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
          <LocationSearchPanel  setPanelOpen={setPanelOpen}  setvehiclepanel={setvehiclePanelOpen}/>
        </div>
      </div>
      <div ref={vehiclepanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
        <VehiclePanel setVehiclePanel={setvehiclePanelOpen}  />
        </div> 
    </div>

  );
}

export default Home;
