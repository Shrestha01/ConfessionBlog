import React, { useEffect } from "react";
import { db, ref, set, onValue } from "./Firebase/firebaseConfig";
import { useState } from "react";

const ConfessionList = () => {
  const [confession, setConfession] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "confessions");

    onValue(usersRef, (snapShot) => {
      let confessionL = [];
      let data = snapShot.val();
      for (let key in data) {
        confessionL.push(data[key]);
      }
      setConfession(confessionL);
    });
  }, []);
  return (
    <div>
      <h1 className="text-center text-white">Confession</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-h-screen overflow-auto px-4">
        {confession.map((val, key) => {
          return (
            <div className=" border-4 rounded p-2 h-72  " key={key}>
              <div className=" text-white w-full break-words overflow-auto">
                {val.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConfessionList;
