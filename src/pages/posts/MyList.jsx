import { ListBase, Title, ListToolbar, Pagination } from "react-admin";
import { Card } from "@mui/material";

const MyList = ({ children, actions, filters, title, ...props }) => {
  return (
    <ListBase {...props}>
      <Title title={title} />
      <ListToolbar filters={filters} actions={actions} />
      <Card>{children}</Card>
      <Pagination />
    </ListBase>
  );
};

export default MyList;
