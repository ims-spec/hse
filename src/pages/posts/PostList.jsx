
import React from 'react'
import { List, Datagrid, TextField, DateField } from 'react-admin'

export default function PostList() {
  return (
      <List>
          <Datagrid>
              <TextField source="id" />
              <TextField source="post"/>
              <DateField source="published_at"/>
              
        </Datagrid>
      </List>
  )
}
