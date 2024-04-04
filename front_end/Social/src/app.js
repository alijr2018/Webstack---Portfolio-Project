import { Routes, Route } from "react-router-dom";
import About from "./place/About/About";
import Error from "./place/Error/Error";
import Home from "./place/Home/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="about" element={ <About />} />
            <Route path="*" element={ <Error />} />
        </Routes>
    );
}

export default App;