import { List, Datagrid, TextField, BooleanField, DateField } from 'react-admin';

export const TodoList = () => (
    <List>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField source="content" />
            <BooleanField source="completed" />
            {/* <DateField source="__v" /> */}
        </Datagrid>
    </List>
);