import SideMenu from "../components/SideMenu";

 const Layout = ({children}) => {
    return (  <div className="flex relative">
        <SideMenu/>
        {children}
    </div>);
 }
  
 export default Layout;