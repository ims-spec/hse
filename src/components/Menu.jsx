import { Menu } from "react-admin";
// import Badge from "@mui/material/Badge";
import Submenu from "./Submenu";
import React from "react";

import ReceiptIcon from "@mui/icons-material/Receipt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Divider from '@mui/material/Divider';
import GroupsIcon from '@mui/icons-material/Groups';

export default function MainMenu() {
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
      <Submenu text="Группы" icon={<GroupsIcon />}>
        <Menu.ResourceItem name="groups" />
      </Submenu>
    </Menu>
  );
}
