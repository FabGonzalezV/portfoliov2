
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './core/LandingPage';
import MainPage from './core/MainPage';
import { About } from './core/About';
import {ContactForm} from './core/Contact';
export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/proyectos" element={<MainPage/>} />
                <Route path="/proyectos#skills" element={<MainPage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<ContactForm/>} />
            </Routes>
        </BrowserRouter>
    );
}


