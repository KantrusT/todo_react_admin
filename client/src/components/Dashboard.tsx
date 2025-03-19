import { Link } from 'react-router-dom';
import {Title} from 'react-admin';

export const Dashboard = () => (
    <div>
        <Title title="Dashboard" />
        <h1>Dashboard</h1>
        <Link to="/todo">Todos</Link>
        <Link to="/todo/create">Create a new Todo</Link>
    </div>
);