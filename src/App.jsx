import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route
                        path="/home"
                        element={[<Header />, <Home />, <Footer />]}
                    />
                    <Route
                        path="/aboutUs"
                        element={[<Header />, <AboutUs />, <Footer />]}
                    />

                    <Route
                        path="/"
                        element={[<Header />, <Home />, <Footer />]}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
