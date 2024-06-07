import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MosqueCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="imamName" source="imamName" />
        <div />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
