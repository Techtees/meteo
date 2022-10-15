import SideMenu from "../components/SideMenu";
import { SettingProvider } from "../context/SettingContext";
 const Layout = ({children}) => {
    return (  <div className="flex relative">
        <SettingProvider>
            <SideMenu/>
            {children}
        </SettingProvider>
    </div>);
 }
  
 export default Layout;