import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export default function CreateGroup() {
  return (
    <Create title="Создать группу">
      <SimpleForm>
        {/* <TextInput source="id" /> */}
        <TextInput source="group_name" />
        <DateInput source="published_at" value={new Date()} />
      </SimpleForm>
    </Create>
  );
}
