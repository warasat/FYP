 /* eslint-disable no-unused-vars */
// // import React, { useEffect, useState } from "react";
// // import { doctors } from "../assets/assets";
// // import { useParams } from "react-router-dom";

// // const Appointment = () => {
// //   const docId = useParams();
// //   const [docInfo, setDocInfo] = useState(null);

// //   const fetchDocInfo = async () => {
// //     const docInfo = doctors.find((doc) => doc._id === docId);
// //     setDocInfo(docInfo);
// //   };

// //   useEffect(() => {
// //     fetchDocInfo();
// //   }, [doctors, docId]);

// //   return <div></div>;
// // };

// // export default Appointment;
// import React, { useEffect, useState } from "react";
// import { assets, doctors } from "../assets/assets";
// import { useParams } from "react-router-dom";

// const Appointment = () => {
//   const { docId } = useParams(); // Destructure docId from useParams
//   const daysOfWeek = ['sUN' , 'MON' , 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT']

//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots , setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime , seSlotTime] = useState('');

//   const getAvailableSlots = async () ={
//      setDocSlots([])
     
//     //  getting current date
//     let today = new Date()

//     for (let i=0; i < 7 ; i++){
//       //getting date with index
//       let currentDate = new Date(today)
//       currentDate.setDate(today.getDate()+i)

//       //setting end time of the date with index 
//       let endTime = new Date(today)
//       endTime.setDate(today.getDate()+i)
//       endTime.setHours(21,0,0,0)

//       //setting hours
//       if(today.getDate() === currentDate.getDate()){
//         currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() +1 : 10)
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
//       }
//       else {
//         currentDate.setHours(10)
//         currentDate.setMinutes(10)
//       }
//       let timeSlots = []
//       while(currentDate < endTime){
//         let formattedTime = currentDate.toLocalTimeString([],{hour: '2-digit', minute: '2-digit'}) 

//         //add slot to array
//         timeSlots.push({
//           datwTime: new Date (currentDate),
//           time: formattedTime
//         })

//         //increament current time by 30 minutes
//         currentDate.setMinutes(currentDate.getMinutes() + 30)
//       }
      
//       setDocSlots(prev => ([...prev, timeSlots]))

//     }
//   }

//   useEffect(() => {
//     const fetchDocInfo = () => {
//       const doctor = doctors.find((doc) => doc._id === docId);
//       setDocInfo(doctor);
//     };
//     fetchDocInfo();
//   }, [docId]); // Only re-run when docId changes

//   useEffect(() => {
//      getAvailableSlots();
//   }, [docInfo])

//   useEffect(() => {
//     console.log(docSlots)
//   }, [docSlots])

//   return (
//     <div>
//       {/* Render doctor's information */}
//       {docInfo ? (
//         <div className="flex flex-col sm:flex-row  gap-4">
//           <div>
//             <img
//               className="bg-blue-300 w-full sm:max-w-72 rounded-lg"
//               src={docInfo.image}
//               alt=""
//             />
//           </div>
//           <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
//             <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
//               {docInfo.name}
//               <img className="w-5" src={assets.verified_icon} alt="" />
//             </p>
//             <div className="flex  items-center  gap-2  text-sm mt-1  text-gray-600">
//               <p className="">
//                 {docInfo.degree}-{docInfo.speciality}
//               </p>
//               <button className="py-0.5 px-2 border text-xs rounded-full">
//                 {docInfo.experience}
//               </button>
//             </div>
//             {/* {Doctor About} */}

//             <div>
//               <p className="flex items-center gap-1 text-sm  font-medium  text-gary-900 mt-3  ">
//                 About <img src={assets.info_icon} alt="" />
//               </p>
//               <p className="text-sm text-gray-500 max-w-[700px] mt-1">
//                 {docInfo.about}
//               </p>
//             </div>
//             <p className="text-gray-500 font-medium mt-5">
//             Appointment fee: <span className="text-gray-600">${docInfo.fees}</span>
//             </p>
//           </div>

//           {/* Add more details as necessary */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}

//       {/* Booking Slots */}
//       <div className="sm:ml-72 sm:pl-4 mt-4  font-medium text-gray-700">
//         <p>Booking Slots</p>
//         <div>
//           {
//             docSlots.length && docSlots.map((item , index) => (
//               <div key={index}>
//                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
//                <p>{item[0] && item[0].dateTime.getDate()}</p>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Appointment;
import React, { useEffect, useState } from "react";
import { assets, doctors } from "../assets/assets";
import { useParams } from "react-router-dom";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams(); // Destructure docId from useParams
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState({});

  // Get available slots for the doctor
  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    let allSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
  };

  // Fetch doctor's information based on docId
  useEffect(() => {
    const fetchDocInfo = () => {
      const doctor = doctors.find((doc) => doc._id === docId);
      setDocInfo(doctor);
    };
    fetchDocInfo();
  }, [docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  // Update selected slot with both day and time
  const handleTimeSlotClick = (dayIndex, time) => {
    setSelectedSlot((prevState) => ({
      ...prevState,
      [dayIndex]: time, // Store the selected time for each day
    }));
  };

  return (
    <div>
      {/* Render doctor's information */}
      {docInfo ? (
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-blue-300 w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* Doctor About */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-5">
              Appointment fee:{" "}
              <span className="text-gray-600">${docInfo.fees}</span>
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Booking Slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        <div className="flex gap-6 items-center w-full overflow-x-auto mt-4 relative">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div
                onMouseEnter={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-[80px] rounded-full cursor-pointer ${
                  slotIndex === index ? "bg-primary text-white" : "border border-gray-200"
                }`}
                key={index}
              >
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))}
        </div>

        {/* Render Time Slots */}
        {docSlots.length > 0 && (
          <div className="flex gap-3 items-center w-full mt-4 overflow-x-auto">
            {docSlots[slotIndex].map((timeSlot, timeIndex) => (
              <p
                onClick={() => handleTimeSlotClick(slotIndex, timeSlot.time)} // Pass day index and time
                key={timeIndex}
                className={`text-xs font-medium py-1 px-3 cursor-pointer transition-all hover:bg-gray-200 ${
                  selectedSlot[slotIndex] === timeSlot.time ? "bg-primary text-white" : ""
                }`}
              >
                {timeSlot.time.toLowerCase()}
              </p>
            ))}
          </div>
        )}
        <button
          className="rounded-full bg-blue-800 py-3 px-4 text-white font-semibold my-6"
        >
          Book an Appointment
        </button>
      </div>

      {/* Related Doctors */}
      {docInfo && <RelatedDoctors docId={docId} speciality={docInfo.speciality} />}
    </div>
  );
};

export default Appointment;
