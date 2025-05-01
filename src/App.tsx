import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {Header} from "./components/Header";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </Router>
    )
}

export default App