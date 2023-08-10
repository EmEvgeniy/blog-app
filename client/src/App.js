import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Wrapper from "./components/wrapper/Wrapper";
import MainPage from "./pages/mainPage/MainPage";


function App() {
	return <div className='App'>
    <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </Wrapper>
    </BrowserRouter>
  </div>;
}

export default App;
