import SideMenu from "../components/SideMenu";

 const Layout = ({children}) => {
    return (  <>
        <SideMenu/>
        {children}
    </>);
 }
  
 export default Layout;