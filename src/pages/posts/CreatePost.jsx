import React from "react";
import { Create, SimpleForm } from "react-admin";

export default function CreatePost() {
  return (
    <Create title="Create a Post">
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="post" />
        <DateInput source="published_at" />
      </SimpleForm>
    </Create>
  );
}
