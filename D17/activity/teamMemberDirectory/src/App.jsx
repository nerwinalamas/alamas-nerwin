import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";

function App() {
    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />}>
                    <Route path=":id" element={<TeamDetails />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
