import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {Header} from "./widgets/Header";
import {useState} from "react";
import {AppProvider} from "./AppContext.tsx";
import {EcoMarketPage} from "./pages/EcoMarketPage";
import {CollectionPointsPage} from "./pages/CollectionPointsPage";
import {ProfilePage} from "./pages/ProfilePage";
import {Footer} from "./widgets/Footer";
import {Modal} from "./widgets/Modal";

function App() {

    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <Router>
            <AppProvider>
                <Header setShowModal={setShowModal}/>
                <Modal showModal={showModal} setShowModal={setShowModal}/>

                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/ecoMarket" element={<EcoMarketPage/>}/>
                        <Route path="/collectionPoints" element={<CollectionPointsPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </AppProvider>
        </Router>
    )
}

export default App