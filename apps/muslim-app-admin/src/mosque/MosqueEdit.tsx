import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MosqueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="imamName" source="imamName" />
        <div />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
