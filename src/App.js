import SideMenu from "./components/SideMenu";
import DisplayData from "./components/DisplayData";
import Main from "./components/Main";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="flex">
      <SideMenu />
      <Main />
      {/* <DisplayData /> */}
      {/* <Settings /> */}
    </div>
  );
}

export default App;
