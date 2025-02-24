import React, { useEffect } from "react";
import { db, ref, set, onValue } from "./Firebase/firebaseConfig";
import { useState } from "react";
import { monthList } from "./config/month";

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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConfessionList;
