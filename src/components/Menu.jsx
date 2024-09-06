import { Menu } from "react-admin";
import LabelIcon from "@mui/icons-material/Label";
import Badge from "@mui/material/Badge";
import Submenu from "./Submenu";
import React from "react";

import ReceiptIcon from '@mui/icons-material/Receipt';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function MainMenu() {
  return (
    // <Menu
    //   sx={{
    //     marginTop: 0,
    //     "&.RaMenu-closed": {
    //       opacity: 0.8,
    //     },
    //   }}
    // >
    //   <Menu.DashboardItem>
    //     <Menu.ResourceItem name="Dashboard" />
    //     <Menu.ResourceItem name="posts" />
    //     <Menu.ResourceItem name="posters" />
    //     {/* <Menu.Item to="/menu" primaryText="Menu" leftIcon={<LabelIcon />} /> */}
    //     <Menu.Item
    //       to="/custom-route"
    //       primaryText="Miscellaneous"
    //       leftIcon={<LabelIcon />}
    //     />
    //   </Menu.DashboardItem>
    //   </Menu>

    <Menu>
      <Menu.DashboardItem />
      <Submenu text="Submenu 1" icon={<ReceiptIcon />}>
        <Menu.ResourceItem name="posts" />
        <Menu.ResourceItem name="comments" />
      </Submenu>
      <Submenu text="Submenu 2" icon={<CreditCardIcon />}>
        <Menu.ResourceItem name="users" />
        <Menu.Item
          to="/custom-route"
          primaryText="Miscellaneous"
          leftIcon={<LabelIcon />}
        />
      </Submenu>
    </Menu>
  );
}
