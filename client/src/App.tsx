import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { Layout } from "./Layout";
import { TodoList } from './todos/todo-list';
import {dataProvider} from "./dataProvider";

export const App = () => (
<Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="todo" list={TodoList} edit={EditGuesser} />
</Admin>
);
