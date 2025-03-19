import { MenuItemLink, Menu} from "react-admin";
// import SettingsIcon from '@mui/icons-material/Settings';

export const CustomMenu = () => (
    <Menu>
        <Menu.ResourceItems/>
        <MenuItemLink to="/dashboard" primaryText="Dashboard"/>
        <MenuItemLink to="/todo" primaryText="Todos" />
    </Menu>
);