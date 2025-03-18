import Button from '@mui/material/Button';
import { TopToolbar, Create, SimpleForm, TextInput } from 'react-admin';

const TodoCreateActions = () => (
    <TopToolbar>
        {/* Add your custom actions */}
        <Button color="primary" onClick={customAction}>Custom Action</Button>
    </TopToolbar>
);

export const todoCreate = () => (
    <Create actions={<TodoCreateActions />}>
        <SimpleForm>
            <TextInput source="content" multiline={true} label="What's up today?"/>
            {/* input initially renders with value 123 (form > input) */}
        </SimpleForm>
    </Create>
);

function customAction(): void {
    console.log('Function not implemented.');
}
