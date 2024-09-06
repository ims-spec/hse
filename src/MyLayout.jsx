import { Layout } from "react-admin"
import MainMenu from "./components/Menu"


export default function MyLayout({ children }) { 
    return (
        <Layout menu={MainMenu}>
         {/* <Layout> */}
            {children}
        </Layout>
    )
}