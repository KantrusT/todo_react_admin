import { Admin, Resource, CustomRoutes } from 'react-admin';
// import { Layout } from "./Layout";
import { TodoList } from './todos/todo-list';
import {dataProvider} from "./dataProvider";
import { TodoEdit } from './todos/todo-edit';
import { ToDoCreate } from './todos/todo-create';
import { Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { CustomLayout } from './components/CustomLayout';

export const App = () => (
<Admin layout={CustomLayout} dataProvider={dataProvider}>
    <Resource name="todo" list={TodoList} edit={TodoEdit} create={ToDoCreate} />
    <CustomRoutes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
        </CustomRoutes>
    {/* <Resource name="todo" list={TodoList} edit={TodoEdit} create={todoCreate} /> */}
</Admin>
);
