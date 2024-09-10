import React, { useEffect, useMemo, useState } from "react";
import { Menu, useDataProvider } from "react-admin";
import Submenu from "./Submenu";

import ReceiptIcon from "@mui/icons-material/Receipt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Divider from "@mui/material/Divider";

export default function MainMenu() {
  

  return (
    <Menu>
      <Menu.DashboardItem />
      <Submenu text="Examples" icon={<ReceiptIcon />}>
        <Menu.ResourceItem name="posts" />
        <Menu.ResourceItem name="posters" />
        <Menu.ResourceItem name="hse" />
        <Menu.ResourceItem name="company_goals" />
        <Menu.ResourceItem name="employees" />
      </Submenu>
      <Submenu text="Админка" icon={<CreditCardIcon />}>
        <Menu.ResourceItem name="groups" />
      </Submenu>
      
      <Divider />
      
      
    </Menu>
  );
}
