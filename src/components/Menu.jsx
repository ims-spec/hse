import React, { useEffect, useMemo, useState } from "react";
import { Menu, useDataProvider } from "react-admin";
import Submenu from "./Submenu";

import ReceiptIcon from "@mui/icons-material/Receipt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Divider from "@mui/material/Divider";
import { supabaseClient } from "../providers/supabase";

export default function MainMenu() {
  const [tableNamesData, setTableNamesData] = useState();
  const dataProvider = useDataProvider();
  
  
  useEffect(() => {
    dataProvider
     .getMany("tables_name", {
        pagination: { page: 1, perPage: 10 },
        sort: { field: "id", order: "ASC" },
      })
     .then((responce) => {
        console.log(responce.data[0].table_names);
       setTableNamesData(responce.data);
       console.log("tableNamesData",tableNamesData);
       console.log("responce.data", responce.data);
      })
     .catch((error) => {
        console.log(error);
      });
  }, []);
  




  return (
    <Menu>
      <Menu.DashboardItem />
      <Submenu text="Examples" icon={<ReceiptIcon />}>
        <Menu.ResourceItem name="posts" />
        <Menu.ResourceItem name="posters" />
      </Submenu>
      <Submenu text="Админка" icon={<CreditCardIcon />}>
        <Menu.ResourceItem name="groups" />
      </Submenu>
      <Divider />
      <Submenu text="tables_name">
        {/* {tableNamesData.map((item) => { 
          return (
            <Menu.ResourceItem
              key={item.id}
              name={item.table_names} />
          )
        })} */}
      </Submenu>
    </Menu>
  );
}
