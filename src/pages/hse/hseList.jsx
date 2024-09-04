

import { Datagrid, List, TextField } from 'react-admin'


export default function HseList() {
  return (
    <List>
      {/* <Datagrid rowClick="edit"> */}
      <Datagrid >
        <TextField name="id" label="ID" />
        <TextField name="name" label="Name" />
      </Datagrid>
    </List>
  )
}
