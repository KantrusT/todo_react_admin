import jsonServerProvider from "ra-data-json-server"; // Use ra-data-json-server

export const dataProvider = jsonServerProvider(import.meta.env.VITE_API); // Use jsonServerProvider