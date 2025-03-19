import { List, Datagrid, TextField, BooleanField} from 'react-admin';

export const TodoList = () => (
    <List pagination={false} exporter={false}>
        <Datagrid>
            {/* <ReferenceField source="id" reference="todo" /> */}
            <TextField source="content" />
            <BooleanField source="completed" />
            {/* <DateField source="__v" /> */}
        </Datagrid>
    </List>
);