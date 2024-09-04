import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export default function createHSE() {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" label="Name" />
            </SimpleForm>
        </Create>
    );
}
