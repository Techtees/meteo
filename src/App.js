import DisplayData from "./components/DisplayData";
import  {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Main from "./components/Main";
import Settings from "./components/Settings";
import { AppProvider } from "./context/AppContext";
import Layout from "./container/Layout";

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
                    <DisplayData  />
                </Layout>
                } 
                />
              <Route path= '/settings' element ={ 
                  <Layout>
                       <Settings />
                  </Layout>
                }
                 />
            </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
