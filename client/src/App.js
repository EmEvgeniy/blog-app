import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Wrapper from "./components/wrapper/Wrapper";
import MainPage from "./pages/mainPage/MainPage";
import DefPage from "./pages/defPage/DefPage";


function App() {
	return <div className='App'>
    <BrowserRouter>
    {/* <Wrapper>
      
    </Wrapper> */}
    <Routes>
        <Route path="/" element={<DefPage/>}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
