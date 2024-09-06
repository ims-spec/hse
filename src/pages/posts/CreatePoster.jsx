import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export default function CreatePoster() {
  return (
    <Create title="Create a Poster">
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="poster" />
        <DateInput source="published_at" />
      </SimpleForm>
    </Create>
  );
}
