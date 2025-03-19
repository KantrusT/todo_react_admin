import { CheckForApplicationUpdate, Layout } from "react-admin";
import { ReactNode } from "react";
import { CustomMenu } from "./CustomMenu";

export const CustomLayout = ({ children }: { children?: ReactNode }) => (
    <Layout menu={CustomMenu}>
        {children}
        <CheckForApplicationUpdate />
    </Layout>
);
