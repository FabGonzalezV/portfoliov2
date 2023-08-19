
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './core/LandingPage';
import MainPage from './core/MainPage';
import { About } from './core/About';
import {ContactForm} from './core/Contact';
export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfoliov2/" element={<LandingPage/>} />
                <Route path="/portfoliov2/proyectos" element={<MainPage/>} />
                <Route path="/portfoliov2/proyectos#skills" element={<MainPage/>} />
                <Route path="/portfoliov2/about" element={<About/>} />
                <Route path="/portfoliov2/contact" element={<ContactForm/>} />
            </Routes>
        </BrowserRouter>
    );
}


