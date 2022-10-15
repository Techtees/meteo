import DisplayData from "./components/DisplayData";
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./components/Main";
import Settings from "./components/Settings";
import { AppProvider } from "./context/AppContext";
import { SettingProvider } from "./context/SettingContext";
import Layout from "./container/Layout";
import { weather } from "./data/api/weather";


function App() {
  
  return (
    <AppProvider>
      <BrowserRouter>
            <Routes>
              <Route exact path="/" element = {
                <Layout>
                <Main/>
              </Layout>
              } 
              />
              <Route path= '/details' element ={
                <Layout>
                   <DisplayData />
                </Layout>
                } 
                />
              <Route path= '/settings' element ={ 
                  <Layout>
                    <SettingProvider>
                        <Settings />
                    </SettingProvider>
                  </Layout>
                }
                 />
            </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
