import { Edit, SimpleForm, TextInput, BooleanInput } from "react-admin";

export const TodoEdit = () => (
<Edit>
    <SimpleForm>
        <TextInput source="content" />
        <BooleanInput source="completed" />
    </SimpleForm>
</Edit>);