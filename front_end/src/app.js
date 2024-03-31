import { Routes, Route } from "react-router-dom";
import About from "./places/About/About";
import Error from "./places/Error/Error";
import Home from "./places/Home/Home";

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