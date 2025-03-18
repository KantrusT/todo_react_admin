import { Admin, Resource } from 'react-admin';
import { Layout } from "./Layout";
import { TodoList } from './todos/todo-list';
import {dataProvider} from "./dataProvider";
import { TodoEdit } from './todos/todo-edit';
import { todoCreate } from './todos/todo-create';

export const App = () => (
<Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="todo" list={TodoList} edit={TodoEdit} create={todoCreate} />
    {/* <Resource name="todo" list={TodoList} edit={TodoEdit} create={todoCreate} /> */}
</Admin>
);
