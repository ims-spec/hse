import React, { useState, useEffect, useMemo, useCallback } from "react";
import { supabaseClient } from "../../providers/supabase";

export default function Dashboard() {
  const [tableNamesData, setTableNamesData] = useState([]);
  const [list, setList] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const { data } = await supabaseClient.from("tables").select("*");
  //       tableNamesData.push(data); // --> Рабочий вариант
  //       // setTableNamesData((prev)=>prev.push(data)) // --> Рабочий вариант
  //       console.log("tableNamesData", tableNamesData[0]);
  //       console.log("tableNamesData", tableNamesData[0][1]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const fetch = useCallback(async () => {
    try {
      const { data } = await supabaseClient.from("tables").select("*");
      tableNamesData.push(data); // --> Рабочий вариант
      // setTableNamesData((prev)=>prev.push(data)) // --> Рабочий вариант
      console.log("tableNamesData", tableNamesData[0]);
      console.log("tableNamesData", tableNamesData[0][1]);
    } catch (error) {
      console.log(error);
    }
  }, [tableNamesData]);

  useEffect(() => { 
    fetch();
  }, [fetch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {tableNamesData[0].map(item => <li key={item.id}> {item.title} </li> )}
      </ul>
    </div>
  );
}
