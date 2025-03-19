import Button from '@mui/material/Button';
import { useNotify, useRedirect, TopToolbar, Create, SimpleForm, TextInput } from 'react-admin';

const TodoCreateActions = () => (
    <TopToolbar>
        {/* Add your custom actions */}
        <Button color="primary" onClick={customAction}>Custom Action</Button>
    </TopToolbar>
);

export const ToDoCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    
    const onSuccess = () => {
        notify(`New task added!`);
        redirect('/todo');
    };

    return (
        <Create actions={<TodoCreateActions />} mutationOptions={{ onSuccess }}>
            <SimpleForm>
                <TextInput source="content" multiline={true} label="What is your plan?"/>
                {/* input initially renders with value 123 (form > input) */}
            </SimpleForm>
        </Create>
    );
};

function customAction(): void {
    console.log('Function not implemented.');
}
