import React, { useEffect } from "react";
import {
  db,
  ref,
  onValue,
  query,
  orderByChild,
  equalTo,
  get,
  remove,
} from "./Firebase/firebaseConfig";
import { useState } from "react";
import { monthList } from "./config/month";

import { ToastContainer, toast } from "react-toast";

const ConfessionList = () => {
  const [confession, setConfession] = useState([]);

  const handleCLick = async (uID) => {
    //console.log(createdAt);
    const confessionsRef = ref(db, "confessions");

    const nameQuery = query(confessionsRef, orderByChild("uID"), equalTo(uID)); // Query to find records where createAt matches from button clicked

    try {
      const snapshot = await get(nameQuery);
      console.log("from query", snapshot.val());
      if (snapshot.exists()) {
        //console.log("Matching Data:", snapshot.val()); // Logs the retrieved data

        snapshot.forEach((childSnapshot) => {
          const confessionKey = childSnapshot.key; // Get unique key
          // console.log("from forEeach", childSnapshot.val());
          const confessionToDelete = ref(db, `confessions/${confessionKey}`); // Path to delete

          remove(confessionToDelete)
            .then(() => toast.success(`Confession Deletion Successful`))
            .catch((error) => toast.error("Confession Deletion Successful"));
        });
      } else {
        toast.error("No confessions found with the name 'adarsha'.");
      }
    } catch (error) {
      toast.error("Error fetching data:");
    }
  };
  // useEffect to Fetch all the data from database to show in dashboard
  useEffect(() => {
    const usersRef = ref(db, "confessions");

    onValue(usersRef, (snapShot) => {
      let confessionL = []; // new list to store confession list in array

      let data = snapShot.val();
      for (let key in data) {
        confessionL.push(data[key]);
      }

      setConfession(confessionL); // setting confession on array
    });
  }, []);

  return (
    <div>
      <h1 className="text-center text-white text-xl">Confession</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-h-screen overflow-auto px-4">
        {confession.map((val, key) => {
          // let date = new Date(val.createdAt());

          let date = new Date(val.createdAt);

          return (
            <div
              className=" border-2 rounded-xl p-2 h-72 overflow-auto  "
              key={key}
            >
              <div className=" text-white w-full break-words overflow-auto p-4">
                <div className="">
                  <h1 className="text-center text-xl">{`${date.getFullYear()} ${
                    monthList[date.getMonth()]
                  } ${date.getDate()}`}</h1>
                  <p>{val.text}</p>
                </div>
                <div className=" border-2">
                  <h2 className="text-center">{val.name}</h2>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleCLick(val.uID)}
                  className="border-2 rounded-xl px-4 py-2 text-white hover:text-black transition-transform duration-300 hover:scale-110 "
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer delay={2500} />
    </div>
  );
};

export default ConfessionList;
