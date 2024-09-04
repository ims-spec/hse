
import React from 'react'
import { List, Datagrid, TextField, DateField } from 'react-admin'
import MyList from './MyList'

export default function PostList() {
  return (
      <MyList title="Post list">
          <Datagrid>
              {/* <TextField source="id" />
              <TextField source="post"/>
              <DateField source="published_at"/>               */}



        </Datagrid>
      </MyList>
  )
}
