// import React from 'react'

// const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

//     const handleSuggestionClick = (suggestion) => {
//         if (activeField === 'pickup') {
//             setPickup(suggestion)
//         } else if (activeField === 'destination') {
//             setDestination(suggestion)
//         }
//         // setVehiclePanel(true)
//         // setPanelOpen(false)
//     }

//     return (
//         <div>
//             {/* Display fetched suggestions */}
//             {
//                 suggestions.map((elem, idx) => (
//                     <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//                         <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
//                         <h4 className='font-medium'>{elem}</h4>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default LocationSearchPanel


import React from 'react'

const LocationSearchPanel=(props) =>{
    console.log(props)
    const Locations = [
        "07, xxx,xxxxxxx, 38xx10, india",
        "07, xxx,xxxxxxx, 38xx10, india",
        "07, xxx,xxxxxxx, 38xx10, india",
        "07, xxx,xxxxxxx, 38xx10, india"
    ]

  return (

      <div className="gap-5 flex  flex-col">
       {
           Locations.map(function(elem, idx){
               return (
                   <div key={idx} onClick={()=>{
                    props.setvehiclePanelOpen(true)
                    props.setPanelOpen(false)

                   }} className="flex items-center border-gray-100 border-2  active:border-black rounded-xl p-3 justify-start pl-5">
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full '><i className="ri-map-pin-fill"></i></h2>
        <h4 className='  ml-2'>{elem}</h4>
    </div>
               )
           })
       }
        </div>
  )
}

export default LocationSearchPanel
