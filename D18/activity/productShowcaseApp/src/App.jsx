import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Products from "./pages/Products";

function App() {
    return (
        <Router>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<Products />} />
            </Routes>
        </Router>
    );
}

export default App;
